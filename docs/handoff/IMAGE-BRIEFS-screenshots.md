# Yaycay website: App screenshot capture guide

Every **real product screenshot** the marketing site expects, with the exact filename, the device frame the site wraps it in, a **step-by-step walkthrough to the screen**, and **what must be visible** so the shot is the best possible proof of the work.

All screenshots are taken from the **customer app (`Yaycay-FE`)** while logged in as the seeded **Walker family demo account** (see `ORCHESTRA-demo-customer.md` — that account makes every screen below look like a real customer). Capture, then save to the path shown under `Yaycay-Website/public/...`.

## Capture standards (apply to all)
- **Log in as the demo account first** (Walker family, Singapore trip). Do not use a half-empty account.
- **Device frame matters** — the site wraps each shot in a phone or browser frame, so shoot the right shape:
  - **phone** → capture in a mobile viewport, **390 × 844** (iPhone-ish), portrait. The site adds the navy phone frame, so shoot the screen content only (no OS chrome needed, or a clean status bar).
  - **browser** → capture in a desktop viewport, **1440 wide**, just the app content area (the site adds a browser chrome frame).
  - **none** → capture the element/card cleanly on its own; either viewport is fine at the stated ratio.
- **Retina / 2× export** for crispness, then it can be downscaled.
- **Clean state:** no debug banners, no dev toolbars, real-looking demo data only.
- **Never show:** real personal data, any identifiable child's face/photo, the words **"safe"** or **"100%"**, or an allergy state communicated by **colour alone** (there must always be a text label).
- `{curly braces}` mark a step where you confirm the exact route/label in the current `Yaycay-FE` build.

---

## 1. Home hero — the planning chat — **SUPERSEDED (no longer required)**
> The homepage hero is now a live, interactive in-page **simulation** (`components/home/HeroSim.tsx`): it types the destination, then assembles Day 2 with a tab per child. This static screenshot is **no longer used on `/`** and does not need to be captured. Kept here for reference only.
- **Save as:** `public/media/home/hero-chat.png` (only if reused elsewhere)
- **Frame:** phone · **Ratio:** 9 / 17 (tall)
- **Must show (if ever captured):** 2–3 Yaycay chat bubbles (blue) + one parent reply; the Walker answers visible (Singapore; Sam 9; Pip 6; Theo 3; Pip tree-nut allergy); a day card beginning to render below with a per-child morning block and an allergy flag chip.

## 2. Home — sample day crop (lunch proof)
- **Save as:** `public/media/home/sample-day-crop.png`
- **Used on:** `/` "proof" teaser · **Frame:** browser · **Ratio:** 4 / 3
- **Walkthrough:**
  1. Open the Walker family **Singapore trip → Day 2** in a desktop viewport (1440 wide).
  2. Scroll to the **lunch block (Satay by the Bay)**.
  3. Crop tightly to that block.
- **Must show:** the venue name; the flagged stalls; the visible "what we checked / confirm on the day" reasoning; one margin annotation.
- **Must not show:** the word "safe"; colour-only flags.

## 3. Home — allergy meal card
- **Save as:** `public/media/home/allergy-meal-card.png`
- **Used on:** `/` allergy section · **Frame:** phone · **Ratio:** 9 / 14
- **Walkthrough:**
  1. In the Walker Singapore trip, open any **meal suggestion card** that carries the tree-nut flag (e.g. the Day 2 lunch).
  2. Open the card to its detail/expanded state.
- **Must show:** venue name; a "checked" row (meadow/green) **and** a "confirm on the day" caution row (amber) **each with a text label**; the tree-nut flag; the "ask the kitchen" line in English and Mandarin.
- **Must not show:** "safe"/"100%"; any colour-only indicator.

## 4. How it works (step 1) — the opening chat
- **Save as:** `public/media/how/step-chat.png`
- **Used on:** `/how-it-works` · **Frame:** phone · **Ratio:** 9 / 16
- **Walkthrough:**
  1. Start (or reopen) the Walker planning chat at the very beginning.
  2. Show Yaycay asking the three trip questions and the parent answering with the Walker crew, plus a **forwarded hotel confirmation appearing as an imported chip**.
