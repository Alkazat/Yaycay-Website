import { renderOgImage } from '@/lib/og';
import { comparisons } from '@/lib/content';

export const runtime = 'nodejs';
export const alt = 'Compare Yaycay';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Params = { competitor: string };
type Slug = keyof typeof comparisons;

export function generateStaticParams(): Params[] {
  return (Object.keys(comparisons) as Slug[]).map((competitor) => ({ competitor }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const { competitor } = await params;
  const c = comparisons[competitor as Slug];
  return renderOgImage({ title: c ? `Yaycay vs ${c.name}` : 'Compare Yaycay' });
}
