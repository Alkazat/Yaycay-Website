import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Wedge } from '@/components/sections/Wedge';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Showcase } from '@/components/sections/Showcase';
import { Destinations } from '@/components/sections/Destinations';
import { Pricing } from '@/components/sections/Pricing';
import { Proof } from '@/components/sections/Proof';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { SITE } from '@/lib/site';

// The finished funnel, parked here until launch. Hidden from search until the
// teaser is retired and this becomes the index again.
export const metadata: Metadata = {
  title: 'The family holiday companion',
  alternates: { canonical: '/homepage' },
  robots: { index: false, follow: false },
};

/** Structured data so the funnel earns rich results. */
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
      <span id="top" />
      <Header />
      <main id="main">
        <Hero />
        <Wedge />
        <HowItWorks />
        <Showcase />
        <Destinations />
        <Pricing />
        <Proof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
