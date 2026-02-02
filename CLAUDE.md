# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a UX/UI designer, built with Next.js 14 (App Router) and deployed as a static site to GitHub Pages. Content is managed via a Strapi headless CMS accessed through GraphQL.

## Commands

- `npm run dev` — Start dev server (port 3001, bound to 0.0.0.0)
- `npm run build` — Build static export to `/out` directory
- `npm run serve` — Serve the static build locally via `npx serve`
- `npm run lint` — Run ESLint
- `npm run types:gen` — Regenerate GraphQL TypeScript types from Strapi schema (requires local Strapi at localhost:1337)

## Architecture

### Static Export

The site uses `output: 'export'` in `next.config.mjs` to generate a fully static site. There is no server runtime — all data fetching happens at build time.

### Data Flow

Portfolio data flows from **Strapi CMS** → **GraphQL API** → `services/projects.service.ts` → server components in `app/`. GraphQL queries live in `graphql/queries/`, and generated types are in `graphql/generated.ts` (auto-generated via `@graphql-codegen`, do not edit manually).

### Routing

Two routes: `/` (home with all sections) and `/resume` (detailed CV page). Home page sections are defined as separate components in `app/` (PromoSection, AboutSection, SoftSection, ExperienceSection, PortfolioSection, ContactsSection).

### Component Patterns

- **Polymorphic components**: `Typography` and `Button` accept an `as` prop to render as any HTML element. Uses `class-variance-authority` for type-safe variants.
- **SVGs as components**: SVG files in `icons/` are converted to React components via `@svgr/webpack`.
- **CSS Modules + Tailwind**: Component-specific styles use CSS Modules (`.module.css`), global styles use Tailwind utilities. Class merging uses the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge).

### Animations

React-Spring handles physics-based animations throughout the site — scroll-triggered icon animations in the hero section, portfolio card hover effects, and modal expand/collapse transitions.

### Key Directories

- `app/` — Pages, layouts, and page-level section components
- `components/` — Reusable UI components (Portfolio modal, ScrollableTabs, Typography, etc.)
- `graphql/` — GraphQL queries and auto-generated types
- `services/` — Data fetching layer (Strapi API calls)
- `lib/` — Utilities (class merging, env vars, image URL helpers)
- `types/` — Shared TypeScript types (Strapi response shapes, polymorphic component helpers)
- `icons/` — SVG files (imported as React components)
- `fonts/` — Local woff2 font files (Mak for headings, Evolventa for body)

## Environment Variables

- `NEXT_PUBLIC_STRAPI_URL` — Strapi API base URL
- `STRAPI_API_TOKEN` — Bearer token for Strapi API authentication
- `NEXT_PUBLIC_SITE_URL` — Site URL used in metadata
- `NEXT_PUBLIC_IMAGES_PREFIX` — Prefix for image URLs (empty string when using CDN directly)

## Styling

Custom color palette: foreground (#251D15), background (#FFFAF5), brown, light-brown, peach, beige. Two custom font families loaded as CSS variables: `--font-heading` (Mak) and `--font-body` (Evolventa). Responsive typography uses `clamp()` for fluid scaling defined in `tailwind.config.ts`.
