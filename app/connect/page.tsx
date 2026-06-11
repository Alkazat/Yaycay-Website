import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { connect } from '@/lib/content';
import s from './connect.module.css';

export const metadata: Metadata = {
  title: 'Connect your own AI',
  description:
    'Use the Bring your own AI plan? Connect Yaycay to ChatGPT, Claude or Gemini in about two minutes with these step-by-step instructions.',
  alternates: { canonical: '/connect' },
};

const TONE: Record<string, string> = {
  sky: s.toneSky,
  sun: s.toneSun,
  meadow: s.toneMeadow,
};

export default function ConnectPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.hero} aria-labelledby="connect-title">
          <div className="container">
            <div className={s.heroInner}>
              <h1 id="connect-title" className={s.title}>
                {connect.title}
              </h1>
              <p className={s.intro}>{connect.intro}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={s.needs}>
              <h2 className={s.needsTitle}>What you will need</h2>
              <ul className={s.needsList}>
                {connect.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </div>

            <div className={s.providers}>
              {connect.providers.map((provider) => (
                <article key={provider.id} className={s.provider}>
                  <div className={s.providerHead}>
                    <span
                      className={`${s.providerBadge} ${TONE[provider.tone] ?? s.toneSky}`}
                      aria-hidden="true"
                    >
                      {provider.name}
                    </span>
                    <h2 className={s.providerName}>{provider.name}</h2>
                  </div>
                  <ol className={s.steps}>
                    {provider.steps.map((step) => (
                      <li key={step} className={s.step}>
                        <p className={s.stepText}>{step}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>

            <p className={s.help}>
              {connect.help.split('hello@yaycay.ai')[0]}
              <a href="mailto:hello@yaycay.ai">hello@yaycay.ai</a>
              {connect.help.split('hello@yaycay.ai')[1]}
            </p>

            <div className={s.backCta}>
              <Button href="/homepage#pricing" variant="primary">
                Back to pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
