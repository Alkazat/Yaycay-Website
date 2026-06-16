'use client';

/**
 * Privacy-first analytics. Pixels are only loaded after the visitor consents,
 * and the single conversion the GTM machine optimises against is the `Lead`
 * event fired on successful capture.
 */

const CONSENT_KEY = 'yaycay-consent';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type ConsentState = 'granted' | 'denied' | 'unknown';

/**
 * Same-tab signal fired the moment the visitor decides. localStorage's native
 * `storage` event never fires in the tab that made the change, so consumers
 * (e.g. the hero simulation, which waits for the cookie banner to clear) listen
 * for this instead.
 */
export const CONSENT_EVENT = 'yaycay:consent';

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unknown';
  const stored = window.localStorage.getItem(CONSENT_KEY);
  if (stored === 'granted' || stored === 'denied') return stored;
  return 'unknown';
}

export function setConsent(state: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_KEY, state);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  if (state === 'granted') loadPixels();
}

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

let pixelsLoaded = false;

/** Inject the Meta Pixel and GA4 tags. Idempotent, only runs once. */
export function loadPixels(): void {
  if (typeof window === 'undefined' || pixelsLoaded) return;
  pixelsLoaded = true;

  if (META_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq?.('init', META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  }

  if (GA_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }
}

/**
 * Fire the single Lead conversion. Safe to call even before pixels load: it is
 * a no-op without consent, so no data leaves the page until the visitor agrees.
 */
export function trackLead(): void {
  if (typeof window === 'undefined') return;
  if (getConsent() !== 'granted') return;
  window.fbq?.('track', 'Lead');
  window.gtag?.('event', 'generate_lead', { currency: 'USD' });
}
