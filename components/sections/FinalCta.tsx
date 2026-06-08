import { SignupForm } from '@/components/SignupForm';
import { finalCta } from '@/lib/content';
import s from './sections.module.css';

export function FinalCta() {
  return (
    <section className={`section ${s.finalCta}`} aria-labelledby="final-title">
      <span
        className={s.cloud}
        aria-hidden="true"
        style={{ width: 130, height: 40, top: 30, left: '8%', boxShadow: '50px -14px 0 -6px var(--cream-50)', opacity: 0.85 }}
      />
      <div className="container">
        <div className={s.finalInner}>
          <h2 id="final-title" className={`${s.finalTitle} ${s.boxart}`}>
            {finalCta.title}
          </h2>
          <p className={s.finalBody}>{finalCta.body}</p>
          <div className={s.finalFormWrap}>
            <SignupForm id="signup-final" />
          </div>
        </div>
      </div>
    </section>
  );
}
