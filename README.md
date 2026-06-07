# BeMusix — Premium Music Distribution Landing Page

Ultra-premium dark navy landing page for **BeMusix**, a music & video distribution SaaS. Built with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Swiper, React CountUp and React Intersection Observer.

## Tech Stack

- **React 18 + TypeScript + Vite** — modern, fast dev experience
- **Tailwind CSS** — utility-first styling with custom premium dark theme
- **Framer Motion** — scroll, fade, blur, stagger, hover animations
- **GSAP + Lenis** — smooth scrolling
- **Swiper** — testimonial slider
- **React CountUp + React Intersection Observer** — animated stats
- **Lucide React** — icon set

## Install

```bash
cd sagor-landing-page
npm install
```

## Run

```bash
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview production build
```

## Folder Structure

```
src/
├── components/
│   ├── ui/           # Reusable primitives (Logo, SectionHeading, BackgroundFX, MagneticButton)
│   ├── sections/     # Landing page sections (Hero, Services, Pricing, FAQ, ...)
│   └── layouts/      # Navbar, Footer
├── hooks/            # useScrolled
├── data/             # content.ts — all mock content & icons
├── utils/            # motion.ts — Framer variants
├── assets/
├── pages/            # Landing.tsx
├── App.tsx
├── main.tsx
└── styles.css
```

## Key Behaviour

- **Login button** redirects to `https://smsoundindia.com` via `window.location.href` (Navbar.tsx).
- Sticky navbar — transparent at top, glassmorphism + blur + shadow on scroll.
- Mobile menu with premium SaaS animations.
- Smooth scroll powered by Lenis (initialized in `App.tsx`).
- All animations respect viewport visibility (`whileInView`).

## Design System

| Token | Value |
| --- | --- |
| Background 1 | `#050816` |
| Background 2 | `#07101F` |
| Background 3 | `#0B1220` |
| Card | `#101827` |
| Accent | `#22C55E` |
| Accent Glow | `#34D399` |
| Text Primary | `#FFFFFF` |
| Text Muted | `#B7C1D3` |
| Border | `rgba(255,255,255,0.08)` |

## Sections

Hero · Trusted By · Services · Music Distribution · Video Distribution · Why Choose Us · How It Works · Stats · Testimonials · Stores Grid · Pricing · FAQ · Support · CTA · Footer.

## Responsive Breakpoints

Verified pixel-perfect across **320 / 375 / 425 / 768 / 1024 / 1280 / 1440 / 1920**. No horizontal scrolling, mobile-first.

## SEO

Open Graph + Twitter cards, JSON-LD Organization schema, semantic landmarks, descriptive alt text, accessible focus states.
