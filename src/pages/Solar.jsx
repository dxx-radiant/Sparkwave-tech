import Carousel from '../components/Carousel.jsx'
import usePageTitle from '../usePageTitle.js'
import { solarGenerator as p } from '../data/site.js'

export default function Solar() {
  usePageTitle('SOLAR GENERATOR')
  return (
    <>
      <div className="blackbar" />
      <div className="product">
        <div className="product-media">
          <Carousel images={p.images} />
          <div className="product-name">{p.name.toUpperCase()}</div>
        </div>

        <div className="description">
          <div className="price-row">
            <div className="price">{p.price}</div>
            <a className="buttonStyle" href={p.squareLink} target="_blank" rel="noopener noreferrer">
              Purchase
            </a>
          </div>

          {p.specs.map((s) => (
            <div key={s.label}>
              <div className="bolded">{s.label.toUpperCase()}</div>
              <div>
                {s.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section section-tight">
        {p.features.map((f) => (
          <div key={f.label}>
            <div className="bolded">{f.label.toUpperCase()}</div>
            <p>{f.text}</p>
          </div>
        ))}
        <div className="bolded">{p.note.toUpperCase()}</div>
      </div>
    </>
  )
}
