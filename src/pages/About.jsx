import Banner from '../components/Banner.jsx'
import usePageTitle from '../usePageTitle.js'

export default function About() {
  usePageTitle('SPARKWAVE')
  return (
    <>
      <Banner />
      <div className="section">
        <h3>ABOUT ME</h3>
        <p>
          I've held an electronics degree since the early 90s and have been involved in mechanical engineering
          since 1998. Combining these fields has been an exciting journey. My hobby is exploring high voltage and
          high frequency applications.
        </p>
        <p>
          For the past two years, I've immersed myself in the EV world, building batteries and tackling various
          challenges. With 25+ years of designing whatever was needed, I decided to stretch my wings and see what
          I could do.
        </p>
        <p>
          My primary goal is to educate and help people. Knowledge is the key to proper preparation. I will not be
          offended at all if you just want to learn, every families needs and budgets are different.
        </p>
      </div>
    </>
  )
}
