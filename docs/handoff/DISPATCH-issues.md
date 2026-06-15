# Ready-to-paste issues: demo customer + affiliate contract

Three issues, copy-paste-ready, for the repos the website can't reach from its own
session. Open **A** and **C** in `Alkazat/Yaycay-BE`, **B** in `Alkazat/Yaycay-FE`.
Each is self-contained; the deep detail lives in the linked handoff docs in this repo.

Contracts package: `@alkazat/contracts@^0.13.0`. Supabase project `nzmjkbjtcjthjwdscjrj`.

---

## Issue A — `Yaycay-BE` — Seed the Walker-family demo customer (Singapore)

**Title:** Seed a stable Walker-family demo customer (Singapore trip) for marketing screenshots

**Body:**

The marketing site needs ~15 real product screenshots that look like a real customer.
Seed one **stable, idempotent, logged-in-able demo account** whose data tells one
coherent story. Full spec (acceptance criteria, per-screenshot data map, hard
constraints) lives in `Yaycay-Website/docs/handoff/ORCHESTRA-demo-customer.md` —
this issue is the summary; treat that doc as the source of truth.

**The account**
- One customer account, seeded idempotently (re-running must not duplicate/corrupt).
- Flag it as **protected demo data** (excluded from analytics, billing, marketing sends, cleanup jobs).
- Show it as a paying "Done for you" customer (no upsell/paywall banners in shots).

**The family — a household of five**
- Two guardians (one is the PIN holder / account owner).
- **Sam**, age 9 — Explorer mode (`explorer`).
- **Pip**, age 6 — Little Explorer (`little`), **tree-nut allergy** (structured, not free-text; threads through every meal artefact).
- **Theo**, age 3 — Little Explorer (`little`); toddler pace (water play, a protected nap block, an early soft-food dinner).
- A 4-digit **Grown-ups PIN** (`pin_set: true`) that unlocks the guardian view; child profiles must never see it.

**The trip**
- A **completed 4-day Singapore trip from 14 September**, matching the published sample day (`/sample-day`) so copy and screenshots agree.
- **Day 2 is the hero day.** Per-child mornings (Sam: Supertree/engineering; Pip: Cloud Forest creature trail; Theo: water-play garden), the flagged **Satay by the Bay** lunch with reasoning + bilingual ask-the-kitchen card (English + Mandarin), an afternoon **rain plan**, a quiet evening, and **Pip's journal page**.
- Also needs to render: full multi-day itinerary, a shared/family day view, the during-trip companion ("what's good to eat near here" → 2 nearby options with tree-nut flags + confirm-on-the-day notes + one-tap rain plan), and a keepsake/journal page.

**Hard constraints**
- Allergy language **never** says "safe" or "100%"; allergy state **never** by colour alone (always a text label).
- No real PII, no real child photos (synthetic family, avatars/illustrations).
- British/Australian English; **USD** pricing (US$129 / US$59).

**Done when:** the team can log in on `Yaycay-FE` and reach every screen in
`IMAGE-BRIEFS-screenshots.md` with no dead-ends/empty states; the seed is
idempotent and flagged protected; credentials + PIN are in the team vault.
Cross-repo: FE verification is **Issue B**.

---

## Issue B — `Yaycay-FE` — Verify the demo account renders every screenshot screen

**Title:** Verify the Walker-family demo account renders all marketing screenshot screens

**Body:**

Once **Issue A** (BE seed) is live, confirm the customer app renders cleanly for the
demo account so marketing can capture the ~15 shots in
`Yaycay-Website/docs/handoff/IMAGE-BRIEFS-screenshots.md`.

**Walk every screen and confirm it renders with real-looking data (no empty states):**
- Planning chat (3-question opening + an imported hotel-confirmation chip, reopenable).
- Full multi-day itinerary (per-child morning blocks, an allergy-flagged meal, a rain marker).
- Day-2 lunch / allergy meal card: a **"checked"** row and a **"confirm on the day"** row, **each with a text label** (never colour alone); the tree-nut flag; the ask-the-kitchen line in **English + Mandarin**.
- During-trip companion: "what's good to eat near here" → 2 nearby options with tree-nut flags + confirm notes + a one-tap rain plan.
- Shared/family day view; Grown-ups command centre (PIN-unlocked) + the PIN gate; ask-the-kitchen translation card; meal-time reminder.

