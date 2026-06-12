import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/sections/PageHero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { forKids } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For kids',
  description:
    'Yaycay turns the family holiday into an adventure book each child owns: their own explorer mode, games, challenges, rewards and a keepsake journal.',
  alternates: { canonical: '/for-kids' },
  robots: { index: false, follow: false },
};

export default function ForKidsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero eyebrow={forKids.eyebrow} title={forKids.title} subtitle={forKids.subtitle} />
        <FeatureSection id="kids-features" title="Made for the way kids travel" items={forKids.features} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
