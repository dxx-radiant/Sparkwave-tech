import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './NavMenu.jsx'
import Footer from './Footer.jsx'
import { trackPageView } from '../analytics.js'

export default function Layout() {
  const location = useLocation()
  // Runs after the page's usePageTitle effect (children's effects run first),
  // so the page view carries the new page's title.
  useEffect(() => {
    trackPageView()
  }, [location.pathname, location.search])

  return (
    <div className="page">
      <NavMenu />
      <main>
        <article className="content">
          <Outlet />
        </article>
        <Footer />
      </main>
    </div>
  )
}