**Fix any rendering/empty-state gaps** so each screen is screenshot-ready, and confirm:
- the allergy UI **never** shows "safe"/"100%" or colour-only state;
- the Grown-ups PIN unlocks the command centre and child profiles cannot see it.

Reply on the website thread when the screens are ready so screenshot capture can begin.

---

## Issue C — `Yaycay-BE` (+ `Yaycay-Admin`) — Confirm the affiliate + signup-capture contract, and automate affiliate creation through Admin

**Title:** Confirm the affiliate + signup-capture contract, and automate affiliate creation (Admin → Stripe → BE)

**Body:**

The website (`Yaycay-Website`) already calls these BE endpoints in production code.
Please confirm each exists with the exact shape below, or tell us the real shape so
we can align. This is the "affiliate canon" the funnel depends on for influencer
attribution and discounts.

**1. Affiliate landing resolution** — `lib/affiliates.ts`
- Website calls: `GET {API_BASE}/affiliates/by-slug/<slug>` (public read; `apikey` header = project anon key when `API_KEY` is set; `cache: no-store`).
- Website expects JSON:
  ```jsonc
  { "code": "SUNNY15",       // the Stripe promotion code applied at Checkout
    "discountPercent": 15,    // whole-number percent
    "name": "Sunny Travels",
    "status": "active" }      // only "active" is shown; anything else degrades to the homepage
  ```
- Confirm: endpoint path, response field names/types, and that `status` uses `active`/`paused`. A 404 for an unknown slug is expected (website degrades to the static fallback, then to homepage).

**2. Signup capture** — `app/api/signup/route.ts` (server → BE)
- Website calls: `POST {API_BASE}/signup-capture` with `SignupCaptureRequest` from `@alkazat/contracts`:
  `{ email, consent, source?, ref?, trip? }`.
- **`ref`** is the affiliate code, validated client/server as `^[A-Za-z0-9_-]{1,40}$`.
- Confirm: BE **persists `ref`** against the lead for attribution (marketing_contacts/Brevo sync), and the public endpoint auth is `apikey` header (anon key), no JWT.

**3. Checkout attribution (FE handoff)** — `lib/site.ts` `demoHandoffUrl()`
- After capture the visitor is sent to `{APP_URL}/...?ref=<code>&email=<email>`.
- Confirm (likely an `Yaycay-FE`/Checkout concern, cross-link as needed): the app reads `?ref=` and applies it as the **Stripe promotion code** at Checkout **and** records influencer attribution on the resulting session/order.

**4. Affiliate creation must be automated through Admin — no manual Stripe.**
The founder must **never** hand-create Stripe codes or edit the website to add an
influencer. The required pipeline (build in **BE + Admin**):
- **Yaycay-Admin** — an "Affiliates" screen: enter handle/slug, display name, discount %, status (active/paused). No Stripe knowledge required of the operator.
- On save, **Yaycay-BE**:
  1. Creates (or reuses) the matching **Stripe Coupon + Promotion Code via the Stripe API** — the `code` returned is what rides through as `ref`. Never typed by hand.
  2. Persists the affiliate record (`slug`, `code`, `discountPercent`, `name`, `status`) in Supabase.
  3. Serves it at `GET /affiliates/by-slug/<slug>` (point 1 above), so the website reads it live.
  4. Pausing/deleting in Admin flips `status` (and deactivates the Stripe promo code) so `/go/<slug>` degrades to the homepage.
- **Website side (already done):** reads BE live; the hardcoded `STATIC_AFFILIATES` map in `lib/affiliates.ts` is only a stopgap (currently `hustlecoffeegrind`, `carmsyeates`). Once BE serves real records, those static entries are removed/demoted to a pure fallback.

**Deliverable:** a yes/confirmed or the corrected shape for points 1–3, plus a plan for
point 4 (the Admin → Stripe-API → BE automation), so the website can drop the static
map once the live source is serving.

---

## How to dispatch
Open A + C in `Alkazat/Yaycay-BE` and B in `Alkazat/Yaycay-FE`; point C at
`Alkazat/Yaycay-Admin` as well, since its point 4 (the Admin → Stripe-API → BE
affiliate automation) spans BE + Admin. Or raise them as a single cross-repo
Orchestra task scoped to BE + FE + Admin, pointed at this file and
`ORCHESTRA-demo-customer.md`. The website repo needs nothing further until the
screenshots and the affiliate confirmation come back.
