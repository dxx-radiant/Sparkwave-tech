import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/solar', label: 'Solar Generator' },
  { to: '/about', label: 'About' },
]

export default function NavMenu() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="brand" to="/">
          <img src={`${baseUrl}images/Sparkwave Tech Logo.svg`} alt="Sparkwave" />
        </Link>

        <button
          className="nav-toggler"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul id="site-nav" className={`nav-menu${open ? ' open' : ''}`}>
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
