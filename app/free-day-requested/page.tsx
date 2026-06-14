import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { freeDayRequested } from '@/lib/content';
import s from '../free-day/free-day.module.css';

export const metadata: Metadata = {
  title: 'Your free day is being built',
  alternates: { canonical: '/free-day-requested' },
  robots: { index: false, follow: false },
};

export default function FreeDayRequestedPage() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={`container ${s.headerInner}`}>
          <Link href="/" aria-label="Yaycay home">
            <Logo width={108} />
          </Link>
        </div>
      </header>

      <main id="main" className={s.main}>
        <div className="container">
          <div className={s.inner}>
            <h1 className={s.title}>{freeDayRequested.headline}</h1>
            <p className={s.sub}>{freeDayRequested.body}</p>
            {/* Spec CTA target is /how-it-works (Phase 2); routes home until built. */}
            <Button href="/" variant="cta" size="lg">
              Back to Yaycay
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
