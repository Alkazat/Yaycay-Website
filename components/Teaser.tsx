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
      <div className={styles.inner}>
        <Logo width={150} className={styles.logo} />
        <p className={styles.eyebrow}>
          <Icon name="star" />
          {teaser.eyebrow}
        </p>
        <h1 className={styles.title}>{teaser.title}</h1>
        <p className={styles.subtitle}>{teaser.subtitle}</p>
        <p className={styles.incentive}>{teaser.incentive}</p>
        <div className={styles.formWrap}>
          <SignupForm id="waitlist" mode="waitlist" />
        </div>
        <p className={styles.note}>{teaser.note}</p>
        <p className={styles.trust}>{teaser.trust}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.tagline}>{SITE.tagline}</span>
        <a href="/legal/privacy">Privacy</a>
      </div>
    </main>
  );
}
