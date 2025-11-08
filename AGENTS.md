# Repository Guidelines

## Project Structure & Module Organization
This portfolio is a TypeScript Next.js app. Route components inside `pages/` map directly to URLs (`pages/about.tsx`, `pages/projects.tsx`), while shared UI lives in `components/` (e.g., `Navbar`, `Movies`, `Music`). Global CSS, Tailwind layers, and custom Bogart fonts live in `styles/` and `styles/fonts/`. Static media—profile shots, PDFs, logos—belong in `public/` so they can be imported via `/asset-name`. Keep build-wide tweaks in the root configs (`next.config.js`, `tailwind.config.js`, `tsconfig.json`) to avoid scattering settings in individual files.

## Build, Test, and Development Commands
- `npm run dev` (or `pnpm dev`): start the hot-reloading server on http://localhost:3000.
- `npm run build`: produce an optimized `.next` bundle with type-checking enabled.
- `npm run start`: serve the latest production build; run it before deploying to Vercel.
- `npm run lint`: execute ESLint with `eslint-config-next`, TypeScript, and Tailwind class-order plugins; commit only when clean.

## Coding Style & Naming Conventions
Use 2-space indentation, functional React components, and TypeScript types for props and page exports (`NextPage`). Name components and files in PascalCase, hooks/utilities in camelCase, and keep Tailwind utility strings readable by grouping layout → color → animation classes. Run `npm run lint -- --fix` before opening a PR to align import order and catch unused values early.

## Testing Guidelines
Automated tests are not yet committed, but new work should include Jest + React Testing Library coverage. Place specs next to the file (`Component.test.tsx`) or under `__tests__/`. Cover at least navigation states (e.g., `Navbar`) and interactive flows (`pages/contact.tsx` form submit), and aim for 80% line coverage on new code.

## Commit & Pull Request Guidelines
History favors concise, imperative subjects (“Update biography and add new CV”). Keep subjects under ~60 characters, use the body for context, and reference related issues. Pull requests must describe scope, include screenshots or recordings for UI changes, list test commands/results, and call out content or asset additions so reviewers can re-run `npm run build` when necessary.

## Security & Configuration Tips
Never hard-code secrets: load external keys (Formspree IDs, analytics tokens) from `.env.local`, prefixing with `NEXT_PUBLIC_` only if the browser needs the value. `next.config.js` already enables `reactStrictMode`, so fix warnings during `npm run dev`. Treat fonts and media in `public/` as licensed assets and document their source when adding new files.
