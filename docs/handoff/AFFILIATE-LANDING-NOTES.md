# Affiliate landing `/go/<slug>` — what the Website built, what BE must provide

Implements the website side of the affiliate handoff. Staged behind the waitlist like the rest of the site (the page is `noindex`; campaign URLs should not be indexed anyway).

## What ships on the Website
- **Route `/go/<slug>`** (`app/go/[slug]/page.tsx`, dynamic/`force-dynamic`, `noindex`). Resolves the slug, headlines the discount ("15% off your Yaycay holiday with {name}"), persists the code, and drops the visitor into the normal free-day funnel with the code attached. Unknown or paused slug → `redirect('/')` (homepage, no code).
- **Resolver** (`lib/affiliates.ts → getAffiliate(slug)`): tries BE first, then a static fallback map, then null.
- **Referral plumbing** (`lib/ref.ts`): the code rides through via a URL `?ref=` param **and** a functional first-party cookie (`yaycay_ref`, 30 days). It is a strictly functional cookie (carries a discount the visitor opted into), so it is not gated on the marketing-cookie consent banner.
- **Funnel carry-through:** `FreeDayForm` and `SignupForm` resolve the ref at submit and send it to `/api/signup`, which (a) forwards it to BE `signup-capture` for lead attribution and (b) appends it to the app demo handoff URL (`/demo?email=...&ref=...`) so it reaches Checkout.

## What BE must provide (the dependency)
1. **Public read** `GET /affiliates/by-slug/<slug>` on the Supabase functions base, returning JSON:
   ```json
   { "code": "SUNNY15", "discountPercent": 15, "name": "Sunny Travels", "status": "active" }
   ```
   - Public, no JWT; the Website sends the project anon key as the `apikey` header (same posture as `signup-capture`).
   - `status` other than `"active"`, a 404, or any error → the Website degrades to the homepage with no code. Never 500 on an unknown slug.
2. **`signup-capture`** should accept and persist the new optional `ref` field (the Stripe promotion code) for lead attribution. It is additive; existing payloads are unchanged.
3. **Checkout session** (BE, per the affiliate-program-BE handoff): read `ref` from the app handoff, attach it as the Stripe promotion code / `discounts`, and enable `allow_promotion_codes`. If missing/invalid, proceed at full price (never block a sale). Attribution (the redemption row) is written by the BE Stripe webhook.

## Config
- `NEXT_PUBLIC_API_BASE` + `API_KEY` — already used by `signup-capture`; the resolver reuses them for `affiliates/by-slug`.
- No BE yet? Paste entries into `STATIC_AFFILIATES` in `lib/affiliates.ts` (commented example included) for a build-time fallback.

## Definition of done (status)
- [x] `/go/<slug>` resolves a live affiliate, shows the discount, degrades to homepage for unknown/paused.
- [x] The code survives signup (payload `ref`) and rides to the app handoff (`/demo?...&ref=`).
- [ ] BE exposes `affiliates/by-slug`, persists `ref` on capture, and applies it at Checkout (BE work).
- [ ] A completed test purchase from `/go/<slug>` appears as a redemption under that affiliate in Admin (end-to-end, needs BE + Admin).
