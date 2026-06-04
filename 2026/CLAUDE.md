# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000/2026
- `npm run build` - Build static site for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

Note: Use `nvm use` before starting development to ensure correct Node.js version.

## Architecture Overview

This is a **Next.js 16** conference website with:
- **Static Site Generation (SSG)** - Exports to static HTML
- **Internationalization** - English and Japanese via next-intl
- **Styling** - Tailwind CSS v4 with custom theme colors
- **Base Path** - Deployed under `/2026` path

### Key Architectural Decisions

1. **No Testing Framework** - Only linting is configured
2. **Data as Code** - All conference data (speakers, talks, sponsors) defined in TypeScript constants under `src/constants/`
3. **Static Export** - Images are unoptimized due to static deployment constraints
4. **MDX for Documentation** - Documentation pages use MDX components

### Data Model Relationships

Understanding the speaker/talk/session relationship is critical:

- **Speaker**: Can participate in multiple talks/sessions
- **Talk**: Can have multiple speakers
- **Session**: Time/location info, can be talks or other events (workshops, breaks)

Example flow: A speaker gives multiple talks → Each talk has session info → Sessions appear in schedule

### Routing Structure

All routes are internationalized under `/[locale]/`:
- `/[locale]/speakers` - Speaker grid
- `/[locale]/talks/[slug]` - Individual talk pages with dynamic OG images
- `/[locale]/schedule` - Conference timetable
- `/[locale]/doc/*` - MDX documentation pages

### Component Patterns

- `PageContainer` - Wrapper for consistent page layouts with title prop
- `src/components/og/` - OpenGraph image generation components
- Tailwind utilities only - No CSS-in-JS or CSS modules

### Theme Colors

Defined in `globals.css`:
- Primary: Orange `rgb(234 81 6)`
- Track A: Orange, Track B: Teal, Track C: Yellow, Track D: Blue