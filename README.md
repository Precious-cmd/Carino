# Carino Studio

This repository contains the foundation for the Carino Studio premium portfolio website.

## Architecture

- Next.js 15 with the App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis Smooth Scroll
- Shadcn-inspired UI structure

## Project Layout

- `public/` — static assets and media folders
- `src/app/` — top-level Next.js application routes and global styles
- `src/components/` — reusable UI components, atoms, molecules, organisms, templates
- `src/data/` — content-driven datasets for portfolio, services, tools, workflow, testimonials
- `src/types/` — TypeScript models for content and components
- `src/hooks/` — reusable interaction hooks
- `src/lib/` — utility libraries and animation helpers
- `src/config/` — site metadata and application settings
- `src/styles/` — design tokens and styling utilities

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the site locally at `http://localhost:3000`
