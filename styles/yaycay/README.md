# Yaycay design system (vendored)

This directory is a **vendored copy** of the shared Yaycay design system — the
single source of truth for the brand. Do not hand-edit these files; update them
by re-syncing from the design system, or replace this folder with the published
`@yaycay` package once it ships.

- `styles.css` — the entry point. Imported once from `app/globals.css`. Pulls in
  the token layers in order: fonts → colors → typography → spacing → effects → base.
- `tokens/` — the token layers (palette, type, spacing, the box-art effects).
- `assets/fonts/` — the Fredoka + Nunito variable webfonts referenced by
  `tokens/fonts.css`.

Site-local additions (the fluid type scale, iOS safe areas, the marketing
container width, and compatibility aliases) live one level up in
`styles/tokens.css`, which is imported after this system so it can layer on top.
