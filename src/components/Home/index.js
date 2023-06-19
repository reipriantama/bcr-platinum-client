import React from 'react'
import './index.scss'
//import page
import Footer from './Footer'
import Testimonial from './Testimonial'
import Hero from './Hero'
import Third from './Third'
import Second from './Second'
import FifthSection from './FifthSection'
import SixSection from './SixSection'

function Home() {
  return (
    <>
    <div>
      <Hero displayButton={"initial"} />
      <Second />
      <Third />
      <Testimonial />
      <FifthSection />
      <SixSection />
      <Footer />
    </div>
    </>
  )
}

export default Home