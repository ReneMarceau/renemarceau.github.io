# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite)
- **Build:** `npm run build` (Vite)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (ESLint, zero warnings allowed)
- **Deploy to GitHub Pages:** `npm run deploy` (builds first via `predeploy`, deploys `dist/` to `gh-pages` branch)

## Architecture

This is a single-page React 18 portfolio site built with Vite, Tailwind CSS, and Framer Motion. It deploys to GitHub Pages on the `gh-pages` branch.

### Key Layers

- **`src/App.jsx`** — Top-level layout. Renders all sections in order: Navbar, Hero, About, Tech, Projects, Experience, Contact. Each section has its own background styling applied at this level.
- **`src/constants/index.js`** — Central data file for all portfolio content (nav links, services, technologies, experiences, projects). To update portfolio content, edit this file.
- **`src/assets/index.js`** — Barrel file for all image/asset imports. New assets must be exported here to be used in constants or components.
- **`src/styles.js`** — Shared Tailwind class strings (typography, padding, layout utilities) used across components.
- **`src/hoc/SectionWrapper.jsx`** — HOC that wraps section components with Framer Motion stagger animations and consistent padding/max-width. Components are wrapped like: `export default SectionWrapper(Component, 'sectionId')`.
- **`src/utils/motion.js`** — Framer Motion variant factories (`textVariant`, `fadeIn`, `slideIn`, `zoomIn`, `staggerContainer`) used throughout components.

### 3D Rendering

Uses `@react-three/fiber` and `@react-three/drei` for the Tech section's 3D ball icons (`src/components/canvas/Ball.jsx`). The `Loader.jsx` component shows a loading state for the canvas.

### Contact Form

Uses EmailJS (`@emailjs/browser`) with hardcoded service/template/public key values in `src/components/Contact.jsx`.

### Styling

- Tailwind CSS with JIT mode and extensive custom theme in `tailwind.config.cjs` (custom colors, fonts, background gradients, breakpoints)
- Custom fonts loaded via `@font-face` in `src/index.css` (Arenq, Mova, Beckman, Overcame)
- Additional CSS classes (glassmorphism, gradients, card shadows) defined in `src/index.css`

### Conventions

- JSX components use `.jsx` extension; plain JS modules use `.js`
- Components are exported via barrel files (`components/index.js`, `canvas/index.js`, `hoc/index.js`)
- Uses BrowserRouter from `react-router-dom` (for hash-based section navigation, not actual routing)
