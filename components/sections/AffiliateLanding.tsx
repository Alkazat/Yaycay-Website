import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { RefCookie } from '@/components/RefCookie';
import type { Affiliate } from '@/lib/affiliates';
import s from '@/components/content/content.module.css';

/**
 * Affiliate landing for `/go/<slug>`. Headlines the discount, persists the code
 * (cookie + the embedded form's refCode), and drops the visitor into the normal
 * free-day funnel with the code attached. Not gated; a marketing page.
 */
export function AffiliateLanding({ affiliate }: { affiliate: Affiliate }) {
  return (
    <>
      <RefCookie code={affiliate.code} />
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="go-title">
          <div className="container">
            <div className={s.soberInner}>
              <p className={s.summaryLabel}>In partnership with {affiliate.name}</p>
              <h1 id="go-title" className={s.heroTitle}>
                {affiliate.discountPercent}% off your Yaycay holiday with {affiliate.name}
              </h1>
              <p className={s.heroSub}>
                One chat builds your whole family holiday: a personalised adventure for every child,
                allergy-checked meals, a guide that travels with you, and a keepsake book at the end.
                Start with a free day, and your {affiliate.discountPercent}% discount is waiting at
                checkout.
              </p>
            </div>
          </div>
        </section>

        <ClosingForm
          id="go-cta"
          headline="Build your free day"
          subhead={`Tell us where you are going and who is coming, ages and any allergies included. One real day of your trip, free, in your inbox within 24 hours, with ${affiliate.discountPercent}% off when you book the full holiday.`}
          source={`affiliate-${affiliate.code}`}
          refCode={affiliate.code}
        />
      </main>
      <Footer />
    </>
  );
}
