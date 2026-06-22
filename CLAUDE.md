# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot-reloading (`next dev`). |
| `npm run build` | Generates an optimized production build (`next build`). |
| `npm start` | Runs the compiled production build (`next start`). |
| `npm run lint` | Executes ESLint to check code style and potential issues. |
| `npm test` *(if added later)* | Run unit / integration tests. When tests are added, use `npm test` or `npm test -- <testFile>` to run specific suites. |
| `npm run format` *(future)* | Format code using Prettier/ESLint auto-fixers. |

> **Tip:** When adding new scripts, update both `package.json` and this documentation to keep commands in sync.

## High‑Level Architecture

- **Framework:** Next.js 15.x (React 19) – hybrid server‑side & client‑side rendering.
- **Styling:** Tailwind CSS (via `tailwindcss` and `@tailwindcss/postcss`).
- **UI Components:**  
  - `framer-motion` for animation.  
  - `react-icons` for iconography.  
  - `sonner` for toast notifications.  
  - `react-hook-form` + `zod` for form handling & validation.
- **Routing:** Pages are defined under `portfolio/app` (or `portfolio/pages` in older conventions). Dynamic routes are supported via `[...slug].tsx`.
- **State Management:** Primarily local React state; forms leverage `react-hook-form` with schema validation from `zod`.
- **Styling Approach:** Utility‑first with Tailwind; custom classes live in `portfolio/styles/` or directly in JSX files.
- **Build Pipeline:**  
  1. Lint → 2. Build (`next build`) → 3. Start (`next start`).  
  CI may also run tests and generate a production artifact.

## Core Directory Layout

```
/portfolio
 ├─ app/                # Next.js App Router entries (pages, layout, loading, error boundaries)
 ├─ components/         # Reusable UI components (buttons, cards, animations)
 ├─ features/           # Feature‑specific folders (e.g., contact, blog, projects)
 ├─ lib/                # Utility libraries, API clients, helpers
 ├─ styles/             # Global CSS / Tailwind configuration
 ├─ public/             # Static assets (images, favicons)
 ├─ tests/              # (future) test files for unit / integration suites
 └─ package.json        # Scripts, dependencies, and project metadata
```

## Project‑Specific Scripts & Hooks

- **Pre‑commit Hooks:** Managed via Husky/lint‑staged (if configured). Ensure `npm run lint` passes before committing.
- **Git Workflow:**  
  - Default branch: `main`.  
  - Recent work is done on feature branches; PRs are reviewed before merging.  
  - Use `git checkout -b <branch>` for new features; keep branches short and descriptive.
- **Testing (when added):**  
  ```bash
  # Example test command
  npm test -- path/to/testFile.test.tsx
  ```
- **Environment Variables:**  
  - Stored in `.env.local` (not tracked).  
  - Prefix with `NEXT_PUBLIC_` for client‑side exposure.

## Frequently Used Tooling

- **VS Code Extensions:**  
  - ESLint, Prettier, Tailwind CSS IntelliSense, Next.js Snippets.  
  - Ensure they are enabled to auto‑fix lint errors on save.
- **MCP / IDE Integrations:**  
  - `claude-code` can read/write files directly; use `/read <path>` or `/edit <path>` to navigate code.  
  - Remember to **save** changes before continuing with a new task.
- **Node Scripts:**  
  - `npm run dev` → `next dev`  
  - `npm run build` → `next build`  
  - `npm start` → `next start`  

## Testing & Verification

When a code change is made:

1. **Lint Check:** `npm run lint` – ensures no style violations.  
2. **Run Build:** `npm run build` – compile the app; watch for errors.  
3. **Start Locally:** `npm start` – verify the production build runs correctly.  
4. **Optional Test Run:** If tests are added, run `npm test` to confirm coverage.

## Adding New Features – Checklist

- [ ] Create a new branch (`git checkout -b feature/<name>`).  
- [ ] Add/modify relevant files under `app/` or `components/`.  
- [ ] Update Tailwind classes as needed (keep them in `styles/` if growing).  
- [ ] Write unit / integration tests under `tests/` (if project adopts testing).  
- [ ] Run `npm run lint && npm run build && npm start` to sanity‑check.  
- [ ] Push branch and open a Pull Request for review.  
- [ ] Address review comments and merge into `main`.

## Keeping the Knowledge Base Fresh

- When a new script or dependency is added, update **Common Development Commands** table.  
- If the architecture evolves (e.g., adding a new routing strategy or state manager), reflect the change in **High‑Level Architecture**.  
- Delete or archive outdated sections to avoid confusion.

</details>

*End of CLAUDE.md*