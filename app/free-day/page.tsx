import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FreeDayForm } from '@/components/FreeDayForm';
import { freeDayForm, footer } from '@/lib/content';
import s from './free-day.module.css';

export const metadata: Metadata = {
  title: 'Build your free day',
  description:
    'Tell us three things about your trip and we will build one full day, free, so you can judge Yaycay on the real thing. It arrives in your inbox within 24 hours.',
  alternates: { canonical: '/free-day' },
  robots: { index: false, follow: false },
};

/** Conversion form page (T9): logo + one reassurance line, no nav, nothing competing. */
export default function FreeDayPage() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={`container ${s.headerInner}`}>
          <Link href="/homepage" aria-label="Yaycay home">
            <Logo width={108} />
          </Link>
          <span className={s.reassure}>Your free day arrives within 24 hours.</span>
        </div>
      </header>

      <main id="main" className={s.main}>
        <div className="container">
          <div className={s.inner}>
            <h1 className={s.title}>{freeDayForm.headline}</h1>
            <p className={s.sub}>{freeDayForm.subhead}</p>
            <div className={s.formWrap}>
              <FreeDayForm id="free-day-page" source="free-day-page" />
            </div>
          </div>
        </div>
      </main>

      <footer className={s.footer}>
        <div className="container">
          <p className={s.legal}>{footer.legal}</p>
          <p className={s.links}>
            <Link href="/legal/privacy">Privacy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
