# LEGO ÉLAN — Architectural Perfumery

> **Tactile Essence Design.** A luxury fragrance concept reimagining LEGO's modular construction heritage into bespoke, collectible olfactory design.

---

## The Concept

**LEGO ÉLAN** explores an unexpected brand transformation: what if LEGO channeled its iconic modular philosophy not into children's toy sets, but into an ultra-luxury editorial perfumery house?

Instead of purchasing a static, mass-produced scent, visitors architect their own signature fragrance from the ground up:
1. **The Crown (Top Note)**: Ephemeral citrus and bright piquant spices.
2. **The Core (Heart Note)**: Structural florals and mineral-infused woods.
3. **The Foundation (Base Note)**: Deep anchoring resins, ambers, and Mysore sandalwood.

Each formula is paired with a precision-machined modular bottle featuring tactile connection studs and real-time olfactory calibration.

---

## Features

- **Interactive 3D Modular Assembly (`Three.js`)**:
  - WebGL-powered 3D perfume bottle with physical glass transparency, gold heart, and obsidian cap modules.
  - Magnetic assembly animation on page entry, smooth mouse parallax tracking, and scroll-driven modular separation.
  - Resource-optimized with offscreen pausing (`IntersectionObserver`) and proper WebGL memory cleanup.
- **Ambient GLSL Scent Aura (`WebGL Shader`)**:
  - Procedural fullscreen fragment shader generating a smooth, shifting warm ivory aura responsive to cursor motion.
- **Interactive Scent Builder & Live Scent DNA**:
  - Real-time React state management allowing users to customize note combinations.
  - Deterministic orbital ring visualizer that calculates olfactory profiles (`SILK`, `VELVET`, `AURORA`, `PRISM`, `MONOLITH`, `NOCTURNE`).
  - Web Audio API synthesized tactile snap feedback on note selection.
  - Composition finalization modal with custom serial number, accord breakdown, and formula export.
- **Anatomy Bento Grid & Quad Collection**:
  - Technical layer breakdown with architectural tolerance specs.
  - 4-item responsive quad gallery (*First Light*, *After Dark*, *Cloud*, *Raw*).
- **Responsive & Accessible**:
  - Sticky glassmorphic navigation with mobile slide-in drawer and scroll lock.
  - Semantic HTML, keyboard navigable, and respects `prefers-reduced-motion`.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D & Graphics**: [Three.js](https://threejs.org/) & WebGL GLSL Shaders
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Syne, Hanken Grotesk, JetBrains Mono (via `next/font/google`)

---

## Project Structure

```text
├── app/
│   ├── globals.css          # Design tokens, glassmorphism, stud plate patterns
│   ├── layout.tsx           # Google Fonts & SEO metadata
│   └── page.tsx             # Master landing page layout
├── components/
│   ├── Collection.tsx       # 4-item quad collection showcase
│   ├── FinalCTA.tsx         # The Masterpiece climax section
│   ├── Footer.tsx           # Multi-column editorial footer
│   ├── FragranceAnatomy.tsx # 3-card bento grid of fragrance layers
│   ├── Hero.tsx             # Hero typography, CTA, 3D container
│   ├── LifestyleSection.tsx # In Situ full-width interior gallery
│   ├── MobileMenu.tsx       # Slide-in mobile drawer
│   ├── Navbar.tsx           # Sticky blurred desktop/mobile header
│   ├── ScentBuilder.tsx     # Interactive 3-note configurator & formula modal
│   ├── ScentDNA.tsx         # Particle & orbital ring visualizer
│   └── three/
│       ├── HeroBottleScene.tsx # Three.js modular assembling bottle
│       └── ScentAura.tsx       # Fullscreen WebGL scent aura shader
├── lib/
│   ├── audio.ts             # Web Audio API tactile snap sound generator
│   ├── constants.ts         # Navigation links, collection items, layer data
│   ├── scents.ts            # Scent notes, default selections, profile calculation
│   └── utils.ts             # Tailwind class merging utility
├── public/
│   └── images/              # High-resolution local visual assets
├── types/
│   └── scent.ts             # TypeScript definitions
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/lego-elan.git
cd lego-elan
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```
