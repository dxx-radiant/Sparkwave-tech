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

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <div className="top-row">
        <Link className="brand" to="/">
          <img src="/images/sparkwave-logo.svg" alt="Sparkwave" />
        </Link>
        <button
          className="nav-toggler"
          aria-label="Navigation menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggler-icon" />
        </button>
      </div>
      <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`}>
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className="nav-link">
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
