import { Link } from 'react-router-dom'
import usePageTitle from '../usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found | SPARKWAVE')
  return (
    <div className="section">
      <h3>This page doesn't exist</h3>
      <p>
        Check the address, or go to the <Link to="/">home page</Link>.
      </p>
    </div>
  )
}
