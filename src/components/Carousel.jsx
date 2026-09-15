import { useState } from 'react'

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const baseUrl = import.meta.env.BASE_URL
  const go = (step) => setIndex((i) => (i + step + count) % count)

  return (
    <div className="carousel-container" aria-roledescription="carousel">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`carousel-image${i === index ? ' active' : ''}`}
          aria-hidden={i !== index}
        >
          <img src={`${baseUrl}${img.src.startsWith('/') ? img.src.slice(1) : img.src}`} alt={img.alt} />
        </div>
      ))}
      {count > 1 && (
        <>
          <button className="carousel-button prev-button" aria-label="Previous image" onClick={() => go(-1)}>
            ❮
          </button>
          <button className="carousel-button next-button" aria-label="Next image" onClick={() => go(1)}>
            ❯
          </button>
        </>
      )}
    </div>
  )
}
