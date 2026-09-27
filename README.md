# PromptJinn 🪔

> Rub the lamp, make a wish.

PromptJinn is a **no-signup toolkit** that turns rough, code-switched Roman
Urdu thinking into polished AI prompts and shareable Urdu-script content.
Built for people who think in Urdu/Punjabi but are pushed toward
English-first AI tools.

This is a **hobby / passion project** — built in the open, kept small on
purpose, and free of accounts, tracking, and dark patterns. If it grows into
something bigger, it grows from here.

## What it does today

Right now this repo is the **brand identity landing page** — the "Mystical
Lamp & Ink" visual direction (deep jewel tones, gold accent, a small
calligraphy-and-genie-lamp motif) implemented as real code, with a static
preview of what the product will do. Nothing here calls an AI yet.

## What's coming (the roadmap)

Each phase ships as a complete, useful thing on its own before the next one starts:

1. **Foundation** — a rule-based Roman Urdu prompt wizard, plus an Urdu
   script converter and shareable poetry/quote cards.
2. **Expand** — an optional "bring your own API key" mode that lets a real
   AI model sharpen the prompt, plus one or two localized utilities
   (Urdu OCR, Hijri calendar, etc.).
3. **Personas** — an offline, fully client-side mode (WebLLM), and
   historic-figure chat personas (starting with public-domain Western
   figures before anything South Asian, to get the sourcing right).

No phase is started until the one before it has been shipped and used.

## Why it's built this way

A few explicit choices, so nothing here is a mystery:

- **No signup, ever.** The whole trust story depends on this. If a future
  feature needs an account, it's opt-in and clearly separate from the free
  core — never a gate on the basic tool.
- **No backend by default.** Static hosting, no database. Anything that
  needs a real AI model uses the visitor's own API key (stored only in
  their browser) rather than a server PromptJinn pays for.
- **Plain React + Vite, no extra framework.** Easy for anyone — including a
  future contributor who's never seen this repo — to read top to bottom.
- **Small components, one job each.** `src/components/` has one file per
  visual piece (`Hero`, `WishCard`, `FeatureStrip`, …) rather than one big
  page file, and `src/styles/tokens.css` is the *only* place colors are
  defined — nothing else should hardcode a hex value.
- **The mascot and decorative motifs stay light.** A small line-art "wisp"
  character (`WispMascot`) shows up in a couple of key moments (like the
  wish-granted success state), not as constant chrome around the actual
  tools once those exist.

## Running it locally

```bash
npm install
npm run dev       # starts the dev server
npm run build     # production build, output in dist/
```

## Project structure

```
src/
  components/     one file per UI piece, plus its own .css file
  styles/
    tokens.css    every brand color/spacing value lives here
    global.css    base page styles
  App.jsx         assembles the landing page from components
  main.jsx        React entry point
```

## License

MIT — see [LICENSE](./LICENSE). This project follows the
[nosignups.net](https://nosignups.net) philosophy: tools should work
immediately, your data belongs to you, and open source is the default.
