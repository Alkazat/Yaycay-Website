import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/site';
import { ConsentBanner } from '@/components/ConsentBanner';
import { JsonLd } from '@/components/JsonLd';
import { organization, graph } from '@/lib/schema';
// Brand fonts (Fredoka + Nunito variable webfonts) ship with the design system.
import './globals.css';

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
    // og:image is produced per-page by the file-based `opengraph-image.tsx`
    // routes (see lib/og). No static image here.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The holiday your kids will never stop talking about.',
    description: SITE.description,
    // twitter:image falls back to the page's opengraph-image.
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
    <html lang="en">
      <body>
        <JsonLd json={graph(organization())} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
