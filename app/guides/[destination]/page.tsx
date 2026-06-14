import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/sections/GuidePage';
import { guides } from '@/lib/content';

type Params = { destination: string };
type Slug = keyof typeof guides;

export function generateStaticParams(): Params[] {
  return (Object.keys(guides) as Slug[]).map((destination) => ({ destination }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { destination } = await params;
  const g = guides[destination as Slug];
  if (!g) return {};
  return {
    title: g.title,
    description: g.subhead,
    alternates: { canonical: `/guides/${destination}` },
  };
}

export default async function GuideRoute({ params }: { params: Promise<Params> }) {
  const { destination } = await params;
  const slug = destination as Slug;
  if (!guides[slug]) notFound();
  return <GuidePage slug={slug} />;
}
