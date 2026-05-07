# Next Agent Prompt — Dynamic-CV Farid rebrand continuation

You are continuing work in `/home/faris/Desktop/personal/Dynamic-CV`.

## User intent

The repository is being converted into Farid Sayago's production portfolio. Keep all advanced AI/LLMOps modules, but remove previous-owner public identity from shipped site/API/evals unless explicitly historical docs mention it. Focus remains architecture, public surface, Brand Theme Module, SEO, mobile experience, AI knowledge, and documentation quality.

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

## Current PR

Open PR:

- https://github.com/Faridsz0605/Dynamic-CV/pull/1
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

3. Mobile nav:
   - `src/GlobalNav.tsx` now has hamburger menu, glass dropdown, and backdrop.

4. Farid-only public surface/prerender:
   - `scripts/prerender.tsx` prerenders only `/`, `/en`, `/blog/mlops-field-notes`, and `404.html`.
   - Prerender scans output for forbidden previous-owner identity terms.
   - Article hreflang is injected for same-slug ES/EN seed note.

5. Legacy cleanup:
   - Removed unused legacy public modules, old article/page TSX files, old i18n files, old previous-owner social stats scripts, and oversized unused PNGs.
   - Replaced eval datasets with Farid-only datasets.
   - Rewrote voice/evaluator/adversarial/script prompts away from previous-owner identity.

6. SEO/perf cleanup:
   - Added article hero/OG metadata and visible hero image for `MLOps Field Notes`.
   - Added `contentStage: 'seed'` article seam so seed notes use a lower validator word-count threshold.
   - Optimized `public/images/project2.webp` and `public/images/project3.webp`.
   - Split vendor chunks in `vite.config.ts` so `validate-prerender` bundle budget is clean.

7. AI/RAG fact sync:
   - Farid confirmed `src/content/farid-profile.ts` is up to date and the repo truth source.
   - Kimberly-Clark BI Analyst role is preserved and synced into `public/llms.txt` and `scripts/chunks/farid-profile.json`.
   - `scripts/validate-llms-txt.ts` now imports `faridProfile` and checks experience/project/contact proof points from the truth source.
   - `evals/datasets/factual.json` includes a Kimberly-Clark factual test.
   - `api/_shared/rag.js` recognizes `farid-profile` source keywords and Kimberly-Clark experience intent.
   - `chatbot-prompt.txt` was not edited in this update.

8. Documentation:
   - `AGENTS.md` documents `src/content/farid-profile.ts` as canonical truth source.
   - Obsidian note updated: `/home/faris/Documents/obsidian/portfolio/dynamic-cv-public-surface-brand-cleanup.md`.
   - Active plan: `PLAN-b85e26a2` — `Farid profile truth-source sync and README refresh`.

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

1. Commit/push any new changes if the working tree is dirty.
2. Continue active plan `PLAN-b85e26a2`.
3. Next incomplete step: elaborate a better `README.md` using `/create-readme` skill.
   - Skill file already read once: `/home/faris/.agents/skills/create-readme/SKILL.md`.
   - Follow its rules: concise, appealing, GFM, no license/contributing/changelog sections, use GitHub admonitions where useful.
4. Consider generating `public/llms.txt` from `farid-profile.ts` in a future seam if manual drift becomes painful.
