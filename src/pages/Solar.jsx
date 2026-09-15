import Carousel from '../components/Carousel.jsx'
import usePageTitle from '../usePageTitle.js'
import { solarGenerator as p } from '../data/site.js'

export default function Solar() {
  usePageTitle('SOLAR GENERATOR')
  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="product">
            <div className="product-media">
              <Carousel images={p.images} />
              <div className="product-name">{p.name}</div>
            </div>

            <div className="description">
              <div className="price-row">
                <div className="price">{p.price}</div>
                <a className="buttonStyle" href={p.squareLink} target="_blank" rel="noopener noreferrer">
                  Purchase Now
                </a>
              </div>

              <div className="specs-section">
                {p.specs.map((s) => (
                  <div key={s.label} className="spec-item">
                    <div className="bolded">{s.label}</div>
                    <div>
                      {s.lines.map((line) => (
                        <div key={line} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {p.features.map((f) => (
            <div key={f.label}>
              <h3 style={{ color: 'var(--green)' }}>{f.label}</h3>
              <p>{f.text}</p>
            </div>
          ))}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--dark-card)', borderRadius: '8px', borderLeft: '4px solid var(--green)' }}>
            <p style={{ margin: 0, fontStyle: 'italic' }}>{p.note}</p>
          </div>
        </div>
      </section>
    </>
  )
}
