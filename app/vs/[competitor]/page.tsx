import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonPage } from '@/components/sections/ComparisonPage';
import { comparisons } from '@/lib/content';

type Params = { competitor: string };
type Slug = keyof typeof comparisons;

export function generateStaticParams(): Params[] {
  return (Object.keys(comparisons) as Slug[]).map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { competitor } = await params;
  const c = comparisons[competitor as Slug];
  if (!c) return {};
  return {
    title: `Yaycay vs ${c.name}`,
    description: c.subhead,
    alternates: { canonical: `/vs/${competitor}` },
    robots: { index: false, follow: false },
  };
}

export default async function ComparisonRoute({ params }: { params: Promise<Params> }) {
  const { competitor } = await params;
  const slug = competitor as Slug;
  if (!comparisons[slug]) notFound();
  return <ComparisonPage slug={slug} />;
}
