'use client';

import { useId, useState } from 'react';
import { trackLead } from '@/lib/analytics';
import { demoHandoffUrl, CTA_LABEL, WAITLIST_LABEL } from '@/lib/site';
import type { SignupCaptureResponse } from '@/lib/contracts';
import styles from './SignupForm.module.css';

type Status = 'idle' | 'submitting' | 'done' | 'error';
type Mode = 'demo' | 'waitlist';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignupForm({
  id = 'signup',
  compact = false,
  mode = 'demo',
}: {
  id?: string;
  compact?: boolean;
  /** 'demo' captures then hands off to the app demo; 'waitlist' captures only. */
  mode?: Mode;
}) {
  const isWaitlist = mode === 'waitlist';
  const emailId = useId();
  const consentId = useId();
  const trapId = useId();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  // Honeypot: stays empty for real users; bots that auto-fill reveal themselves.
  const [company, setCompany] = useState('');
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
      setMessage(
        isWaitlist
          ? 'Please agree to be emailed when Yaycay opens.'
          : 'Please agree to receive your free day and occasional updates.',
      );
      return;
    }

    setStatus('submitting');
    setMessage('');

    const utm =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('utm_source') ?? undefined
        : undefined;
    // Tag waitlist leads for attribution when no explicit utm_source is present.
    const source = utm ?? (isWaitlist ? 'waitlist' : undefined);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, consent, source, company }),
      });

      if (!res.ok) throw new Error(`Capture failed (${res.status})`);

      const data = (await res.json()) as SignupCaptureResponse;

      // The single conversion event the funnel optimises against.
      trackLead();

      setStatus('done');

      if (isWaitlist) {
        // Pre-launch: capture only, no handoff. Keep the visitor on the teaser.
        setMessage("You're on the list. We'll email you the moment Yaycay opens.");
        return;
      }

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

  // Celebratory confirmation replaces the waitlist form once they're in.
  if (isWaitlist && status === 'done') {
    return (
      <div
        className={[styles.successCard, compact ? styles.compact : ''].filter(Boolean).join(' ')}
        role="status"
        aria-live="polite"
      >
        <span className={styles.successCheck} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className={styles.successTitle}>You&rsquo;re on the list.</p>
        <p className={styles.successText}>We&rsquo;ll email you the moment Yaycay opens.</p>
      </div>
    );
  }

  const busy = status === 'submitting' || status === 'done';
  const submitLabel = isWaitlist ? WAITLIST_LABEL : CTA_LABEL;
  const busyLabel = isWaitlist ? 'Joining...' : 'Building...';

  return (
    <form
      id={id}
      className={[styles.form, compact ? styles.compact : ''].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot. Off-screen and hidden from assistive tech; only bots fill it. */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor={trapId}>Company</label>
        <input
          id={trapId}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

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
          {status === 'submitting' ? busyLabel : submitLabel}
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
          {isWaitlist
            ? 'Email me when Yaycay opens, plus the occasional update.'
            : 'Email me my free day and the occasional Yaycay update.'}{' '}
          No spam, unsubscribe anytime. See our <a href="/legal/privacy">privacy notice</a>.
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
