import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { answers } from '@/lib/content';
import s from '@/components/content/content.module.css';

type Slug = keyof typeof answers;

export function AnswerPage({ slug }: { slug: Slug }) {
  const a = answers[slug];

  // Structured for AI-assistant citation: the direct answer is the extraction unit.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: a.question,
      acceptedAnswer: { '@type': 'Answer', text: a.directAnswer },
    },
  };

  const introImage = a.image.placement === 'intro' ? a.image : null;
  const productImage = a.image.placement === 'product' ? a.image : null;

  return (
    <>
      <Header />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* 1 · Question header */}
        <section className={s.soberHero} aria-labelledby="answer-title">
          <div className="container">
            <div className={s.soberInner}>
              <p className={s.summaryLabel}>{a.theme}</p>
              <h1 id="answer-title" className={s.heroTitle}>
                {a.question}
              </h1>
              <p className={s.heroSub}>{a.subhead}</p>
            </div>
          </div>
        </section>

        {/* Direct-answer box (the AI-extraction unit) */}
        <section className="section">
          <div className="container">
            <div className={s.summaryBox}>
              <p className={s.summaryLabel}>The direct answer</p>
              <p className={s.summaryBody}>{a.directAnswer}</p>
            </div>
          </div>
        </section>

        {/* Image pass · editorial spot illustration */}
        {introImage && (
          <section className="section">
            <div className="container">
              <ImageSlot
                className={s.guideWrap}
                src={introImage.src}
                alt={introImage.alt}
                source={introImage.source}
                frame={introImage.frame}
                ratio="16 / 9"
                brief={introImage.brief}
              />
            </div>
          </section>
        )}

        {/* 2-4 · Method / prose / sober sections */}
        {a.sections.map((section) => (
          <section className="section" key={section.head} aria-label={section.head}>
            <div className="container">
              {section.kind === 'method' && (
                <div className={s.guideWrap}>
                  <h2 className={s.guideSectionTitle}>{section.head}</h2>
                  <ol className={s.methodList}>
                    {section.items.map((item) => (
                      <li key={item.lead} className={s.methodItem}>
                        <strong className={s.methodLead}>{item.lead}</strong> {item.body}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {section.kind === 'prose' && (
                <div className={s.guideWrap}>
                  <h2 className={s.guideSectionTitle}>{section.head}</h2>
                  <p className={s.guideProse}>{section.body}</p>
                </div>
              )}
              {section.kind === 'sober' && (
                <div className={s.soberBlock}>
                  <h2 className={s.guideSectionTitle}>{section.head}</h2>
                  <p className={s.guideProse}>{section.body}</p>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* 5 · Where Yaycay fits (product panel, after the full answer) */}
        <section className="section" aria-labelledby="answer-product">
          <div className="container">
            <div className={s.productPanel}>
              <h2 id="answer-product" className={s.guideSectionTitle}>
                {a.product.head}
              </h2>
              <p className={s.productPanelBody}>{a.product.body}</p>
              {productImage && (
                <ImageSlot
                  className={s.guideWrap}
                  src={productImage.src}
                  alt={productImage.alt}
                  source={productImage.source}
                  frame={productImage.frame}
                  ratio="9 / 16"
                  brief={productImage.brief}
                />
              )}
              <div className={s.ctaRow}>
                <Button href={a.product.primaryCta.href} variant="cta">
                  {a.product.primaryCta.label}
                </Button>
                <Button href={a.product.secondaryCta.href} variant="ghost">
                  {a.product.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · Related reading */}
        <section className="section" aria-labelledby="answer-related">
          <div className="container">
            <div className={s.guideWrap}>
              <h2 id="answer-related" className={s.guideSectionTitle}>
                Keep reading
              </h2>
            </div>
            <div className={s.relatedRow}>
              {a.related.map((r) => (
                <Link key={r.href} href={r.href} className={s.relatedCard}>
                  <p className={s.relatedCardTitle}>{r.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