- **Must show:** the three-question opening; the Walker answers (Sam 9, Pip 6, Theo 3, tree-nut allergy); a reservation/screenshot import chip inside the conversation.

## 5. How it works (step 2) — the full itinerary
- **Save as:** `public/media/how/step-itinerary.png`
- **Used on:** `/how-it-works` · **Frame:** browser · **Ratio:** 16 / 11
- **Walkthrough:**
  1. Open the Walker **Singapore trip → full multi-day itinerary** view (desktop, 1440 wide).
  2. Frame a scannable day-by-day stretch (2–3 days visible).
- **Must show:** per-child morning blocks each day; an allergy-flagged meal; a small rain-contingency marker; sensible routing and balanced energy.

## 6. How it works (step 4) — the during-trip companion
- **Save as:** `public/media/how/step-during-trip.png`
- **Used on:** `/how-it-works` · **Frame:** phone · **Ratio:** 9 / 16
- **Walkthrough:**
  1. Open the **on-trip companion / ask-Yaycay** view for the Walker trip (phone).
  2. Show the parent asking **"what is good to eat near here right now"** and Yaycay's reply.
- **Must show:** two nearby options returned with tree-nut flags and confirm-on-the-day notes already applied; a one-tap rain plan.
- **Note:** this is the "where most planners go quiet" moment — make the reply feel live/in-location.

## 7. For parents — the shared plan
- **Save as:** `public/media/for-parents/shared-plan.png`
- **Used on:** `/for-parents` · **Frame:** browser · **Ratio:** 16 / 10
- **Walkthrough:**
  1. Open the Walker trip **shared/family day view** (the read-only-ish plan the whole family can open), desktop 1440.
  2. Frame a clean, readable single day.
- **Must show:** per-child blocks; one meal flag; a layout that answers "what are we doing today" at a glance. Proves "you are no longer the app".

## 8. For parents — the Grown-ups command centre (PIN unlocked)
- **Save as:** `public/media/for-parents/command-centre.png`
- **Used on:** `/for-parents` · **Frame:** phone · **Ratio:** 9 / 16
- **Walkthrough:**
  1. In the Walker account, open the **Grown-ups view** and enter the demo PIN to unlock it.
  2. Land on the guardian command-centre screen.
- **Must show:** the day's logistics; a full safety note (the guardian version, **not** the kid "ask a grown-up" cue); the allergy/EpiPen protocol banner; a link to the grown-ups guide/checklist. Navy/cream, serious and reassuring.
- **Must not show:** the PIN digits themselves.

## 9. For kids — the PIN gate
- **Save as:** `public/media/for-kids/pin-gate.png`
- **Used on:** `/for-kids` (explorer types) · **Frame:** phone · **Ratio:** 9 / 15
- **Walkthrough:**
  1. From a child profile, tap to open the **Grown-ups view** so the four-digit **PIN entry** screen appears.
  2. Capture the empty PIN screen.
- **Must show:** a calm four-digit PIN entry with clear "Grown-ups only" framing — the child-safety speed-bump made concrete.
- **Must not show:** any entered PIN digits.

## 10. Allergy safety — ask-the-kitchen card
- **Save as:** `public/media/allergy/ask-the-kitchen-card.png`
- **Used on:** `/allergy-safety` (tools) · **Frame:** phone · **Ratio:** 9 / 13
- **Walkthrough:**
  1. In the Walker trip, open a flagged meal and bring up its **ask-the-kitchen card** for the tree-nut allergy.
  2. Show the card in its counter-ready state.
- **Must show:** one clear question in the local language **and** English; legible at arm's length; text labels throughout.
- **Must not show:** colour-only meaning.

## 11. Allergy safety — meal-time reminder
- **Save as:** `public/media/allergy/meal-time-reminder.png`
- **Used on:** `/allergy-safety` (tools) · **Frame:** phone · **Ratio:** 9 / 13
- **Walkthrough:**
  1. Trigger or open a **pre-meal reminder** for a planned Walker meal (the notification/alert that surfaces before a meal). {Confirm how to surface this in the current build — e.g. a notifications panel or a timed reminder.}
