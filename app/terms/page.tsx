import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The terms that apply when you use Yaycay.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: false },
};

// {Founder/legal to supply final wording. The structure stands; the words are placeholder.}
const SECTIONS = [
  {
    h: 'Using Yaycay',
    b: 'Yaycay provides planning assistance and a during-trip companion for families. You are responsible for your own bookings; we do not sell flights, hotels or tickets, and we are not a booking agent.',
  },
  {
    h: 'Payment and refunds',
    b: 'Yaycay is a one-off purchase per holiday (US$129 done-for-you, or US$59 bring-your-own-AI). There is no subscription. If a purchased plan does not deliver what we promised, contact us within {14} days of delivery and our refund policy applies.',
  },
  {
    h: 'Allergy and dietary information',
    b: 'Yaycay provides flags, checks and reminders to help you stay in control. It does not, and cannot, guarantee that any meal is free of an allergen. Always confirm allergy and dietary requirements directly with food providers on the day. Yaycay provides information, not medical or safety guarantees.',
  },
  {
    h: 'Your data',
    b: 'We use your information to build and run your trip, and nothing else. We do not sell personal data or run advertising. See the privacy policy for the full detail, including how to request deletion.',
  },
  {
    h: 'Changes to these terms',
    b: 'We may update these terms from time to time. Material changes will be notified to active customers by email.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="tm-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="tm-title" className={s.heroTitle}>
                Terms of service
              </h1>
              <p className={s.heroSub}>
                The terms that apply when you use Yaycay. {'{'}Final wording to be confirmed before
                launch.{'}'}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={s.narrative}>
              {SECTIONS.map((sec) => (
                <div key={sec.h} style={{ marginBottom: 'var(--space-6)' }}>
                  <h2 className={s.faqGroupTitle}>{sec.h}</h2>
                  <p className={s.narrativeBody}>{sec.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
