import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Home } from '@/components/home/Home';
import { Footer } from '@/components/sections/Footer';
import { JsonLd } from '@/components/JsonLd';
import { website, softwareApplication, graph } from '@/lib/schema';

// The full site, staged here behind the waitlist until launch. Hidden from
// search until the flip (this becomes the index and the teaser is retired).
export const metadata: Metadata = {
  title: 'The family holiday companion',
  alternates: { canonical: '/homepage' },
  robots: { index: false, follow: false },
};

export default function HomepagePage() {
  return (
    <>
      <JsonLd json={graph(website(), softwareApplication())} />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
