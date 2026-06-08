import { SignupForm } from '@/components/SignupForm';
import { finalCta } from '@/lib/content';
import s from './sections.module.css';

export function FinalCta() {
  return (
    <section className={`section ${s.finalCta}`} aria-labelledby="final-title">
      <div className="container">
        <div className={s.finalInner}>
          <h2 id="final-title" className={s.finalTitle}>
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
