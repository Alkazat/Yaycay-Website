import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { faqPage as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Straight answers about Yaycay, including the awkward ones: what it is, how the free day works, allergies and safety, pricing and refunds, your data, and during the trip.',
  alternates: { canonical: '/faq' },
  robots: { index: false, follow: false },
};

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/** FAQPage schema so AI assistants and search can extract each answer. */
function FaqSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.groups.flatMap((g) =>
      g.items.map((it) => ({
        '@type': 'Question',
        name: it.q,
        acceptedAnswer: { '@type': 'Answer', text: it.a },
      })),
    ),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="faq-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="faq-title" className={s.heroTitle}>
                {p.header.headline}
              </h1>
              <p className={s.heroSub}>{p.header.subhead}</p>
              <nav className={s.jumpLinks} aria-label="FAQ categories">
                {p.groups.map((g) => (
                  <a key={g.name} className={s.jumpLink} href={`#${slug(g.name)}`}>
                    {g.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {p.groups.map((g) => (
              <div key={g.name} id={slug(g.name)} className={s.faqGroup}>
                <h2 className={s.faqGroupTitle}>{g.name}</h2>
                {g.items.map((it) => (
                  <details key={it.q} className={s.faqQa}>
                    <summary>{it.q}</summary>
                    <p className={s.faqAnswer}>{it.a}</p>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </section>

        <ClosingForm
          id="faq-cta"
          headline="Build your free day"
          subhead="Three questions about your trip. One full day, free, in your inbox within 24 hours."
          source="faq"
          secondary={{ label: 'Read about allergy checks in full', href: '/allergy-safety' }}
        />
      </main>
      <Footer />
    </>
  );
}
