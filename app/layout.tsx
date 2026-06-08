import type { Metadata, Viewport } from 'next';
import { Fredoka, Nunito } from 'next/font/google';
import { SITE } from '@/lib/site';
import { ConsentBanner } from '@/components/ConsentBanner';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Yaycay - the family holiday companion',
    template: '%s | Yaycay',
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'family holiday planner',
    'kids travel app',
    'trip planner for families',
    'holiday itinerary AI',
    'family travel companion',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: 'The holiday your kids will never stop talking about.',
    description: SITE.description,
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'Yaycay' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The holiday your kids will never stop talking about.',
    description: SITE.description,
    images: ['/og.svg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#2A96D8',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
