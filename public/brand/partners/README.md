# Partner logos ("Works with …" banner)

Drop the AI partner logos here and the homepage hero banner renders them
automatically (otherwise it falls back to the names as text). Used by
`components/home/WorksWith.tsx`.

Expected files (exact slugs; `.svg` preferred, `.png` or `.webp` also work):

| File | Logo |
|---|---|
| `chatgpt.svg` (or `.png`) | ChatGPT |
| `claude.svg` (or `.png`) | Claude |
| `gemini.svg` (or `.png`) | Gemini |

Notes:
- These are third-party trademarks shown for **compatibility/nominative use**
  ("works with"). Use each provider's official, current brand asset and keep it
  unaltered (no recolouring or distortion).
- The banner renders each at **24px tall**, width auto. Horizontal lockups
  (icon + wordmark) work best; transparent background.
- Prefer `.svg` for crispness. Once added, the text fallback disappears on the
  next build.
