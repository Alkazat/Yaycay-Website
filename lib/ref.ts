/**
 * Affiliate referral-code plumbing. The code resolved at `/go/<slug>` must ride
 * through signup to the Stripe Checkout session so the influencer is attributed.
 * We carry it two ways for resilience: a URL `?ref=` param and a first-party
 * functional cookie. The cookie is strictly functional (it carries a discount
 * the visitor opted into by following an affiliate link), not analytics or ads,
 * so it is set without gating on the marketing-cookie consent banner.
 */

export const REF_COOKIE = 'yaycay_ref';
const REF_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** A conservative code shape: letters, digits, dash, underscore. */
const REF_RE = /^[A-Za-z0-9_-]{1,40}$/;

export function isValidRef(code: string | null | undefined): code is string {
  return typeof code === 'string' && REF_RE.test(code);
}

/** Persist the referral code as a functional first-party cookie (client-side). */
export function setRefCookie(code: string): void {
  if (typeof document === 'undefined' || !isValidRef(code)) return;
  document.cookie = `${REF_COOKIE}=${encodeURIComponent(code)}; max-age=${REF_MAX_AGE}; path=/; SameSite=Lax`;
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]!) : null;
}

/**
 * Resolve the active referral code at submit time: an explicit value wins, then
 * the URL `?ref=`, then the cookie. Returns undefined when nothing valid is set.
 */
export function resolveRef(explicit?: string): string | undefined {
  if (isValidRef(explicit)) return explicit;
  if (typeof window !== 'undefined') {
    const fromUrl = new URLSearchParams(window.location.search).get('ref');
    if (isValidRef(fromUrl)) return fromUrl;
  }
  const fromCookie = readCookie(REF_COOKIE);
  return isValidRef(fromCookie) ? fromCookie : undefined;
}
