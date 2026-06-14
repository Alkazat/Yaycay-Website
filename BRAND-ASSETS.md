# Brand assets — Yaycay-Website (Marketing funnel)

> **Canonical spec:** the design system's `BRAND-ASSETS.md` (vendored with the brand in
> `Yaycay-FE/vendor/yaycay-ds/`, and summarised here for the Website thread). The funnel's job is
> conversion, and the **lockup** is our strongest trust signal — lead with it.
> **For families making memories.**

Marks live under `public/brand/`; the App-Router favicon/touch-icon live in `app/`.

## Which mark, which slot (Website)

| Slot | File | Wired in |
|---|---|---|
| Site header / nav | `public/brand/yaycay-logo.png` (**lockup**) | `components/ui/Logo.tsx` |
| Hero / above-the-fold brand | **lockup** | landing sections |
| Open Graph / social share (`/og.png`, 1200×630) | **lockup** on a sky/sunset band | `app/layout.tsx` metadata |
| Browser favicon | `app/icon.svg` (vector diamond scene) | App Router auto |
| Apple touch icon | `app/apple-icon.png` (**app icon**) | App Router auto |
| Short/condensed header bar | `public/brand/yaycay-wordmark.png` | optional |
| Playful spot / reward flourish | `public/brand/yaycay-badge.png` | optional |

Also in `public/brand/`: `yaycay-app-icon.png`, `yaycay-glyph.png`.

## The rules that bite here
- The **lockup** is the marketing face — give it clear space (1× the badge) and never crop the
  ribbon off it. If you need just the word, use `yaycay-wordmark.png`, don't crop.
- OG/social images: centre the lockup on a sky or sunset gradient; keep the soft drop shadow; the
  tagline already lives inside the lockup — don't re-set it in text.
- Don't place the royal-outlined marks on a flat navy field (outline vanishes) — use cream/white
  or a sky→sunset band.
- Never recolour, stretch, re-typeset, or reword *For families making memories.*