- **Must show:** the venue; its flags; a short "confirm before you order" checklist; an amber caution row with an **explicit text label**. The "more useful on day six" tool.

## 12. Allergy safety — on-the-ground check
- **Save as:** `public/media/allergy/on-the-ground-check.png`
- **Used on:** `/allergy-safety` (tools) · **Frame:** phone · **Ratio:** 9 / 13
- **Walkthrough:**
  1. Open the companion and ask **"what's nearby to eat"** while on the Walker trip.
- **Must show:** two suggestions returned with the family's tree-nut flags and confirm-on-the-day notes already applied — the safety layer following them off-plan.

## 13. Sample day — bilingual ask-the-kitchen card
- **Save as:** `public/media/sample/ask-the-kitchen-card.png`
- **Used on:** `/sample-day` · **Frame:** none · **Ratio:** 16 / 9
- **Walkthrough:**
  1. Open the Walker **Day 2 lunch** ask-the-kitchen card and capture it cleanly on its own (no frame).
- **Must show:** the exact question *"Does this dish contain any nuts or nut oils? My daughter has a serious tree-nut allergy."* in English and Mandarin, in a clean card a parent can show at a stall; soft-green "checked" styling **with a text label**.

## 14. Answers — flagged meal card (nut-allergy post)
- **Save as:** `public/media/answers/flagged-meal-card.png`
- **Used on:** `/answers/eating-out-abroad-nut-allergy` (product panel) · **Frame:** phone · **Ratio:** 9 / 16
- **Walkthrough:**
  1. Same as #3, but framed for the product panel: a single Walker meal card with the tree-nut flag.
- **Must show:** a clear text label "Tree-nut allergy: flagged" (text, **never colour alone**); the reasoning line; the ask-the-kitchen card link; a before-meal reminder. AI-readable text labels.
- **Reusable:** this can be the same capture as #3, recropped to 9 / 16.

## 15. Answers — translation card (allergy-card post)
- **Save as:** `public/media/answers/translation-card.png`
- **Used on:** `/answers/allergy-translation-card-what-to-say` (product panel) · **Frame:** phone · **Ratio:** 9 / 16
- **Walkthrough:**
  1. Open the Walker trip's generated **ask-the-kitchen / allergy translation card** for the tree-nut allergy.
- **Must show:** the allergens highlighted as **bold text** (not colour alone); the cross-contact question; the English shown alongside the local language. AI-readable text labels.

---

## Summary table
| # | File | Frame | Screen |
|---|---|---|---|
| 1 | home/hero-chat.png | phone | Planning chat, mid-build |
| 2 | home/sample-day-crop.png | browser | Day 2 lunch block |
| 3 | home/allergy-meal-card.png | phone | Flagged meal card |
| 4 | how/step-chat.png | phone | Opening 3-question chat + import |
| 5 | how/step-itinerary.png | browser | Full multi-day itinerary |
| 6 | how/step-during-trip.png | phone | On-trip companion reply |
| 7 | for-parents/shared-plan.png | browser | Shared family day view |
| 8 | for-parents/command-centre.png | phone | Grown-ups command centre (unlocked) |
| 9 | for-kids/pin-gate.png | phone | PIN gate |
| 10 | allergy/ask-the-kitchen-card.png | phone | Ask-the-kitchen card |
| 11 | allergy/meal-time-reminder.png | phone | Pre-meal reminder |
| 12 | allergy/on-the-ground-check.png | phone | Nearby-food companion check |
| 13 | sample/ask-the-kitchen-card.png | none | Bilingual card (clean) |
| 14 | answers/flagged-meal-card.png | phone | Flagged meal (product panel) |
| 15 | answers/translation-card.png | phone | Translation card (product panel) |

**Total: 15 screenshots** (several share the same underlying screens, so the demo account only needs to render a handful of distinct views well).
