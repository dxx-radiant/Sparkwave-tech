import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import usePageTitle from '../usePageTitle.js'
import { trackEvent } from '../analytics.js'
import { solarGenerators, solarFeatures as p } from '../data/site.js'

function ProductChoice({ product, selected, onSelect }) {
  const baseUrl = import.meta.env.BASE_URL
  const image = product.images[0]
  return (
    <button
      type="button"
      className={`product-choice${selected ? ' selected' : ''}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      {selected && <span className="product-choice-badge">Selected</span>}
      <div className="product-choice-image">
        <img
          src={`${baseUrl}${image.src.replace(/^\//, '')}`}
          alt={image.alt}
          className={image.fadeEdges ? 'fade-edges' : undefined}
        />
      </div>
      <div className="product-choice-body">
        <div className="product-choice-name">{product.name}</div>
        {product.price && <div className="product-choice-price">{product.price}</div>}
        <ul className="product-choice-highlights">
          {product.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <span className="product-choice-cta">{selected ? 'Viewing details ↓' : 'View details & purchase →'}</span>
      </div>
    </button>
  )
}

function Product({ product }) {
  const comingSoon = !product.price && !product.squareLink && product.specs.length === 0
  return (
    <div className="product">
      <div className="product-media">
        {/* key resets the carousel to the first image when switching products */}
        <Carousel key={product.id} images={product.images} />
        <div className="product-name">{product.name}</div>
      </div>

      <div className="description">
        {(product.price || product.squareLink) && (
          <div className="price-row">
            {product.price && <div className="price">{product.price}</div>}
            {product.squareLink && (
              <a
                className="buttonStyle"
                href={product.squareLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('begin_checkout', {
                    currency: 'USD',
                    value: Number(product.price.replace(/[^\d.]/g, '')),
                    items: [{ item_name: product.name }],
                  })
                }
              >
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
  // The chosen product lives in the address (/solar?product=stacked) so the
  // back button, shared links and analytics all see which one was picked.
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = solarGenerators.find((g) => g.id === searchParams.get('product'))
  const detailsRef = useRef(null)
  const scrollToDetails = useRef(false)

  useEffect(() => {
    if (selected && scrollToDetails.current) {
      scrollToDetails.current = false
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selected])

  const choose = (product) => {
    trackEvent('select_item', { items: [{ item_name: product.name }] })
    scrollToDetails.current = true
    if (product === selected) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setSearchParams({ product: product.id }, { preventScrollReset: true })
    }
  }

  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="product-chooser-heading">
            <h2>Choose your generator</h2>
            <p>
              We offer {solarGenerators.length} models. Select one to see its full specs and purchase.
            </p>
          </div>
          <div className="product-chooser">
            {solarGenerators.map((product) => (
              <ProductChoice
                key={product.id}
                product={product}
                selected={product === selected}
                onSelect={() => choose(product)}
              />
            ))}
          </div>

          {selected && (
            <div ref={detailsRef} className="product-details" aria-live="polite">
              <h2 className="product-details-heading">{selected.name} details</h2>
              <Product product={selected} />
            </div>
          )}
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
