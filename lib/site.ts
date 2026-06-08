/** Site-wide constants and environment-derived config. */

export const SITE = {
  name: 'Yaycay',
  domain: 'yaycay.ai',
  tagline: 'For families making memories.', // fixed, never reword
  description:
    'One chat builds your whole family holiday. Every child gets a personalised adventure, grown-ups get a calm plan, and the family keeps a memory book. Build your free day.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yaycay.ai',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.yaycay.ai',
} as const;

/** The free-demo handoff. Param agreed with the FE thread (app reads ?email=). */
export function demoHandoffUrl(email: string): string {
  const base = `${SITE.appUrl.replace(/\/$/, '')}/demo`;
  const url = new URL(base);
  if (email) url.searchParams.set('email', email);
  return url.toString();
}

export const CTA_LABEL = 'Build your free day';
