import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Yaycay. We are a small team and a real person will reply.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="ct-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="ct-title" className={s.heroTitle}>
                Get in touch
              </h1>
              <p className={s.heroSub}>
                We are a small team, and a real person will reply. The quickest way to reach us is
                email.
              </p>
              <div className={s.ctaRow}>
                <Button href="mailto:hello@yaycay.ai" variant="cta" size="lg">
                  Email hello@yaycay.ai
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={s.narrative}>
              <p className={s.narrativeBody}>
                Already started a free day, or bought a holiday? Just reply to the email we sent
                you and it lands straight with us, with your trip already attached. For press or
                partnerships, email the same address and we will point you to the right person.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
