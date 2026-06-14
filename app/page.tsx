import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Home } from '@/components/home/Home';
import { Footer } from '@/components/sections/Footer';
import { JsonLd } from '@/components/JsonLd';
import { website, softwareApplication, graph } from '@/lib/schema';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The family holiday companion',
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd json={graph(website(), softwareApplication())} />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
