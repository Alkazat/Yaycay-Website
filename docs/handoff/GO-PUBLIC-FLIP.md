# Go-public flip runbook

The whole site is built and staged **behind the waitlist**: `/` is the indexable waitlist teaser, and the full marketing site lives at `/homepage` and the other routes with `robots: { index: false, follow: false }`. This document is the deliberate, single-sitting checklist to take it public. **Do not run any of this until the founder decides to launch.** Nothing here happens automatically.

## What is already prepared (no flip needed)
- **JSON-LD schema** is live on every page now (Organization site-wide; WebSite + SoftwareApplication on the homepage; FAQPage on `/faq`; QAPage + Article + BreadcrumbList on answers; Article + BreadcrumbList on guides; ItemList on both hubs; BreadcrumbList on pricing and comparisons). Emitting schema while noindex is harmless and means the site is citation-ready the moment it opens.
- **Canonical + OG + metadataBase** already derive from `SITE.url` (`NEXT_PUBLIC_SITE_URL`). Set that env to `https://www.yaycay.ai` in production and every absolute URL is correct.
- **robots.ts / sitemap.ts** exist and read from `SITE.url`.

## The flip (work order, SEO step 1-9)
1. **Move the homepage.** Make the full marketing homepage the index:
   - Option A (recommended): turn `app/page.tsx` into the full homepage (render `Header + Home + Footer`), retire the teaser, and delete `app/homepage/page.tsx`.
   - Option B: keep `/homepage` and 301 `/` → `/homepage` (not recommended; the homepage should be `/`).
2. **301 `/homepage` → `/`** (single hop, no chains) via `next.config` redirects. Also 301 any other legacy URLs to their final slugs.
3. **Remove `noindex`.** Strip `robots: { index: false, follow: false }` from every public page's metadata:
   - `/homepage` (if kept), `/pricing`, `/how-it-works`, `/sample-day`, `/allergy-safety`, `/for-parents`, `/for-kids`, `/about`, `/faq`, `/contact`, `/terms`, `/connect`, `/guides`, `/guides/[destination]`, `/answers`, `/answers/[slug]`, `/vs`, `/vs/[competitor]`.
   - **Keep `noindex` on:** `/free-day-requested` (and any thank-you/success page). Double-check no `X-Robots-Tag` header is set at the host.
4. **Force one host + https.** 301 all `http://` → `https://` and pick one host (`https://www.yaycay.ai`), 301 the apex to it. Add HSTS.
5. **Canonical host.** Set `NEXT_PUBLIC_SITE_URL=https://www.yaycay.ai` in prod so every canonical, OG and schema URL resolves to the one host. Verify the homepage canonical is exactly `https://www.yaycay.ai/`.
6. **robots.txt.** Replace the staged rules with the AI-crawler-friendly spec (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot all `Allow: /`; `Sitemap:` line). For a zero-authority site, being retrievable is the growth channel. Keep `/api/` disallowed.
7. **sitemap.xml.** Expand `app/sitemap.ts` to list every canonical 200 page (home, the four money pages, the guides + answers + vs hubs and all their children, about/faq/contact/terms/connect). Honest `lastmod`. Split into a sitemap index (`/sitemap-pages.xml`, `/sitemap-guides.xml`, `/sitemap-answers.xml`) once the content grows.
8. **Founder-fill the schema.** Before launch, set in `lib/site.ts → ORG`: `founderName`, `sameAs` (LinkedIn/Instagram/Facebook), and swap `logoPath` for a dedicated square logo asset. Set real `CONTENT_DATES` per piece if desired. Empty fields are currently omitted from schema (valid but thinner).
9. **Search Console + Bing Webmaster Tools.** Verify the domain, submit the sitemap, request indexing on the 8 priority pages: `/`, `/sample-day`, `/how-it-works`, `/pricing`, `/allergy-safety`, `/for-parents`, `/vs/wanderlog`, `/faq`. Bing feeds Copilot and several LLM retrieval pipelines, so do not skip it.

## Verification after the flip
- `curl -I https://www.yaycay.ai/homepage` → `301` to `https://www.yaycay.ai/`.
- All four protocol/host combinations resolve to the one canonical URL in one hop.
- View source on each public page: self-referencing `https://www.yaycay.ai/...` canonical, no `noindex`, no `X-Robots-Tag`.
- Google Rich Results Test passes on the homepage (Organization, WebSite, SoftwareApplication), `/faq` (FAQPage), a guide (Article + Breadcrumb), an answer (QAPage + Article + Breadcrumb).
- The teaser is gone (or 301s) and the waitlist capture is retired or repurposed.

## Outstanding founder-fill before going fully live
- Images: generate/seed everything in `IMAGE-BRIEFS-nanobanana.md` and `IMAGE-BRIEFS-screenshots.md` (the demo account via `ORCHESTRA-demo-customer.md`).
- Content `{curly brace}` placeholders: team names/lines on `/about`, the destination-specific allergy-card wordings in the Japan/Bali/Paris guides and the translation-card answer.
- `ORG.founderName`, `ORG.sameAs`, a real logo asset, and a dedicated OG image set.
