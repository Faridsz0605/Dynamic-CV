# Next Agent Prompt — Dynamic-CV Farid rebrand continuation

You are continuing work in `/home/faris/Desktop/personal/Dynamic-CV`.

## User intent

The repository is being converted into Farid Sayago's production portfolio. Keep all advanced AI/LLMOps modules, but remove previous-owner public identity from shipped site/API/evals unless explicitly historical docs mention it. Focus remains architecture, public surface, Brand Theme Module, SEO, mobile experience, AI knowledge, README quality, and deployment readiness.

## Important project rules

Read `AGENTS.md` and `CONTEXT.md` first. Key constraints:

- Public identity must be Farid Sayago / Farid Sayago Villamizar.
- `src/content/farid-profile.ts` is the canonical truth source for shipped public Farid facts in this repo.
- Keep `public/llms.txt`, RAG chunks, eval fact expectations, SEO/person JSON-LD, and presentation copy synchronized from `farid-profile.ts`.
- No previous-owner identity or legacy projects in shipped public site/API/evals.
- Keep text chat, voice, RAG, Langfuse, Supabase/vector search, ops dashboard, evals, adversarial tests, prerender/SEO pipeline.
- Simplify through deeper modules and seams, not feature deletion.
- Use `/home/faris/Desktop/personal/3d-portfolio` as design reference.
- Major decisions should be mirrored in `/home/faris/Documents/obsidian/portfolio`.
- Skills policy in `AGENTS.md`: `/humanizer` for human-facing text, `/create-readme` for README/GitHub presentation, `/caveman` for terse terminal-output summaries.

## Current PRs

- PR #1 was merged: https://github.com/Faridsz0605/Dynamic-CV/pull/1
- Current open PR: https://github.com/Faridsz0605/Dynamic-CV/pull/2
- Branch: `refactor/farid-rebrand-architecture`
- Base: `main`

## What was implemented

1. Public Surface Module:
   - `src/public-surface/routes.ts`
   - `src/public-surface/seo.ts`
   - `src/public-surface/forbidden-identity.ts`

2. Brand Theme Module:
   - `src/brand/farid-theme.css`
   - Imported in `src/main.tsx`.
   - Includes mobile nav primitives, focus states, viewport-safe hero rules, card/terminal hover and mobile stacking.

3. Farid-only public surface/prerender:
   - `scripts/prerender.tsx` prerenders only `/`, `/en`, `/blog/mlops-field-notes`, and `404.html`.
   - Prerender scans output for forbidden previous-owner identity terms.
   - Article hreflang is injected for same-slug ES/EN seed note.

4. Legacy cleanup:
   - Removed unused legacy public modules, old article/page TSX files, old i18n files, old previous-owner social stats scripts, and oversized unused PNGs.
   - Replaced eval datasets with Farid-only datasets.
   - Rewrote voice/evaluator/adversarial/script prompts away from previous-owner identity.

5. SEO/perf cleanup:
   - Added article hero/OG metadata and visible hero image for `MLOps Field Notes`.
   - Added `contentStage: 'seed'` article seam so seed notes use a lower validator word-count threshold.
   - Optimized `public/images/project2.webp` and `public/images/project3.webp`.
   - Split vendor chunks in `vite.config.ts` so `validate-prerender` bundle budget is clean.

6. AI/RAG fact sync:
   - Farid confirmed `src/content/farid-profile.ts` is up to date and the repo truth source.
   - Kimberly-Clark BI Analyst role is preserved and synced into `public/llms.txt` and `scripts/chunks/farid-profile.json`.
   - `scripts/validate-llms-txt.ts` imports `faridProfile` and checks experience/project/contact proof points from the truth source.
   - `evals/datasets/factual.json` includes a Kimberly-Clark factual test.
   - `api/_shared/rag.js` recognizes `farid-profile` source keywords and Kimberly-Clark experience intent.
   - `chatbot-prompt.txt` was not edited in this update.

7. README/docs:
   - `README.md` rewritten with recruiter-first marketing, shields, screenshots, main functions, architecture, env notes, and human/agent fork instructions.
   - `docs/assets/banner.svg` added as the current README banner.
   - `docs/assets/banner-gpt-image-prompt.md` stores the GPT Image prompt to generate a future raster banner when `OPENAI_API_KEY` is available.
   - `docs/assets/portfolio-home.webp` and `docs/assets/portfolio-field-note.webp` added as screenshots.
   - `AGENTS.md` documents `src/content/farid-profile.ts` as canonical truth source and includes requested Skills used section.
   - Obsidian note updated: `/home/faris/Documents/obsidian/portfolio/dynamic-cv-public-surface-brand-cleanup.md`.
   - Plan `PLAN-b85e26a2` completed.

## Validation status

Latest commands passed:

```bash
npm run lint
npm run build
npm run validate-llms-txt
npx tsx --tsconfig tsconfig.app.json scripts/export-chunks.ts
npx tsx --tsconfig tsconfig.app.json scripts/generate-sitemap.ts
npx tsx --tsconfig tsconfig.app.json scripts/prerender.tsx
npx tsx --tsconfig tsconfig.app.json scripts/validate-prerender.ts
```

`validate-prerender`: 0 errors, 0 warnings.

## Recommended next work

1. Commit/push any dirty changes to PR #2.
2. If image generation credentials become available, generate a final README banner from `docs/assets/banner-gpt-image-prompt.md` and replace or supplement `docs/assets/banner.svg`.
3. Consider generating `public/llms.txt` directly from `src/content/farid-profile.ts` in a future seam if manual drift becomes painful.
4. Continue improving mobile polish and deployment docs only if Farid asks.
