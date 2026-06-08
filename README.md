# Yaycay Website

The Yaycay marketing funnel. One job: turn awareness into free-demo signups.
A fast, on-brand landing surface for Meta (and later Google) ads whose single
conversion event is **Build your free day**. It captures an email to Brevo and
hands the visitor to the app demo.

> Read `00-MODEL-CONTEXT.md` and `04-WEBSITE-HANDOFF.md` first. This site never
> holds customer data beyond the lead email it forwards.

## Stack

- TypeScript + Next.js (App Router). Pages are statically generated (SSG); a
  single `/api/signup` route handler runs as a serverless function on Vercel for
  the Brevo capture fallback.
- Design system tokens (Fredoka + Nunito, the semantic palette) live in
  `styles/tokens.css`. When the shared `@yaycay` design system package is
  available, swap that file for its `styles.css`.
- The only backend integration is the `POST /signup/capture` DTO from
  `@yaycay/contracts`, mirrored in `lib/contracts.ts` until the package is pinned.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you have; all optional for local dev
npm run dev                  # http://localhost:3000
```

With no env vars set, the capture endpoint acknowledges the lead (logging a
warning that it was not persisted) and still hands off to the demo, so the funnel
is fully clickable locally.

## The one integration

The CTA posts `{ email, consent, source }` to `/api/signup`, which:

1. Proxies to BE `${NEXT_PUBLIC_API_BASE}/signup/capture` when configured
   (BE owns `marketing_contacts` + Brevo sync), otherwise
2. Captures the contact straight into Brevo with `BREVO_API_KEY`, otherwise
3. Acknowledges in local dev.

It always returns a `redirectUrl`, and the client hands the visitor to
`${NEXT_PUBLIC_APP_URL}/demo?email=<prefilled>` (param agreed with the FE thread).

## Analytics and consent

Privacy-preserving by default. Meta Pixel and GA4 only load after the visitor
accepts the consent banner. On a successful capture the funnel fires a single
**Lead** event, the conversion the GTM machine optimises against.

## Environment

See `.env.example`. All values are optional for local dev.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_API_BASE` | BE capture endpoint host |
| `NEXT_PUBLIC_APP_URL` | app.yaycay.ai (demo handoff) |
| `NEXT_PUBLIC_SITE_URL` | public origin (canonical, sitemap, OG) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel id |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement id |
| `BREVO_API_KEY` | server-side Brevo capture fallback |
| `BREVO_LIST_ID` | optional Brevo list id |

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest unit tests |
| `npm run test:e2e` | Playwright E2E (phone/tablet/desktop) |

## Testing and CI

- **Unit:** Vitest + Testing Library (`tests/unit`).
- **E2E:** Playwright at phone, tablet and desktop viewports (`tests/e2e`):
  load, capture, lead handoff, validation.
- **Lighthouse:** budget gate at >= 95 on performance, SEO and a11y
  (`lighthouserc.json`).
- CI runs lint, typecheck, unit, build, E2E and Lighthouse on every PR.
- `develop` -> staging, `main` -> production (Vercel).

## Brand guardrails

- Tagline is fixed: **For families making memories.** Never reword it.
- The single CTA is **Build your free day**.
- Writing rule: no em-dashes; use hyphens, commas, or rewrite.
