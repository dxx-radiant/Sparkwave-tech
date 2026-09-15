import usePageTitle from '../usePageTitle.js'
import { contact } from '../data/site.js'

export default function About() {
  usePageTitle('About Sparkwave')
  return (
    <>
      <section className="hero" style={{ minHeight: 'auto', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>Meet the Innovator Behind Sparkwave</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            25+ years of engineering expertise dedicated to sustainable power solutions
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Story</h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ background: 'var(--dark-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--green)' }}>
                <h3 style={{ color: 'var(--green)' }}>Deep Technical Expertise</h3>
                <p>
                  With an electronics degree since the early 90s and involvement in mechanical engineering since 1998,
                  I've spent over 25 years combining these fields to push the boundaries of what's possible. My passion
                  for high voltage and high frequency applications drives innovation at every step.
                </p>
              </div>

              <div style={{ background: 'var(--dark-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--green)' }}>
                <h3 style={{ color: 'var(--green)' }}>EV & Battery Excellence</h3>
                <p>
                  Over the past several years, I've immersed myself in the EV world, building cutting-edge battery systems
                  and tackling complex energy storage challenges. This expertise directly translates into the superior
                  performance and reliability of Sparkwave generators.
                </p>
              </div>

              <div style={{ background: 'var(--dark-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--green)' }}>
                <h3 style={{ color: 'var(--green)' }}>Customer-First Philosophy</h3>
                <p>
                  My primary goal is to educate and empower people. I believe knowledge is the key to proper preparation,
                  and I'm committed to finding solutions that work for every family's unique needs and budget. Whether you're
                  just learning or ready to invest, I'm here to guide you.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(21, 174, 75, 0.1)', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--green)', marginBottom: '1rem' }}>Ready to Explore?</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Let's discuss how Sparkwave generators can power your future sustainably.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href={`mailto:${contact.email}`} className="buttonStyle">
                  Email Us
                </a>
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="buttonStyle">
                  Call {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
