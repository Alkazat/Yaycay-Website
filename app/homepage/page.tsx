import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Home } from '@/components/home/Home';
import { Footer } from '@/components/sections/Footer';
import { SITE } from '@/lib/site';

// The full site, staged here behind the waitlist until launch. Hidden from
// search until the flip (this becomes the index and the teaser is retired).
export const metadata: Metadata = {
  title: 'The family holiday companion',
  alternates: { canonical: '/homepage' },
  robots: { index: false, follow: false },
};

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

export default function HomepagePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
