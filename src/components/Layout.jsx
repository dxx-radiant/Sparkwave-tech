import { Outlet } from 'react-router-dom'
import NavMenu from './NavMenu.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="page">
      <aside className="sidebar">
        <NavMenu />
      </aside>
      <main>
        <article className="content">
          <Outlet />
        </article>
        <Footer />
      </main>
    </div>
  )
}
