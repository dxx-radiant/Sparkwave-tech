export default function Banner() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Electrify Your World Endlessly</h1>
          <div className="hero-tagline">Custom Solar Generators</div>
          <p className="hero-description">
            Portable, powerful solar generators designed for maximum reliability and expandability.
            Our custom-built solutions are repairable, upgradeable, and built to last.
          </p>
          <a href={`${baseUrl}solar`} className="cta-button">
            Explore Our Generators
          </a>
        </div>
        <div className="hero-image">
          <img src={`${baseUrl}images/balcony.png`} alt="Sparkwave Solar Generator" />
        </div>
      </div>
    </section>
  )
}
