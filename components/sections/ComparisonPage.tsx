import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb, graph } from '@/lib/schema';
import { comparisons } from '@/lib/content';
import s from '@/components/content/content.module.css';

type Slug = keyof typeof comparisons;

export function ComparisonPage({ slug }: { slug: Slug }) {
  const c = comparisons[slug];
  const others = (Object.keys(comparisons) as Slug[]).filter((k) => k !== slug);

  return (
    <>
      <JsonLd
        json={graph(
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Compare Yaycay', path: '/vs' },
            { name: `Yaycay vs ${c.name}`, path: `/vs/${slug}` },
          ]),
        )}
      />
      <Header />
      <main id="main">
        {/* 1 · Comparison hero */}
        <section className={s.vsHero} aria-labelledby="vs-title">
          <div className="container">
            <div className={s.soberInner}>
              <span className={s.vsLogos} aria-hidden="true">
                <span className={s.vsChip}>{c.name}</span>
                <span className={s.vsVersus}>vs</span>
                <span className={`${s.vsChip} ${s.vsChipYaycay}`}>Yaycay</span>
              </span>
              <h1 id="vs-title" className={s.vsTitle}>
                {c.title}
              </h1>
              <p className={s.heroSub}>{c.subhead}</p>
              <div className={s.ctaRow}>
                <Button href={c.heroCta.href} variant="cta" size="lg">
                  {c.heroCta.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Credit block */}
        <section className="section" aria-labelledby="vs-credit">
          <div className="container">
            <div className={s.creditBlock}>
              <h2 id="vs-credit" className={s.creditTitle}>
                {c.creditHead}
              </h2>
              <p className={s.creditBody}>{c.credit}</p>
            </div>
          </div>
        </section>

        {/* 3 · The fork */}
        <section className={`section ${s.howSection}`} aria-labelledby="vs-fork">
          <div className="container">
            <div className={s.fork}>
              <h2 id="vs-fork" className={s.forkTitle}>
                {c.forkHead}
              </h2>
              <p className={s.forkBody}>{c.fork}</p>
              <ImageSlot
                className={s.forkDiagram}
                src={`/media/vs/${slug}-fork.png`}
                alt={`A diagram contrasting ${c.name} and Yaycay: where each one is built to take the family`}
                source="nanobanana"
                ratio="16 / 7"
                brief={c.diagramBrief}
              />
            </div>
          </div>
        </section>

        {/* 4 · Comparison matrix */}
        <section className="section" aria-labelledby="vs-matrix">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="vs-matrix" className={s.heroTitle}>
                Side by side
              </h2>
            </div>
            <div className={s.matrixWrap}>
              <table className={s.matrix}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">{c.name}</th>
                    <th scope="col">Yaycay</th>
                  </tr>
                </thead>
                <tbody>
                  {c.matrix.rows.map((r) => (
                    <tr key={r.label}>
                      <td>{r.label}</td>
                      <td>{r.a}</td>
                      <td className={s.colYaycay}>{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5 · Who should pick which */}
        <section className="section" aria-labelledby="vs-rec">
          <div className="container">
            <div className={s.recBlock}>
              <h2 id="vs-rec" className={s.recTitle}>
                {c.recHead}
              </h2>
              <p className={s.recBody}>{c.rec}</p>
              <div className={s.recCtas}>
                <Button href={c.primaryCta.href} variant="cta">
                  {c.primaryCta.label}
                </Button>
                <Button href={c.secondaryCta.href} variant="ghost">
                  {c.secondaryCta.label}
                </Button>
              </div>
            </div>
            <p className={s.vsOthers}>
              Comparing other planners?
              {others.map((o) => (
                <Link key={o} href={`/vs/${o}`}>
                  Yaycay vs {comparisons[o].name}
                </Link>
              ))}
            </p>
          </div>
        </section>

        <ClosingForm
          id="vs-cta"
          headline="The fastest way to judge the difference"
          subhead="Three questions about your trip. One full day of your actual holiday, free, in your inbox within 24 hours."
          source={`vs-${slug}`}
        />
      </main>
      <Footer />
    </>
  );
}
