# React + Vite + Tailwind CSS Starter

## Project Structure

```
├── public/              # Static assets served as-is
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx        # Sticky nav with dark mode toggle
│   │   ├── Header.test.tsx
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── Hero.test.tsx
│   │   ├── Features.tsx      # Feature cards grid
│   │   ├── Features.test.tsx
│   │   ├── Footer.tsx        # Page footer
│   │   └── Footer.test.tsx
│   ├── App.tsx          # Root component with dark mode state
│   ├── App.test.tsx     # App-level tests
│   ├── main.tsx         # Entry point — renders App into #root
│   ├── index.css        # Tailwind CSS import
│   ├── test-setup.ts    # Vitest setup (jest-dom matchers)
│   └── vite-env.d.ts    # Vite client types
├── index.html           # HTML entry point (Vite processes this)
├── vite.config.ts       # Vite config: React plugin + Tailwind plugin
├── vitest.config.ts     # Vitest config: jsdom environment
├── tsconfig.json        # Project references (app + node)
├── tsconfig.app.json    # Source TypeScript config (strict)
├── tsconfig.node.json   # Config file TypeScript config
├── eslint.config.js     # ESLint flat config with React rules
└── .prettierrc          # Prettier formatting rules
```

## Tech Stack

- **React 19** — UI framework with hooks and concurrent features
- **Vite 6** — Build tool with HMR and optimized production builds
- **TypeScript 5.8** — Strict mode enabled
- **Tailwind CSS 4** — Utility-first CSS via Vite plugin (no PostCSS config needed)
- **Vitest** — Unit testing with jsdom and React Testing Library
- **ESLint 9** — Flat config with react-hooks and react-refresh plugins
- **Prettier** — Code formatting

## Commands

```bash
npm run dev          # Start dev server with HMR (http://localhost:5173)
npm run build        # Type-check then build for production → dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting without writing
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Conventions

- Components go in `src/components/` as named exports
- One component per file, filename matches component name (PascalCase)
- Use function components with TypeScript interfaces for props
- Styling uses Tailwind utility classes inline — no separate CSS files per component
- Dark mode applies the `dark` class to `<html>` (`document.documentElement`), persisted via `localStorage`; defaults to OS `prefers-color-scheme`
- A skip-to-content link (`<a href="#main-content">`) is rendered at the top of `App.tsx` for keyboard accessibility
- `index.html` includes a Content Security Policy meta tag — update `connect-src` if making external API calls
- Tests are co-located with source: `Component.tsx` → `Component.test.tsx`
- Import order: React/libraries, then components, then styles

## Build Output

- `npm run build` produces `dist/` with `index.html` and hashed JS/CSS chunks
- Source maps are enabled for production debugging
- React and React DOM are split into a separate `react` chunk for caching

## Adding New Components

1. Create `src/components/MyComponent.tsx` with a named export
2. Import and use in `App.tsx` or parent component
3. Add test in `src/components/MyComponent.test.tsx`

## TypeScript

- Strict mode with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`
- Two tsconfig files: `tsconfig.app.json` (source) and `tsconfig.node.json` (config files)
- Run `npx tsc --noEmit` to type-check without building (uses project references)
