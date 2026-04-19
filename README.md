# Amelie Portfolio Website

Custom portfolio website built as a front-end development case study using Next.js, TypeScript, Tailwind CSS, and Framer Motion.

This README is intentionally written as a developer showcase. It focuses on the implementation work, technical decisions, debugging, UI customization, and product-thinking used to turn a starter into a fully tailored client portfolio.

## Project Summary

This project began as a portfolio starter and was transformed into a custom site through iterative client feedback, design refinement, content restructuring, and front-end engineering work.

The final result includes:

- a custom Home page with interactive project previews
- a Projects page with expandable sections and embedded media
- an About Me page with a redesigned layout and custom icon-based skills display
- a simplified Contact page with focused contact methods
- a fully updated visual system including typography, image handling, and responsive layout behavior

## Developer Skills Demonstrated

### Front-End Engineering

- built and customized a multi-page portfolio using the Next.js App Router
- created reusable React component patterns for layout, cards, navigation, reveal effects, and project presentation
- implemented responsive layouts for mobile and desktop without breaking design consistency
- adapted visual hierarchy, spacing, and typography based on repeated client revision cycles

### UI Implementation

- translated visual feedback into exact component and style changes
- customized hero sections, stacked project cards, accordion sections, portrait treatments, and contact cards
- integrated local typography using `next/font/local`
- refined image framing, card composition, and content alignment for a polished presentation

### Motion And Interaction Design

- used Framer Motion for controlled reveal and accordion interactions
- tuned expand/collapse behavior for smoother perceived performance
- implemented hash-based deep linking from Home project cards into matching Projects sections
- added conditional media handling for portrait short-form content inside a primarily landscape-based project layout

### Debugging And Problem Solving

- diagnosed and fixed a route-navigation rendering issue tied to transition behavior
- traced image loading failures back to incorrect public asset structure and corrected the asset pipeline
- fixed media presentation issues caused by aspect-ratio mismatches in embedded content
- improved project-section interaction behavior without flattening the visual design

### Product And Client Delivery Skills

- translated non-technical client requests into maintainable UI changes
- iterated quickly across typography, tone, page structure, and content hierarchy
- preserved working parts of the site while making targeted fixes instead of broad rewrites
- kept the build stable while continuously adapting the product to live feedback

## Key Technical Work Completed

### 1. Rebuilt The Portfolio Structure

- replaced generic starter content with a client-specific Home, Projects, About Me, and Contact experience
- centralized structured content in `src/data/site.ts`
- supported consistent updates across multiple pages by driving UI from shared data

### 2. Implemented Custom Typography And Branding

- loaded the Bropella font locally for headings
- configured Helvetica-based sans typography for body content
- updated heading, body, and CTA styling to fit the client’s requested visual direction

### 3. Built Interactive Project Navigation

- made Home page project images clickable
- linked each preview card to the correct Projects section using stable hash IDs
- updated the Projects accordion to auto-open the matching category when arriving from a hash link

### 4. Customized Media Handling

- replaced placeholder card art with client-provided custom images
- corrected asset serving by moving browser-facing images into `public/images`
- updated the About Me portrait to use a circular frame
- handled portrait short-form media differently from landscape embeds to prevent stretching

### 5. Refined Motion And UX Behavior

- simplified fragile route-transition behavior that caused navigation issues
- kept page-level motion while removing the part that interfered with route changes
- improved expand/collapse behavior on the Projects page for a smoother feel

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- PostCSS
- local font loading with `next/font/local`

## Files That Show The Work

- `src/app/layout.tsx`
  global layout, metadata, font loading, navbar/footer shell
- `src/app/globals.css`
  global visual system, typography, layout utilities, and page styling
- `src/data/site.ts`
  central data model for navigation, hero copy, projects, and asset mapping
- `src/components/sections/home-stacked-showcase.tsx`
  Home page composition and project preview presentation
- `src/components/projects/nitro-project-card.tsx`
  project preview card implementation used on the Home page and stacked project scene
- `src/components/projects/expandable-project-list.tsx`
  Projects page accordion, embedded video behavior, and section hash handling
- `src/app/about-me/page.tsx`
  About page structure, portrait rendering, and icon-based skills UI
- `src/app/contact/page.tsx`
  simplified contact experience and icon-based link cards

## Project Structure

- `src/app`
  app routes, page files, layout, and global CSS
- `src/components`
  reusable UI, layout, navigation, and project components
- `src/data`
  centralized portfolio data and content configuration
- `src/app/fonts`
  local font assets
- `public/images`
  browser-served images used by the site

## Development Commands

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run type checking:

```bash
npm run typecheck
```

## Notes On Asset Handling

- Any image referenced in the browser as `/images/...` must live in `public/images`
- repo-level folders are not automatically browser-accessible in Next.js
- this project includes custom background, portrait, and project-card image assets served from `public/images`

## Routes

- `/`
- `/projects`
- `/about-me`
- `/contact`
