# Screenshot intake (drop your 14 app screenshots here)

Drop each screenshot into the **matching subfolder below** (the folders mirror
`public/media/...`). When you're done, tell me and I'll move them into
`public/media/...`, confirm every `ImageSlot` renders the real shot, build, and
PR. Until then they sit here, outside `public/`, so nothing goes live early.

Names must match exactly (the site references these paths). The device frame
(phone/browser) is already set in code — you only need to drop the right image.

> Note: `home/hero-chat.png` is **no longer needed** — the homepage hero is now
> the live simulation, so that shot was retired. 14 files, not 15.

## What goes where

### `screenshots/home/`
| File | Frame · ratio | Shot |
|---|---|---|
| `sample-day-crop.png` | browser · 4:3 | Day-2 lunch block (Satay by the Bay) cropped, reasoning visible |
| `allergy-meal-card.png` | phone · 9:14 | A meal card: checked + confirm rows (text labels), tree-nut flag, ask-the-kitchen line |

### `screenshots/how/`
| File | Frame · ratio | Shot |
|---|---|---|
| `step-chat.png` | phone · 9:16 | Opening 3-question chat + imported hotel-confirmation chip |
| `step-itinerary.png` | browser · 16:11 | Full multi-day itinerary, per-child blocks, flag + rain marker |
| `step-during-trip.png` | phone · 9:16 | Companion: "what's good near here" → 2 flagged options + rain plan |

### `screenshots/for-parents/`
| File | Frame · ratio | Shot |
|---|---|---|
| `shared-plan.png` | browser · 16:10 | The shared/family day view |
| `command-centre.png` | phone · 9:16 | Grown-ups command centre (PIN-unlocked): logistics, allergy/EpiPen protocol |

### `screenshots/for-kids/`
| File | Frame · ratio | Shot |
|---|---|---|
| `pin-gate.png` | phone · 9:15 | The 4-digit "Grown-ups only" PIN entry (no digits entered) |

### `screenshots/allergy/`
| File | Frame · ratio | Shot |
|---|---|---|
| `ask-the-kitchen-card.png` | phone · 9:13 | Ask-the-kitchen card, local language + English |
| `meal-time-reminder.png` | phone · 9:13 | Pre-meal reminder: venue, flags, confirm checklist (amber + text label) |
| `on-the-ground-check.png` | phone · 9:16 | "What's nearby" with flags already applied |

### `screenshots/answers/`
| File | Frame · ratio | Shot |
|---|---|---|
| `flagged-meal-card.png` | phone · 9:14 | A flagged meal card (for the answers posts) |
| `translation-card.png` | phone · 9:13 | The allergy translation card |

### `screenshots/sample/`
| File | Frame · ratio | Shot |
|---|---|---|
| `ask-the-kitchen-card.png` | none | The Day-2 ask-the-kitchen card on its own (no frame) |

## Capture rules (from `docs/handoff/IMAGE-BRIEFS-screenshots.md`)
- Logged in as the **Walker demo account**; clean state (no debug/paywall banners).
- Phone shots at **390×844**, browser shots at **1440** wide; 2× / retina if possible.
- **Never** show real PII, a child's face, the words "safe"/"100%", or allergy state by **colour alone** (always a text label).
