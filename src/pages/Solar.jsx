import { useState } from 'react'
import Carousel from '../components/Carousel.jsx'
import usePageTitle from '../usePageTitle.js'
import { solarGenerators, solarFeatures as p } from '../data/site.js'

function Product({ product }) {
  const comingSoon = !product.price && !product.squareLink && product.specs.length === 0
  return (
    <div className="product">
      <div className="product-media">
        {/* key resets the carousel to the first image when switching tabs */}
        <Carousel key={product.name} images={product.images} />
        <div className="product-name">{product.name}</div>
      </div>

      <div className="description">
        {(product.price || product.squareLink) && (
          <div className="price-row">
            {product.price && <div className="price">{product.price}</div>}
            {product.squareLink && (
              <a className="buttonStyle" href={product.squareLink} target="_blank" rel="noopener noreferrer">
                Purchase Now
              </a>
            )}
          </div>
        )}

        {comingSoon && <p className="coming-soon">Details coming soon</p>}

        <div className="specs-section">
          {product.specs.map((s) => (
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
  )
}

export default function Solar() {
  usePageTitle('SOLAR GENERATOR')
  const baseUrl = import.meta.env.BASE_URL
  const [active, setActive] = useState(0)
  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="product-tabs" role="tablist" aria-label="Solar generators">
            {solarGenerators.map((product, i) => (
              <button
                key={product.name}
                role="tab"
                id={`product-tab-${i}`}
                aria-selected={i === active}
                aria-controls="product-panel"
                className={`product-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {product.name}
              </button>
            ))}
          </div>
          <div role="tabpanel" id="product-panel" aria-labelledby={`product-tab-${active}`}>
            <Product product={solarGenerators[active]} />
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

      <section className="section" aria-labelledby="everyday-power-heading">
        <div className="container">
          <div className="responsive-container">
            <img
              src={`${baseUrl}images/solar-terrace.png`}
              alt="Portable solar power station and panels on a modern terrace at sunset"
              className="responsive-image"
              style={{ height: 'auto' }}
              width="1254"
              height="1254"
              loading="lazy"
            />
            <div className="responsive-text">
              <h3 id="everyday-power-heading">Power for Everyday Living</h3>
              <p>
                From quiet afternoons on the patio to weekends away, portable solar power
                brings energy closer to where you need it. Capture sunlight during the day
                and store it for later.
              </p>
              <p>
                Plan your setup around the devices you use, the space you have for panels,
                and the battery capacity you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
