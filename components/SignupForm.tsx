'use client';

import { useId, useState } from 'react';
import { trackLead } from '@/lib/analytics';
import { demoHandoffUrl, CTA_LABEL } from '@/lib/site';
import type { SignupCaptureResponse } from '@/lib/contracts';
import styles from './SignupForm.module.css';

type Status = 'idle' | 'submitting' | 'done' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignupForm({ id = 'signup', compact = false }: { id?: string; compact?: boolean }) {
  const emailId = useId();
  const consentId = useId();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setMessage('Please agree to receive your free day and occasional updates.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    const source =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('utm_source') ?? undefined
        : undefined;

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, consent, source }),
      });

      if (!res.ok) throw new Error(`Capture failed (${res.status})`);

      const data = (await res.json()) as SignupCaptureResponse;

      // The single conversion event the funnel optimises against.
      trackLead();

      setStatus('done');
      setMessage('Got it. Taking you to your free day...');

      const redirect = data.redirectUrl ?? demoHandoffUrl(trimmed);
      // Brief beat so the success state is seen, then hand off to the app demo.
      window.setTimeout(() => {
        window.location.assign(redirect);
      }, 700);
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
    }
  }

  const busy = status === 'submitting' || status === 'done';

  return (
    <form
      id={id}
      className={[styles.form, compact ? styles.compact : ''].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={emailId} className={styles.label}>
            Email address
          </label>
          <input
            id={emailId}
            className={styles.input}
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={busy}
            required
            aria-invalid={status === 'error'}
            aria-describedby={`${emailId}-msg`}
          />
        </div>
        <button type="submit" className={styles.submit} disabled={busy}>
          {status === 'submitting' ? 'Building...' : CTA_LABEL}
        </button>
      </div>

      <div className={styles.consent}>
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={busy}
        />
        <label htmlFor={consentId}>
          Email me my free day and the occasional Yaycay update. No spam, unsubscribe
          anytime. See our <a href="/legal/privacy">privacy notice</a>.
        </label>
      </div>

      <p
        id={`${emailId}-msg`}
        className={[
          styles.message,
          status === 'error' ? styles.error : '',
          status === 'done' ? styles.success : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
