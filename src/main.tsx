/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense, Component, type ReactNode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'
import GlobalNav from './GlobalNav.tsx'
import FaridFieldNotes from './FaridFieldNotes.tsx'

const FloatingChat = lazy(() => import('./FloatingChat'))
const OpsDashboard = lazy(() => import('./ops/OpsDashboard'))

class ChatErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() { return this.state.hasError ? null : this.props.children }
}

function GlobalChat() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/ops')) return null
  return <ChatErrorBoundary><Suspense fallback={null}><FloatingChat lang="en" /></Suspense></ChatErrorBoundary>
}

function NotFound() {
  return <main className="farid-shell farid-not-found"><h1 className="farid-display">404</h1><p>That page is not part of Farid's portfolio.</p><Link to="/" className="farid-button-primary">Back home</Link></main>
}

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <GlobalNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/en" element={<App />} />
          <Route path="/blog/mlops-field-notes" element={<FaridFieldNotes />} />
          <Route path="/ops" element={<OpsDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GlobalChat />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
