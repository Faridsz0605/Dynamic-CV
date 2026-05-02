import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faridProfile } from './content/farid-profile'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Field Notes', href: '/#field-notes' },
  { label: 'Contact', href: '/#contact' },
]

export default function GlobalNav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname.startsWith('/ops')) return null

  return (
    <header className={`farid-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="farid-navbar-inner">
        <Link to="/" className="farid-logo" aria-label="Farid Sayago home"><span className="farid-logo-mark">FS</span><span>{faridProfile.name}</span></Link>
        <nav aria-label="Primary navigation"><ul>{navLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
        <div className="farid-nav-meta"><span><span className="farid-dot" /> available</span><a href={faridProfile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={faridProfile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      </div>
    </header>
  )
}
