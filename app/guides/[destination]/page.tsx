import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/sections/GuidePage';
import { guides } from '@/lib/content';

type Params = { destination: string };
type Slug = keyof typeof guides;

export function generateStaticParams(): Params[] {
  return (Object.keys(guides) as Slug[]).map((destination) => ({ destination }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const g = guides[params.destination as Slug];
  if (!g) return {};
  return {
    title: g.title,
    description: g.subhead,
    alternates: { canonical: `/guides/${params.destination}` },
    robots: { index: false, follow: false },
  };
}

export default function GuideRoute({ params }: { params: Params }) {
  const slug = params.destination as Slug;
  if (!guides[slug]) notFound();
  return <GuidePage slug={slug} />;
}
