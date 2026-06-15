/**
 * Affiliate landing resolution for `/go/<slug>` (see
 * docs handoff: affiliate program). Resolves an influencer's landing slug to the
 * discount code that must ride through the funnel to Stripe Checkout.
 *
 * Resolution order:
 *   1. BE public read `GET /affiliates/by-slug/<slug>` (when NEXT_PUBLIC_API_BASE
 *      is configured), the source of truth that Admin updates live.
 *   2. A small static fallback map (STATIC_AFFILIATES) for the "bake it at build"
 *      option when the list is tiny or BE is not reachable yet.
 *
 * A missing or paused affiliate resolves to null; the page then degrades to the
 * homepage with no code, per the handoff. Never block or error a visitor on a
 * bad slug.
 */

export type Affiliate = {
  /** The Stripe promotion code applied at Checkout, e.g. "SUNNY15". */
  code: string;
  /** Whole-number percent off, e.g. 15. */
  discountPercent: number;
  /** Display name, e.g. "Sunny Travels". */
  name: string;
  /** Only "active" affiliates are shown; anything else degrades to homepage. */
  status: 'active' | 'paused' | string;
};

/**
 * Optional build-time map. Leave empty to rely solely on BE. Admin/founder can
 * paste entries here if the programme is small and BE is not wired yet.
 *
 * NOTE: `code` must be a real **Stripe promotion code** (applied at Checkout) and
 * `discountPercent` should match it; set both per the live Stripe dashboard. The
 * influencer email is recorded in a comment for attribution only — it is not used
 * by the site.
 */
export const STATIC_AFFILIATES: Record<string, Affiliate> = {
  // Dave — @hustlecoffeegrind — dyeates@dwhy.com.au
  hustlecoffeegrind: { code: 'HUSTLE15', discountPercent: 15, name: 'Hustle Coffee Grind', status: 'active' },
  // Carmen — @carmsyeates — carmen@dwhy.com.au
  carmsyeates: { code: 'CARMS15', discountPercent: 15, name: 'Carmen Yeates', status: 'active' },
};

function isUsable(a: Affiliate | null | undefined): a is Affiliate {
  return Boolean(a && a.code && a.status === 'active' && Number.isFinite(a.discountPercent));
}

/** Resolve a landing slug to a usable affiliate, or null to degrade to homepage. */
export async function getAffiliate(slug: string): Promise<Affiliate | null> {
  const clean = slug.trim().toLowerCase();
  if (!clean) return null;

  const apiBase = process.env.NEXT_PUBLIC_API_BASE;
  if (apiBase) {
    try {
      const headers: Record<string, string> = { accept: 'application/json' };
      const apiKey = process.env.API_KEY;
      if (apiKey) headers.apikey = apiKey;
      const res = await fetch(
        `${apiBase.replace(/\/$/, '')}/affiliates/by-slug/${encodeURIComponent(clean)}`,
        { headers, cache: 'no-store' },
      );
      if (res.ok) {
        const data = (await res.json().catch(() => null)) as Affiliate | null;
        if (isUsable(data)) return data;
        return null; // resolved but paused/invalid: degrade, do not fall through to static
      }
      // Non-2xx (e.g. 404 unknown slug): fall through to the static map.
    } catch {
      // Network/BE error: fall through to the static map.
    }
  }

  const fallback = STATIC_AFFILIATES[clean];
  return isUsable(fallback) ? fallback : null;
}
