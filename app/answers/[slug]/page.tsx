import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnswerPage } from '@/components/sections/AnswerPage';
import { answers } from '@/lib/content';

type Params = { slug: string };
type Slug = keyof typeof answers;

export function generateStaticParams(): Params[] {
  return (Object.keys(answers) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = answers[slug as Slug];
  if (!a) return {};
  return {
    title: a.question,
    description: a.subhead,
    alternates: { canonical: `/answers/${slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function AnswerRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!answers[slug as Slug]) notFound();
  return <AnswerPage slug={slug as Slug} />;
}
