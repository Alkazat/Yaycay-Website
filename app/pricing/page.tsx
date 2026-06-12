import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/sections/PageHero';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'One holiday, two ways to buy. Done for you with our AI, or bring the ChatGPT, Claude or Gemini you already use. Pay once per holiday, no subscription.',
  alternates: { canonical: '/pricing' },
  robots: { index: false, follow: false },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Pricing"
          title="Simple pricing. No surprises."
          subtitle="Pay once per holiday. No subscription, ever. Start free, and only pay when you love it."
        />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
