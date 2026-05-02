import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'scripts',
    'evals',
    'src/BusinessOS.tsx',
    'src/CareerOps.tsx',
    'src/JacoboAgent.tsx',
    'src/N8nForPMs.tsx',
    'src/ProgrammaticSeo.tsx',
    'src/SantiferIRepair.tsx',
    'src/SelfHealingChatbot.tsx',
    'src/PrivacyPolicy.tsx',
    'src/MusicToggle.tsx',
    'src/articles/content-types.tsx',
    'src/articles/use-article-seo.ts',
    'src/VoiceOrb.tsx',
    'src/useAudioAnalyser.ts',
    'src/ops/hooks/useTraces.ts',
    'src/ops/tabs',
    'src/*-i18n.ts',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
