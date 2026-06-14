import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonPage } from '@/components/sections/ComparisonPage';
import { comparisons } from '@/lib/content';

type Params = { competitor: string };
type Slug = keyof typeof comparisons;

export function generateStaticParams(): Params[] {
  return (Object.keys(comparisons) as Slug[]).map((competitor) => ({ competitor }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = comparisons[params.competitor as Slug];
  if (!c) return {};
  return {
    title: `Yaycay vs ${c.name}`,
    description: c.subhead,
    alternates: { canonical: `/vs/${params.competitor}` },
    robots: { index: false, follow: false },
  };
}

export default function ComparisonRoute({ params }: { params: Params }) {
  const slug = params.competitor as Slug;
  if (!comparisons[slug]) notFound();
  return <ComparisonPage slug={slug} />;
}
