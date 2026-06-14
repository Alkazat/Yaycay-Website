import type { Metadata } from 'next';
import { Teaser } from '@/components/Teaser';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { website, softwareApplication, graph } from '@/lib/schema';

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
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Yaycay' }],
  },
};

export default function IndexPage() {
  return (
    <>
      {/* Organization ships site-wide via the root layout; the homepage adds WebSite + the app offer. */}
      <JsonLd json={graph(website(), softwareApplication())} />
      <Teaser />
    </>
  );
}
