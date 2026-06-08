'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '@/lib/analytics';
import styles from './ConsentBanner.module.css';

/**
 * Privacy-preserving by default: pixels stay off until the visitor accepts.
 * The banner only appears when consent is unknown, so returning visitors who
 * already chose are never nagged.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === 'unknown') setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(state: 'granted' | 'denied') {
    setConsent(state);
    setVisible(false);
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies for analytics and ads only if you say yes. They help us reach more
        families. You can decline and the site works just the same.
      </p>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={() => choose('denied')}>
          Decline
        </button>
        <button className={styles.accept} onClick={() => choose('granted')}>
          Accept
        </button>
      </div>
    </div>
  );
}
