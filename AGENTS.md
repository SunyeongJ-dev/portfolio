# Portfolio

Personal portfolio website built with Next.js. It's the first time using AI agent to build a website. Provide enough explanation and step-by-step instructions to complete it.

## Goal

This is my portfolio website to get a job as an entry level web developer. The website should showcase projects and personal identity in a memorable way.

## Design

- Use a dark theme with blue-violet undertones.
- Prefer a modern IDE style design / programming aesthetic.
- Use monospace typography selectively to reinforce the programming aesthetic.
- Minimize vertical scrolling.
- Prefer a dashboard-style layout instead of a long scrolling page.
- Layout idea: fixed sidebar navigation with a main content panel.
- Prioritize readability over visual effects.
- Follow the color tokens and usage rules defined in `docs/design-system.md`.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Commands

```bash
npm install    # install dependencies
npm run dev    # start dev server at http://localhost:3000
npm run build  # production build
npm run start  # run production build locally
npm run lint   # run ESLint
```

## Project layout

```
src/
  app/
    layout.tsx   # root layout (fonts, metadata, shared shell)
    page.tsx     # home page (/)
    globals.css  # global styles and Tailwind import
public/          # static assets (images, icons)
```

## Conventions

- Keep changes small and explain what each step does.
- Use the `src/app/` directory for pages and layouts.
- Use Tailwind utility classes for styling unless a pattern is repeated often.
- Do not commit unless explicitly asked.
- Avoid introducing global state libraries unless necessary.
- Create reusable components only when it improves maintainability or avoids duplication.
- Avoid unnecessary abstraction.

## AI Collaboration Rules

- Do not implement major features without first proposing a plan.
- Explain trade-offs before introducing new libraries or architectural changes.
- Ask for approval before large refactors.
- Prefer simple and maintainable solutions.

## Planned sections (not built yet)

- About (home route)
- Skills / Tech Stack (displayed within About and Projects section)
- Projects
- Project Case Studies (/projects/[slug])
- Contact

## Documentation

Before add content, read:

- docs/content.md
