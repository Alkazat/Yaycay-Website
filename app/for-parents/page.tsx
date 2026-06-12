import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/sections/PageHero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { forParents } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For parents',
  description:
    'Yaycay takes the admin of a family holiday off your plate: the mental load lifted, allergies handled at every meal, packing sorted, and the logistics kept to one side.',
  alternates: { canonical: '/for-parents' },
  robots: { index: false, follow: false },
};

export default function ForParentsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero eyebrow={forParents.eyebrow} title={forParents.title} subtitle={forParents.subtitle} />
        <FeatureSection
          id="parents-features"
          title="The grown-up side, quietly handled"
          items={forParents.features}
        />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
