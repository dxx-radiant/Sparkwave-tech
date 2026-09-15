import { useState } from 'react'

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = (step) => setIndex((i) => (i + step + count) % count)

  return (
    <div className="carousel-container" aria-roledescription="carousel">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`carousel-image${i === index ? ' active' : ''}`}
          aria-hidden={i !== index}
        />
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
