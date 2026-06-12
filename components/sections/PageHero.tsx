import { Button } from '@/components/ui/Button';
import s from './sections.module.css';

/** Lightweight box-art hero for the inner marketing pages (no signup form). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className={s.pageHero} aria-labelledby="page-title">
      <span className={s.heroSun} aria-hidden="true" />
      <div className="container">
        <div className={s.pageHeroInner}>
          <p className={s.pageHeroEyebrow}>{eyebrow}</p>
          <h1 id="page-title" className={`${s.pageHeroTitle} ${s.boxart}`}>
            {title}
          </h1>
          <p className={s.pageHeroSubtitle}>{subtitle}</p>
          <Button href="/homepage#start" variant="cta" size="lg">
            Start today, free
          </Button>
        </div>
      </div>
    </section>
  );
}
