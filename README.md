# Farid Sayago — Dynamic AI Portfolio

Production portfolio for **Farid Sayago Villamizar**.

This repo is a full Farid rebrand of the previous Dynamic-CV codebase. It combines Farid's 3D portfolio design language with the advanced AI/LLMOps modules from Dynamic-CV.

## Product decisions

- Public frontend deploys on **Hostinger**.
- API/LLMOps backend deploys on **Vercel** at `https://api.sayagos.tech`.
- Public contact form uses **EmailJS only**.
- Text chat, voice mode, RAG, Langfuse tracing, Supabase, ops dashboard, and eval infrastructure remain.
- Supabase/Langfuse must be fresh Farid-only projects.
- Santiago/Santifer public content must not ship.

## Source of truth

- Project context: `CONTEXT.md`
- Agent rules: `AGENTS.md`
- Farid profile docs: `/home/faris/Documents/obsidian/portfolio`
- Design/content reference: `/home/faris/Desktop/personal/3d-portfolio`

## Commands

```bash
npm run dev      # local frontend
npm run build    # Hostinger/static frontend build
npm run lint     # eslint
npm run preview  # preview built frontend
```

RAG/API operations:

```bash
npm run rag:export
npm run rag:ingest
npm run prompt:sync
npm run evals
npm run test:ops
```

## Environment

See `.env.local.example`.

Frontend:

```env
VITE_API_BASE_URL=https://api.sayagos.tech
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Backend:

```env
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
LANGFUSE_PUBLIC_KEY=
LANGFUSE_SECRET_KEY=
OPS_DASHBOARD_SECRET=
CORS_ORIGIN=https://sayagos.tech
```
