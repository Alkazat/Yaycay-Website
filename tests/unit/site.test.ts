import { describe, expect, it } from 'vitest';
import { demoHandoffUrl, SITE, CTA_LABEL, WAITLIST_LABEL } from '@/lib/site';

describe('demoHandoffUrl', () => {
  it('builds the app demo URL with the email prefilled', () => {
    const url = new URL(demoHandoffUrl('parent@example.com'));
    expect(url.pathname).toBe('/demo');
    expect(url.searchParams.get('email')).toBe('parent@example.com');
  });

  it('omits the email param when none is given', () => {
    const url = new URL(demoHandoffUrl(''));
    expect(url.searchParams.has('email')).toBe(false);
  });
});

describe('brand invariants', () => {
  it('keeps the tagline exactly as specified', () => {
    expect(SITE.tagline).toBe('For families making memories.');
  });

  it('keeps the single conversion CTA label', () => {
    expect(CTA_LABEL).toBe('Build your free day');
  });

  it('has a distinct pre-launch waitlist label', () => {
    expect(WAITLIST_LABEL).toBe('Join the waitlist');
  });
});
