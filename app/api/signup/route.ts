import { NextResponse } from 'next/server';
import type { SignupCaptureRequest, SignupCaptureResponse } from '@/lib/contracts';
import { demoHandoffUrl } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort, in-memory per-IP throttle. Serverless instances are ephemeral and
// not shared, so this curbs bursts against a warm instance rather than acting as
// a global limiter (use a KV/Upstash store for that). Cheap defence-in-depth.
const RL_WINDOW_MS = 60_000;
const RL_MAX = 12;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RL_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RL_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RL_MAX;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]!.trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

/**
 * The website's single backend touch. It prefers the BE `/signup/capture`
 * endpoint (the @alkazat/contracts handshake); if that is not configured or
 * fails, it captures the lead straight into Brevo behind the same function so
 * the funnel never drops a signup. The redirect is wired here so the client
 * always gets a destination back.
 */
export async function POST(request: Request) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests' },
      { status: 429 },
    );
  }

  let body: SignupCaptureRequest & { company?: unknown };
  try {
    body = (await request.json()) as SignupCaptureRequest & { company?: unknown };
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const consent = Boolean(body.consent);
  const source = typeof body.source === 'string' ? body.source : undefined;
  const trip = body.trip;
  // Affiliate referral / Stripe promotion code. Carried to the app demo handoff
  // so it survives to Checkout; also forwarded to BE for lead attribution.
  const ref =
    typeof body.ref === 'string' && /^[A-Za-z0-9_-]{1,40}$/.test(body.ref) ? body.ref : undefined;

  // Honeypot: a hidden field no human fills. If it has a value, treat as a bot.
  // Acknowledge with a normal-looking response so the bot moves on, but never
  // persist the lead.
  const trap = typeof body.company === 'string' ? body.company.trim() : '';
  if (trap) {
    console.warn('[signup] Honeypot triggered; dropping suspected bot submission.');
    return NextResponse.json({ ok: true, redirectUrl: demoHandoffUrl(email, ref) });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 422 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: 'Consent required' }, { status: 422 });
  }

  const redirectUrl = demoHandoffUrl(email, ref);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE;

  // Preferred path: hand the lead to BE (@alkazat/contracts POST /signup-capture),
  // which owns marketing_contacts + Brevo sync. Public endpoint: send the project
  // anon key as the `apikey` header, no JWT.
  if (apiBase) {
    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const apiKey = process.env.API_KEY;
      if (apiKey) headers.apikey = apiKey;
      const res = await fetch(`${apiBase.replace(/\/$/, '')}/signup-capture`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, consent, source, ref, trip } satisfies SignupCaptureRequest),
      });
      if (res.ok) {
        const data = (await res.json().catch(() => ({}))) as Partial<SignupCaptureResponse>;
        return NextResponse.json({
          ok: true,
          redirectUrl: data.redirectUrl ?? redirectUrl,
        });
      }
      // fall through to Brevo fallback on a non-2xx
      console.warn(`[signup] BE capture returned ${res.status}; falling back to Brevo.`);
    } catch (err) {
      // network error, fall through to Brevo fallback
      console.warn('[signup] BE capture request failed; falling back to Brevo:', err);
    }
  }

  // Fallback path: capture straight into Brevo.
  const brevoKey = process.env.BREVO_API_KEY;
  if (brevoKey) {
    const listId = process.env.BREVO_LIST_ID;
    const listIds = listId ? [Number(listId)] : undefined;

    // Try the full payload first, then degrade so a misconfigured attribute or
    // list never costs us the lead. Every failure is logged with Brevo's reason
    // so the cause (bad key, missing CONSENT/SOURCE attribute, bad list id) is
    // visible in the function logs.
    const attempts: Array<Record<string, unknown>> = [
      {
        email,
        updateEnabled: true,
        attributes: { CONSENT: consent, SOURCE: source ?? 'website' },
        ...(listIds ? { listIds } : {}),
      },
    ];
    if (listIds) attempts.push({ email, updateEnabled: true, listIds });
    attempts.push({ email, updateEnabled: true });

    let lastStatus = 0;
    let lastDetail = '';
    for (let i = 0; i < attempts.length; i++) {
      try {
        const res = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'api-key': brevoKey,
          },
          body: JSON.stringify(attempts[i]),
        });
        // Brevo returns 201 (created) or 204 (updated). Either is success.
        if (res.ok || res.status === 204) {
          if (i > 0) {
            console.warn(
              `[signup] Brevo captured on degraded attempt ${i + 1}. Check BREVO_LIST_ID ` +
                `and that the CONSENT/SOURCE contact attributes exist on this account. ` +
                `Full payload was rejected with ${lastStatus}: ${lastDetail.slice(0, 200)}`,
            );
          }
          return NextResponse.json({ ok: true, redirectUrl });
        }
        lastStatus = res.status;
        lastDetail = await res.text().catch(() => '');
        console.error(
          `[signup] Brevo attempt ${i + 1} failed (${lastStatus}): ${lastDetail.slice(0, 400)}`,
        );
      } catch (err) {
        console.error(`[signup] Brevo attempt ${i + 1} request error:`, err);
      }
    }
    return NextResponse.json({ ok: false, error: 'Capture failed' }, { status: 502 });
  }

  // Nothing is configured (local dev). Acknowledge so the handoff still works,
  // but make it visible in logs that the lead was not persisted.
  console.warn('[signup] No NEXT_PUBLIC_API_BASE or BREVO_API_KEY set; lead not persisted.');
  return NextResponse.json({ ok: true, redirectUrl });
}
