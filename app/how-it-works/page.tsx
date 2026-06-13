import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { howItWorksPage as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Exactly what happens, from first chat to keepsake: one conversation in, a holiday built around each child out, Yaycay alongside you the whole trip, and a memory book after.',
  alternates: { canonical: '/how-it-works' },
  robots: { index: false, follow: false },
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="hiw-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="hiw-title" className={s.heroTitle}>
                {p.hero.headline}
              </h1>
              <p className={s.heroSub}>{p.hero.subhead}</p>
              <div className={s.ctaRow}>
                <Button href="/free-day" variant="cta" size="lg">
                  Build your free day
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="The five steps">
          <div className="container">
            <ol className={s.stepList}>
              {p.steps.map((step) => (
                <li key={step.n} className={s.step}>
                  <span className={s.stepNum} aria-hidden="true">
                    {step.n}
                  </span>
                  <div>
                    <h2 className={s.stepTitle}>{step.title}</h2>
                    <p className={s.stepBody}>{step.body}</p>
                    {'cta' in step && step.cta && (
                      <Link className={s.stepCta} href={step.cta.href}>
                        {step.cta.label} &rarr;
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="hiw-faq">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="hiw-faq" className={s.heroTitle}>
                {p.faqHead}
              </h2>
            </div>
            <div className={s.faq}>
              {p.faq.map((item) => (
                <div key={item.q} className={s.faqItem}>
                  <h3 className={s.faqQ}>{item.q}</h3>
                  <p className={s.faqA}>{item.a}</p>
                </div>
              ))}
              <p className={s.closingSecondary}>
                <Link href={p.faqCta.href}>{p.faqCta.label} &rarr;</Link>
              </p>
            </div>
          </div>
        </section>

        <ClosingForm
          id="hiw-cta"
          headline={p.closing.headline}
          subhead={p.closing.subhead}
          source="how-it-works"
          secondary={p.closing.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
