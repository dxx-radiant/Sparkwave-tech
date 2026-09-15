import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle('SPARKWAVE')
  const baseUrl = import.meta.env.BASE_URL

  const features = [
    {
      icon: '⚙️',
      title: 'Customizable',
      description: 'Tailored to your needs. Choose additional outlets, battery capacity, wattage, and more configurations.'
    },
    {
      icon: '🔧',
      title: 'Repairable',
      description: 'Built with longevity in mind. Replace batteries and components without replacing the entire system.'
    },
    {
      icon: '📈',
      title: 'Expandable',
      description: 'Grow your power capacity. Modular design allows easy addition of battery storage and functionality.'
    }
  ]

  return (
    <>
      <Banner />

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="responsive-container">
            <img src={`${baseUrl}images/balcony.png`} alt="Generator front view" className="responsive-image" />
            <div className="responsive-text">
              <h3>Why Choose Solar Generators?</h3>
              <p>
                Solar generators are portable power systems that convert sunlight into electricity, using solar
                panels to capture energy and store it in rechargeable batteries. Unlike traditional fuel-based
                generators, they produce clean energy without emissions, making them eco-friendly and quiet.
              </p>
              <p>
                Ideal for camping, emergencies, or as backup power, solar generators are easy to transport and can power
                various devices, from phones and laptops to small appliances. Their efficiency and sustainability
                make them an excellent choice for reducing dependence on fossil fuels and promoting renewable
                energy solutions.
              </p>
              <Link to="/solar" className="cta-button">
                View Our Generator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
