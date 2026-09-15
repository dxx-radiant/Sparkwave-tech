import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle('SPARKWAVE')
  return (
    <>
      <Banner />
      <div className="section">
        <div className="responsive-container">
          <img src="/images/generator-front.png" alt="Generator front view" className="responsive-image" />
          <div className="responsive-text">
            <h3>SOLAR GENERATORS</h3>
            <p>
              Solar generators are portable power systems that convert sunlight into electricity, using solar
              panels to capture energy and store it in rechargeable batteries. Unlike traditional fuel-based
              generators, they produce clean energy without emissions, making them eco-friendly and quiet. Ideal
              for camping, emergencies, or as backup power, solar generators are easy to transport and can power
              various devices, from phones and laptops to small appliances. Their efficiency and sustainability
              make them an excellent choice for reducing dependence on fossil fuels and promoting renewable
              energy solutions. <Link to="/solar">See examples</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
