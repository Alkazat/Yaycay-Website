import Link from 'next/link';
import { FreeDayForm } from '@/components/FreeDayForm';
import s from '@/components/content/content.module.css';

/** Reusable closing free-day form band used across the spec content pages. */
export function ClosingForm({
  id,
  headline,
  subhead,
  source,
  secondary,
  defaultDestination,
  refCode,
}: {
  id: string;
  headline: string;
  subhead: string;
  source: string;
  secondary?: { label: string; href: string };
  defaultDestination?: string;
  refCode?: string;
}) {
  return (
    <section id="free-day" className={`section ${s.closing}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={s.closingInner}>
          <h2 id={`${id}-title`} className={s.closingTitle}>
            {headline}
          </h2>
          <p className={s.closingSub}>{subhead}</p>
          <div className={s.closingFormWrap}>
            <FreeDayForm
              id={`${id}-form`}
              source={source}
              defaultDestination={defaultDestination}
              refCode={refCode}
            />
          </div>
          {secondary && (
            <p className={s.closingSecondary}>
              <Link href={secondary.href}>{secondary.label}</Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
