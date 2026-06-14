import { renderOgImage, type OgPhoto } from '@/lib/og';
import { guides } from '@/lib/content';

export const runtime = 'nodejs';
export const alt = 'Yaycay family travel guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Params = { destination: string };
type Slug = keyof typeof guides;

export function generateStaticParams(): Params[] {
  return (Object.keys(guides) as Slug[]).map((destination) => ({ destination }));
}

// Loosely pair each guide with the closest brand photo; gradient fallback otherwise.
const PHOTO: Record<string, OgPhoto> = {
  'singapore-with-kids': 'city',
  'japan-with-kids': 'city',
  'london-with-kids': 'city',
  'paris-with-kids': 'city',
  'bali-with-kids': 'sand',
  'gold-coast-with-kids': 'sand',
};

export default async function Image({ params }: { params: Promise<Params> }) {
  const { destination } = await params;
  const g = guides[destination as Slug];
  return renderOgImage({
    title: g ? `${g.destination} with kids` : 'Family travel guide',
    photo: PHOTO[destination],
  });
}
