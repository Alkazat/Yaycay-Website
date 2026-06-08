import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'How Yaycay handles the one piece of data the marketing site collects: your email, captured with consent so we can send your free day.',
  alternates: { canonical: '/legal/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow">Privacy</p>
          <h1>Privacy notice</h1>
          <p className="lead">
            This marketing site collects one thing: your email, only when you ask us to
            build your free day, and only with your consent.
          </p>

          <h2>What we collect here</h2>
          <p>
            When you submit the form, we capture your email address and your consent so we
            can send your free day and the occasional Yaycay update. We may record where
            the visit came from (for example, the ad campaign) so we know what is working.
          </p>

          <h2>How we use it</h2>
          <p>
            Your email is added to our marketing contacts and synced to our email provider
            (Brevo) with your consent state. You can unsubscribe from any email, at any
            time, and we will stop sending.
          </p>

          <h2>Analytics and ads</h2>
          <p>
            We only load analytics and advertising cookies if you accept them in the
            consent banner. Decline and the site works exactly the same; nothing is sent.
          </p>

          <h2>Data minimisation</h2>
          <p>
            The marketing site never holds trip data, children&rsquo;s data, or payment
            details. Those live in the secure Yaycay app, governed by its own privacy
            controls and the Australian Privacy Principles.
          </p>

          <h2>Your choices</h2>
          <p>
            To access, correct or delete the email we hold, or to ask a question, contact{' '}
            <a href="mailto:privacy@yaycay.ai">privacy@yaycay.ai</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
