# Asset intake (dropbox)

Drop your generated **images and photos** here. This folder mirrors the site's
final `public/media/...` structure, so each file has an obvious home. When you
have dropped everything, **tell me** and I will:

1. Move each file from `incoming-assets/media/...` to the matching
   `public/media/...` path,
2. Confirm every `ImageSlot` / `next/image` reference resolves (no broken
   placeholders),
3. Run the build + a visual smoke test, and commit.

## How to drop files
- Put each file in the subfolder shown below, named **exactly** as listed
  (e.g. `singapore-with-kids-hero.jpg`). Same name, same folder = zero ambiguity.
- If a filename does not match, that is fine — just drop it and note which is
  which, and I will sort it.
- **Formats:** documentary photos as `.jpg`, flat illustrations and diagrams as
  `.png` (as listed). Aspect ratios are in `docs/handoff/IMAGE-BRIEFS-nanobanana.md`.
- **Rule that bites:** no identifiable faces of children in any image.

> This batch is the **Nano Banana images + real founder/team photos** (28 files).
> **Screenshots come later** as a separate batch (15 files, see
> `docs/handoff/IMAGE-BRIEFS-screenshots.md`) and need the demo customer account.
> **Brand marks** (logos, glyph, app icon, wordmark) are already in the repo
> under `public/brand/` — nothing to drop for those.

---

## Manifest — what goes where

### `media/home/`
| File | What it is |
|---|---|
| `present-parent.jpg` | Parent present with kids, golden hour (16:7) |

### `media/how/`
| File | What it is |
|---|---|
| `planning-from-the-sofa.jpg` | Relaxed sofa planning (16:10) |
| `step-keepsake.jpg` | Printed keepsake book open on a table (4:3) |

### `media/for-parents/`
| File | What it is |
|---|---|
| `in-the-photo.jpg` | Parent in the family photo, not behind the camera (16:9) |
| `multi-generation.png` | Flat illustration: toddler→teen→grandparents day (16:7) |

### `media/for-kids/`
| File | What it is |
|---|---|
| `mode-little.png` | Little Explorer mode illustration (3:2) |
| `mode-explorer.png` | Explorer mode illustration (3:2) |
| `mode-big.png` | Big Explorer mode illustration (3:2) |
| `mode-grownups.png` | Grown-ups mode illustration — navy/blue/cream only (3:2) |
| `grows-with-child.png` | One child growing across the three bands (16:9) |

### `media/guides/`
| File | What it is |
|---|---|
| `singapore-with-kids-hero.jpg` | Gardens by the Bay family photo (16:9) |
| `japan-with-kids-hero.jpg` | Shinkansen platform family photo (16:9) |
| `bali-with-kids-hero.jpg` | Rice terrace / villa pool (16:9) |
| `london-with-kids-hero.jpg` | Red double-decker / Natural History Museum (16:9) |
| `gold-coast-with-kids-hero.jpg` | Patrolled beach / wildlife sanctuary (16:9) |
| `paris-with-kids-hero.jpg` | Jardin du Luxembourg / Champ de Mars (16:9) |

### `media/answers/`
| File | What it is |
|---|---|
| `flight-activities.png` | Flat illustration: plane tray-table activities (16:9) |
| `planning-timeline.png` | Flat illustration: planning timeline (16:9) |
| `rain-plan.png` | Flat illustration: rain → indoor anchor (16:9) |
| `ages-and-stages.png` | Flat illustration: three ages (16:9) |

### `media/vs/`
| File | What it is |
|---|---|
| `wanderlog-fork.png` | "The fork" diagram, Yaycay vs Wanderlog (16:7) |
| `layla-fork.png` | "The fork" diagram, Yaycay vs Layla (16:7) |
| `mindtrip-fork.png` | "The fork" diagram, Yaycay vs Mindtrip (16:7) |

### `media/about/` (real photos, with consent — not AI)
| File | What it is |
|---|---|
| `founders-family.jpg` | Founding family on a real holiday (16:9) |
| `translating-outside-restaurant.jpg` | The founding allergy-translation scene (3:2) |
| `team-1.jpg` | Team member headshot (1:1) |
| `team-2.jpg` | Team member headshot (1:1) |
| `team-3.jpg` | Team member headshot (1:1) |

---

**Total this batch: 28 files** (10 photos + 10 illustrations + 3 diagrams + 5 real photos).
Full prompts and aspect ratios: `docs/handoff/IMAGE-BRIEFS-nanobanana.md`.
