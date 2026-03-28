# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Business website for **Manisha Interiors**, an interior design company based in Hyderabad. Built with Angular 17 and Angular SSR (Express.js).

## Commands

All commands should be run from the `code/` directory:

```bash
cd code
npm start          # Dev server at http://localhost:4200
npm run build      # Production build (outputs to dist/)
npm test           # Run Karma unit tests
npm run watch      # Dev build with watch mode
node dist/code/server/server.mjs  # Run SSR server after build
```

## Architecture

**Framework**: Angular 17.3 with standalone components (no NgModules), SSR/prerendering via Express.js.

**Structure**:
- `code/src/app/components/` — Page components: `header`, `footer`, `home`, `gallery`, `contact`, `offerings`
- `code/src/app/shared/constants.ts` — Business info, API keys (EmailJS, Google Maps), taglines, contact details
- `code/src/app/app.routes.ts` — All routes lazy-load their components
- `code/server.ts` — Express SSR server entry point
- `images/` — Reference images (not served; actual assets in `code/src/assets/images/`)

**Key patterns**:
- All components are standalone; use `imports: []` in `@Component` decorator rather than NgModules
- Contact form uses EmailJS (no backend required) — credentials are in `shared/constants.ts`
- Carousel in `home` uses RxJS `interval` with `NgZone.runOutsideAngular()` to avoid unnecessary change detection
- Routing uses lazy loading: `loadComponent: () => import(...)`
