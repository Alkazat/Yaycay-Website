import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { AffiliateLanding } from '@/components/sections/AffiliateLanding';
import { getAffiliate } from '@/lib/affiliates';

type Params = { slug: string };

// Resolved per request against live affiliate data; campaign URLs are not indexed.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Your Yaycay offer',
  robots: { index: false, follow: false },
};

export default async function AffiliateRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const affiliate = await getAffiliate(slug);
  // Unknown or paused affiliate: degrade to the homepage with no code.
  if (!affiliate) redirect('/');
  return <AffiliateLanding affiliate={affiliate} />;
}
