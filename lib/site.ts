/** Site-wide constants and environment-derived config. */

export const SITE = {
  name: 'Yaycay',
  domain: 'yaycay.ai',
  tagline: 'For families making memories.', // fixed, never reword
  description:
    'One chat builds your whole family holiday. Every child gets a personalised adventure, grown-ups get a calm plan, and the family keeps a memory book. Build your free day.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.yaycay.ai',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.yaycay.ai',
} as const;

/**
 * The free-demo handoff. Param agreed with the FE thread (app reads ?email=).
 * An affiliate `ref` rides along (app reads ?ref=) so it reaches Checkout.
 */
export function demoHandoffUrl(email: string, ref?: string): string {
  const base = `${SITE.appUrl.replace(/\/$/, '')}/demo`;
  const url = new URL(base);
  if (email) url.searchParams.set('email', email);
  if (ref) url.searchParams.set('ref', ref);
  return url.toString();
}

/**
 * Organisation details for JSON-LD schema. Founder-fill the optional fields
 * (name, socials) before the go-public flip; empty values are omitted from the
 * emitted schema rather than published as placeholders.
 */
export const ORG = {
  supportEmail: 'hello@yaycay.ai',
  logoPath: '/brand/yaycay-app-icon.png', // square brand mark for Organization schema
  founderName: '', // {founder-fill}
  sameAs: [] as string[], // {founder-fill: LinkedIn, Instagram, Facebook URLs}
} as const;

/** Launch/content dates for Article schema. Founder may refine per piece. */
export const CONTENT_DATES = {
  published: '2026-06-14',
  modified: '2026-06-14',
} as const;

export const CTA_LABEL = 'Build your free day';

/** Pre-launch waitlist capture label (teaser index). */
export const WAITLIST_LABEL = 'Join the waitlist';
