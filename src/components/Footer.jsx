import { contact } from '../data/site.js'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>{contact.name}</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/solar">Solar Generator</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-section">
          <h4>Sparkwave</h4>
          <p>Custom, repairable, expandable solar generators for the modern age.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sparkwave Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}
