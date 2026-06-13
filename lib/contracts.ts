/**
 * The integration surface for the website, mirroring `@alkazat/contracts@^0.13.0`.
 *
 * The back end serves two public Supabase Edge Functions (no JWT; send the
 * project `apikey` anon key only) under
 * `https://<project-ref>.supabase.co/functions/v1`:
 *   - POST /signup-capture   lead capture + Brevo sync with consent (idempotent on email)
 *   - POST /demo-generate-day instant rich AI free day for one child + grown-ups teaser
 *
 * These mirrors keep the website honest about the handshake until the package is
 * pinned. Replace with the imported types once `@alkazat/contracts` is installed;
 * do not let the two diverge.
 */

export interface SignupCaptureRequest {
  email: string;
  /** Explicit marketing consent captured at the form. */
  consent: boolean;
  /** Where the lead came from, for attribution (e.g. utm_source or source_page). */
  source?: string;
  /** Free-day trip context from the order form, when present. */
  trip?: {
    destination?: string;
    when?: string;
    party?: string;
  };
}

export interface SignupCaptureResponse {
  ok: boolean;
  /** The URL the visitor should be handed to (the app demo), if provided. */
  redirectUrl?: string;
}

/** Response from POST /demo-generate-day (the instant free-day hook). */
export interface DemoGenerateDayResponse {
  ok: boolean;
  /** Whether the day came from the model or the deterministic fallback. */
  generated_by?: 'ai' | 'fallback';
  /** The rendered day payload; full shape owned by @alkazat/contracts. */
  day?: unknown;
}
