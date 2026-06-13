'use client';

import { useId, useState } from 'react';
import { trackLead } from '@/lib/analytics';
import { freeDayForm } from '@/lib/content';
import styles from './FreeDayForm.module.css';

type Status = 'idle' | 'submitting' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The free day order form (work-order C21). Three trip questions, then email.
 * Used standalone on /free-day and embedded as the closing section elsewhere.
 */
export function FreeDayForm({ id = 'free-day', source = 'free-day' }: { id?: string; source?: string }) {
  const destId = useId();
  const whenId = useId();
  const whoId = useId();
  const emailId = useId();
  const trapId = useId();

  const [dest, setDest] = useState('');
  const [when, setWhen] = useState('');
  const [who, setWho] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email so we can send your day.');
      return;
    }
    setStatus('submitting');
    setMessage('');

    const utm =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('utm_source') ?? undefined
        : undefined;

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          consent: true,
          source: utm ?? source,
          company,
          trip: { destination: dest.trim(), when: when.trim(), party: who.trim() },
        }),
      });
      if (!res.ok) throw new Error(`Capture failed (${res.status})`);
      trackLead();
      window.location.assign('/free-day-requested');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
    }
  }

  const busy = status === 'submitting';

  return (
    <form id={id} className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor={trapId}>Company</label>
        <input id={trapId} type="text" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      <div className={styles.field}>
        <label htmlFor={destId} className={styles.label}>
          {freeDayForm.fields.destination}
        </label>
        <input id={destId} className={styles.input} type="text" value={dest} onChange={(e) => setDest(e.target.value)} disabled={busy} placeholder="Singapore, Japan, somewhere sunny..." />
      </div>

      <div className={styles.field}>
        <label htmlFor={whenId} className={styles.label}>
          {freeDayForm.fields.when}
        </label>
        <input id={whenId} className={styles.input} type="text" value={when} onChange={(e) => setWhen(e.target.value)} disabled={busy} placeholder="July, the spring holidays, not sure yet..." />
      </div>

      <div className={styles.field}>
        <label htmlFor={whoId} className={styles.label}>
          {freeDayForm.fields.who}
        </label>
        <textarea id={whoId} className={styles.textarea} rows={2} value={who} onChange={(e) => setWho(e.target.value)} disabled={busy} placeholder="Two kids, 6 and 9. Maya has a tree-nut allergy." />
      </div>

      <div className={styles.field}>
        <label htmlFor={emailId} className={styles.label}>
          {freeDayForm.fields.email}
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
        {busy ? 'Building...' : freeDayForm.button}
      </button>
      <p className={styles.reassurance}>{freeDayForm.reassurance}</p>

      <p id={`${emailId}-msg`} className={styles.message} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
