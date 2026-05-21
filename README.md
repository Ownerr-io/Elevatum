# Elevatum

Marketing website for **Elevatum** — fundraising advisory for founders. Premium editorial layout, glassmorphism surfaces, terracotta brand palette, and a full-viewport hero with 3D video.

The active application lives in a single npm workspace package. The repo root orchestrates install, dev, build, and typecheck.

## Tech stack

| Layer | Choice |
|--------|--------|
| Runtime | Node.js (npm workspaces) |
| Framework | React 19 |
| Build | Vite 7 |
| Routing | Wouter |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| UI primitives | Radix UI + shadcn-style components under `src/components/ui/` |
| Forms | React Hook Form + Zod |
| Motion | Framer Motion |
| Fonts | [Outfit](https://fonts.google.com/specimen/Outfit) (sans), [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) (serif quotes) |

## Repository layout

```
Elevatum/
├── package.json              # Root scripts: dev, build, typecheck
├── package-lock.json
├── tsconfig.base.json
├── README.md
└── artifacts/
    └── elevatum/             # @workspace/elevatum — main site (this is what you run)
        ├── index.html
        ├── vite.config.ts
        ├── package.json
        ├── public/           # Static assets (logo, favicon, robots, OG image)
        └── src/
            ├── main.tsx
            ├── App.tsx         # Routes: / (Home), 404
            ├── index.css       # Design tokens, glass/dock/footer utilities
            ├── pages/
            │   ├── Home.tsx    # Single-page marketing layout
            │   ├── Course.tsx  # Legacy page (not routed; course is on Home)
            │   └── not-found.tsx
            ├── components/     # Page sections + UI
            ├── components/editorial/
            ├── lib/
            └── hooks/
```

Other folders under `artifacts/` or `lib/` (for example `api-server`, `mockup-sandbox`) may exist from earlier setups; **only `artifacts/elevatum` is wired into the root workspace** today.

## Getting started

**Requirements:** Node.js 20+ recommended, npm 9+.

From the repository root:

```bash
npm install
npm run dev
```

Open the URL Vite prints (default **http://localhost:5173**).

| Script (root) | Action |
|---------------|--------|
| `npm run dev` | Start Vite dev server for the marketing site |
| `npm run build` | Production build → `artifacts/elevatum/dist` |
| `npm run typecheck` | `tsc --noEmit` for the elevatum package |

From `artifacts/elevatum` you can also run `npm run serve` to preview the production build.

### Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `5173` | Dev/preview server port |
| `BASE_PATH` | `/` | Vite `base` (subpath deploys) |

## Site structure (home page)

Single-page flow in `src/pages/Home.tsx`:

| Section | Component | Notes |
|---------|-----------|--------|
| Hero | `HeroSection` | Full viewport (`100svh`), background video, copy right (desktop) / bottom-left (mobile). No top nav in hero. |
| Navigation | `FloatingBottomNav` | Hidden in hero; **fixed bottom bar** after scroll. Terracotta dock, active section highlight, mobile menu. |
| About | `AboutSection` | Story, pillars, milestone stats |
| Clients | `ClientMarquee` | Scrolling name strip |
| Offers | `OffersSection` | Capital Sprint + Co-Lead Fundraising |
| Results | `ResultsSection` | Metrics + quote cards |
| Process | `ProcessSection` | Five-step glass rows |
| Course | `CourseSection` | Cohort pillars, curriculum list, waitlist form |
| Testimonials | `TestimonialsSection` | Founder quotes |
| FAQ | `FAQSection` | Accordion |
| Contact | `ContactSection` | Enquiry form |
| Footer | `Footer` | Logo, explore links, connect, social |

`StatsStrip` exists but is **not** mounted on `Home` (stats were removed from the hero per product direction).

## Design system

Defined primarily in `artifacts/elevatum/src/index.css`:

- **CSS variables** (`:root`): cream background, ink foreground, **terracotta primary** (`--primary`), muted surfaces, borders.
- **Tailwind theme** via `@theme inline` maps tokens to utilities (`bg-primary`, `text-muted-foreground`, etc.).
- **Component classes** (examples):
  - Glass: `.glass-pane`, `.glass-row`, `.glass-stat`, `.glass-panel`
  - Typography: `.display-title`, `.editorial-headline`, `.display-serif`
  - Labels: `.section-tag`, `.section-label`, `.quote-meta-author`, `.quote-meta-role`
  - Nav: `.dock-nav-bar`, `.dock-nav-link`, `.dock-nav-link-active`, `.dock-nav-cta`
  - Footer: `.footer-surface`, `.footer-social`
- **Layout helpers** in `src/components/editorial/SectionChrome.tsx`: `sectionShell`, `layoutSplit`, `layoutOffer`, `layoutTrio`, `GlassPane`, `SectionIntro`, etc.
- **Motion**: `src/lib/motion.ts` (`editorialEase`) + `ScrollReveal` (Framer Motion, in-view).

Avoid hardcoded brand hex in components; prefer `text-primary`, `bg-primary`, and shared CSS classes.

## Forms and contact

- **Contact** (`ContactSection`) and **course waitlist** (`CourseSection`) validate with Zod + React Hook Form.
- Submit opens a **mailto** draft via `src/lib/inquiry-mailto.ts`:
  - Recipient: `hello@elevatum.co` (constant `INQUIRY_EMAIL` in that file)
  - Structured plain-text body (name, email, company/stage, message, etc.)

There is no backend API for form storage in the current workspace setup.

## Public assets

Under `artifacts/elevatum/public/`:

- `Elevatum_Logo.png` — primary logo (nav, footer, favicon reference)
- `elevatum-logo.png` — duplicate/legacy filename
- `favicon.png`, `favicon.svg`
- `robots.txt`, `opengraph.jpg`

## Key dependencies (app package)

- **UI:** Radix primitives, `lucide-react`, `react-icons`, `class-variance-authority`, `tailwind-merge`
- **Data/UI extras:** `@tanstack/react-query` (wired in `App.tsx` for future use), `sonner` toasts
- **Charts / carousel / etc.:** Present in `components/ui` for shadcn compatibility; not all are used on the marketing page

## Development notes

- Path alias `@/` → `artifacts/elevatum/src/`.
- Hero video is loaded from a **remote CDN URL** in `HeroSection.tsx` (not bundled in `public/`).
- Routing is only `/` (Home) plus 404; `pages/Course.tsx` is not registered in `App.tsx`.
- Prettier is available at the repo root; run format according to your editor or `npx prettier --write` as needed.

## License

MIT (see `package.json`).
