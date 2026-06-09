import type { Metadata } from 'next';
import { Teaser } from '@/components/Teaser';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Join the waitlist',
  description:
    'Yaycay is the family holiday companion that turns trip admin into part of the fun. Join the waitlist and be first in when we open.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Yaycay is coming. Join the waitlist.',
    description:
      'Shared itineraries, packing lists, and a countdown the whole family loves. Be first in when Yaycay opens.',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'Yaycay' }],
  },
};

/** Structured data: the brand, on the public teaser. */
function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function IndexPage() {
  return (
    <>
      <JsonLd />
      <Teaser />
    </>
  );
}
