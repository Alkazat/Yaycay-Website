import { Logo } from '@/components/ui/Logo';
import { Icon } from '@/components/ui/Icon';
import { SignupForm } from '@/components/SignupForm';
import { teaser } from '@/lib/content';
import { SITE } from '@/lib/site';
import styles from './Teaser.module.css';

/** Pre-launch teaser: box-art scene + waitlist capture. The finished funnel
 *  lives at the hidden /homepage until launch. */
export function Teaser() {
  return (
    <main id="main" className={styles.teaser}>
      <span
        className={styles.cloud}
        aria-hidden="true"
        style={{ width: 150, height: 44, top: '12%', left: '10%', opacity: 0.9, boxShadow: '56px -16px 0 -6px var(--cream-50)' }}
      />
      <span
        className={styles.cloud}
        aria-hidden="true"
        style={{ width: 110, height: 34, top: '22%', right: '12%', opacity: 0.8 }}
      />

      <div className={styles.inner}>
        <Logo width={150} className={styles.logo} />
        <p className={styles.eyebrow}>
          <Icon name="star" />
          {teaser.eyebrow}
        </p>
        <h1 className={styles.title}>{teaser.title}</h1>
        <p className={styles.subtitle}>{teaser.subtitle}</p>
        <div className={styles.formWrap}>
          <SignupForm id="waitlist" mode="waitlist" />
        </div>
        <p className={styles.note}>{teaser.note}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.tagline}>{SITE.tagline}</span>
        <a href="/legal/privacy">Privacy</a>
      </div>
    </main>
  );
}
