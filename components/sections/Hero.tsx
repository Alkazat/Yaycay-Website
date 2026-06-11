import { SignupForm } from '@/components/SignupForm';
import { Icon } from '@/components/ui/Icon';
import { hero } from '@/lib/content';
import s from './sections.module.css';

export function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={s.heroInner}>
          <p className={s.heroEyebrow}>
            <Icon name="star" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className={`${s.heroTitle} ${s.boxart}`}>
            {hero.title}
          </h1>
          <p className={s.heroSubtitle}>{hero.subtitle}</p>
          <div className={s.heroFormWrap}>
            <SignupForm id="signup" />
          </div>
          <p className={s.heroNote}>{hero.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
