import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { JsonLd } from '@/components/JsonLd';
import { itemList, breadcrumb, graph } from '@/lib/schema';
import { answersHub } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Family travel questions, answered',
  description: answersHub.intro,
  alternates: { canonical: '/answers' },
  robots: { index: false, follow: false },
};

export default function AnswersHubPage() {
  const allQuestions = answersHub.themes.flatMap((t) =>
    t.questions.map((q) => ({ name: q.label, path: `/answers/${q.slug}` })),
  );

  return (
    <>
      <JsonLd
        json={graph(
          itemList(
            'Yaycay family travel answers',
            'Practical, parent-to-parent answers to the questions families ask about travelling with kids.',
            allQuestions,
          ),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Answers', path: '/answers' },
          ]),
        )}
      />
      <Header />
      <main id="main">
        {/* 1 · Hub header */}
        <section className={s.soberHero} aria-labelledby="answers-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="answers-title" className={s.heroTitle}>
                {answersHub.title}
              </h1>
              <p className={s.heroSub}>{answersHub.intro}</p>
            </div>
          </div>
        </section>

        {/* 2 · Question list by theme */}
        <section className="section">
          <div className="container">
            {answersHub.themes.map((theme) => (
              <div key={theme.title} className={s.themeGroup}>
                <h2 className={s.themeTitle}>{theme.title}</h2>
                <ul className={s.questionList}>
                  {theme.questions.map((q) => (
                    <li key={q.slug}>
                      <Link href={`/answers/${q.slug}`} className={s.questionLink}>
                        {q.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3 · Hub closing CTA */}
        <ClosingForm
          id="answers-cta"
          headline={answersHub.closing.headline}
          subhead={answersHub.closing.subhead}
          source="answers-hub"
        />
      </main>
      <Footer />
    </>
  );
}
