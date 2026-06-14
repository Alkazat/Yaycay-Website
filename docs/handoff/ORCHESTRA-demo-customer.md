# Orchestra request: a seeded "Walker family" demo customer for marketing screenshots

## Why
The marketing site (`Yaycay-Website`) needs ~15 **real product screenshots** (see `IMAGE-BRIEFS-screenshots.md`). For those to look like a real customer rather than an empty test account, we need a **single, stable, logged-in-able demo account** in the customer app whose data tells one coherent story: the **Walker family's Singapore trip**. This is a cross-repo task: seed it in the backend, verify it renders in the app.

## Repos involved
| Repo | Role in this task |
|---|---|
| **`Alkazat/Yaycay-BE`** (default branch `develop`) | **Primary.** Create the seed: the demo account, family profiles, the fully built Singapore trip, allergy artefacts, companion answers, keepsake pages, and the PIN. Supabase project `nzmjkbjtcjthjwdscjrj`. |
| **`Alkazat/Yaycay-FE`** (default branch `main`) | **Verify.** Confirm every screen in the screenshot guide renders correctly for the demo account; fix any empty-state/rendering gaps. This is where screenshots are actually taken. |
| **`Alkazat/Yaycay-Admin`** (default branch `develop`) | **Optional.** If account/trip provisioning is done via Admin, use it to create the demo account and mark it as a protected demo record. |

Contracts: `@alkazat/contracts@^0.13.0`. Keep the seed aligned with the contract types (signup/profile/trip/day shapes).

## The demo account
Create one customer account, idempotently (re-running the seed must not duplicate or corrupt it):

- **Login:** `demo.walker@yaycay.example` (or a real mailbox the team controls) / password stored in the team vault. {Team to set and record credentials.}
- **Account name:** Walker family.
- **Flag it** as a protected demo/seed account so it is excluded from analytics, billing, marketing sends, and any data-cleanup jobs.
- **Plan state:** show it as a paying "Done for you" customer (so no upsell/paywall banners appear in shots), with one fully completed trip.

## The family (profiles)
Per the four user types / explorer modes:

| Name | Role / mode | Age | Notes |
|---|---|---|---|
| {Parent name} | Grown Up (`standard`), PIN holder | adult | The account owner. |
| Sam | Explorer (`explorer`) | 9 | Engineering/discovery-leaning adventures. |
| Pip | Little Explorer (`little`) | 6 | **Tree-nut allergy** (the allergy that threads through every meal artefact). |

- **Grown-ups view PIN:** set a 4-digit PIN (`pin_set: true`). Record it in the vault. It must unlock the guardian command-centre view. Child profiles must **never** see the grown-ups view.
- Allergy data must be structured (not free-text only) so the app can render flags, ask-the-kitchen cards, and reminders for **tree nuts** specifically.

## The trip (the heart of the seed)
A **completed 4-day Singapore trip** for the Walker family, matching the published sample day so the marketing copy and the screenshots agree.

**Day 2 is the hero day** (most screenshots come from it). It must contain:
- **Per-child morning blocks:** Sam (9) — a Supertree/engineering discovery at Gardens by the Bay; Pip (6) — a Hidden Creatures / Cloud Forest trail. Same place, two different adventures.
- **Lunch at Satay by the Bay** with allergy handling:
  - meal card with a **"Tree-nut allergy: flagged"** text label (never colour alone),
  - the "what we checked / confirm on the day" reasoning,
  - flagged vs lower-risk stalls,
  - an **ask-the-kitchen card** in **English and Mandarin**: *"Does this dish contain any nuts or nut oils? My daughter has a serious tree-nut allergy."*
- **An afternoon rain plan** (a pre-loaded indoor anchor, e.g. ArtScience Museum) with a small contingency marker on the day.
- **A quiet evening** (hotel pool) and **Pip's journal page** for the keepsake.

The full trip should also support:
- A **full multi-day itinerary** view that scans well across days (screenshot #5).
- A **shared/family day view** (read-friendly, screenshot #7).
- A **during-trip companion** that, when asked "what's good to eat near here", returns 2 nearby options **with tree-nut flags and confirm-on-the-day notes already applied**, plus a one-tap rain plan (screenshots #6, #12).
- A **keepsake/journal** with at least one completed child page (referenced by the marketing keepsake imagery).
- The **planning chat history** preserved so the opening 3-question conversation (with a forwarded hotel-confirmation import chip) can be reopened (screenshots #1, #4).

## Required, per screenshot
Mapping so nothing is missed (full detail in `IMAGE-BRIEFS-screenshots.md`):

| Screenshot | Data the seed must make real |
|---|---|
| Planning chat (hero / step 1) | Reopenable chat: 3 questions answered + an imported hotel-confirmation chip |
| Full itinerary | Scannable multi-day plan, per-child blocks, flag + rain marker |
| Day-2 lunch / allergy meal card | Flagged meal with reasoning, checked + confirm rows (text labels), bilingual card |
| During-trip companion / on-the-ground check | "What's nearby" returns 2 flagged options + confirm notes + rain plan |
| Shared plan | A clean, readable shared family day view |
| Grown-ups command centre | PIN-unlocked guardian view: logistics, EpiPen/allergy protocol banner, checklist link |
| PIN gate | The 4-digit "Grown-ups only" entry screen |
| Ask-the-kitchen / translation card | Tree-nut card, allergens as bold text, local language + English |
| Meal-time reminder | A pre-meal reminder with venue, flags, "confirm before you order" checklist (amber row + text label) |

## Hard constraints (must hold in the data and UI)
- **Allergy language never says "safe" or "100%".** The frame is "flags, checks and reminders that help you stay in control"; the final confirmation stays with the parent.
- **No allergy state by colour alone** — always a text label (accessibility + the screenshots depend on it).
- **No real PII and no real child photos.** Synthetic family, synthetic data; child profiles use illustrations/avatars, not photos.
- **British/Australian English** and **USD pricing** (US$129 / US$59 with your own AI) anywhere money shows.
- The account must sit in a **clean, banner-free state** (no debug, no onboarding nags, no paywall) so shots look finished.

## Acceptance criteria
1. The team can log into `Yaycay-FE` as the demo account and reach **every screen** in `IMAGE-BRIEFS-screenshots.md` without dead-ends or empty states.
2. The Singapore Day 2 story (per-child mornings, flagged Satay lunch, bilingual card, rain plan, journal) is fully present and matches the published sample day.
3. The Grown-ups PIN unlocks the command centre; child profiles cannot see it.
4. The seed is **idempotent** and the account is **flagged as protected demo data**.
5. Credentials + PIN are recorded in the team vault.

## Deliverables
- A re-runnable seed in `Yaycay-BE` (script/migration/fixture) plus a short README: how to run it, the login, and how to reset it.
- Any `Yaycay-FE` fixes needed so the screens render cleanly for this account.
- Confirmation back to the website thread that the account is live, so screenshot capture (per `IMAGE-BRIEFS-screenshots.md`) can begin.

## How to dispatch
This is a cross-repo change (`Yaycay-BE` + `Yaycay-FE`, optionally `Yaycay-Admin`). Raise it as an Orchestra task scoped to those repos and point it at this document. The website repo needs nothing further until the screenshots come back.
