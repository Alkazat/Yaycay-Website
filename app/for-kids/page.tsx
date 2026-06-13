import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/sections/PageHero';
import { ExplorerTypes } from '@/components/sections/ExplorerTypes';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { forKids } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For kids',
  description:
    'One holiday, four ways to live it. Little Explorers, Explorers and Big Explorers each get their own version of the trip, pitched to their age, while grown-ups hold the plan behind a PIN. It grows with your child.',
  alternates: { canonical: '/for-kids' },
  robots: { index: false, follow: false },
};

export default function ForKidsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero eyebrow={forKids.eyebrow} title={forKids.title} subtitle={forKids.subtitle} />
        <ExplorerTypes />
        <FeatureSection
          id="kids-features"
          eyebrow="Shared by every explorer"
          title="What every explorer gets"
          items={forKids.features}
          sunk
        />
        <ClosingForm
          id="kids-cta"
          headline="Build a free day your kids can't stop talking about"
          subhead="Three questions about your trip. Each child gets their own version of one full day, free, in your inbox within 24 hours."
          source="for-kids"
          secondary={{ label: 'See a real free day', href: '/sample-day' }}
        />
      </main>
      <Footer />
    </>
  );
}
