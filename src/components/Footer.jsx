import { contact } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>{contact.name}</div>
      <div>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div>
        <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
      </div>
    </footer>
  )
}
