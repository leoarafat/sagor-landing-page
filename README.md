# Sagor Landing Page — SMSound India

A premium music & video distribution landing page built with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, SwiperJS, and React CountUp.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

The optimized output is generated in `dist/` — deploy it to any static host (DigitalOcean, Vercel, Netlify, Hostinger, S3, etc).

## Notes

- The **Login** button redirects to `https://smsoundindia.com` (configured in `src/data/navigation.ts`).
- All content is realistic mock copy — replace text in `src/data/*` files.
- Theme tokens (colors, fonts, animations) live in `tailwind.config.js`.
- Smooth scrolling, marquees, and animations automatically disable for users with `prefers-reduced-motion`.

## Structure

```
src/
  components/   Reusable UI (Button, GlowCard, Reveal, SectionHeading)
  sections/     Page sections (Hero, Services, Pricing, FAQ, ...)
  layouts/      Navbar, Footer
  hooks/        useLenis smooth scroll
  data/         All mock content (edit here)
  utils/        Framer Motion animation variants
  pages/        Home page composition
```
