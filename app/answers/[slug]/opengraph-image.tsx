import { renderOgImage } from '@/lib/og';
import { answers } from '@/lib/content';

export const runtime = 'nodejs';
export const alt = 'Yaycay family travel answer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Params = { slug: string };
type Slug = keyof typeof answers;

export function generateStaticParams(): Params[] {
  return (Object.keys(answers) as Slug[]).map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = answers[slug as Slug];
  return renderOgImage({ title: a ? a.question : 'Family travel questions, answered' });
}
