import React from 'react'
import './index.scss'
// import MerC from '../img/img_car.png'


// import component
import FaqAccordion from '../FAQAccordionComponent'

//import page
import Footer from './Footer'
import Testimonial from './Testimonial'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Third from './Third'
import Second from './Second'




function Home() {
  return (
    <>
    <div>
    <Hero />
    <Second />
    <Third />
    <Testimonial />


    {/* start of fifth section */}

      <section id="blue-section">
        <div className="container">
          <div className="row fifth">
            <div className="col fourth">
              <div className="container text-center">
                <div className="blue-container">
                <div className="first-blue-text">Sewa Mobil di (Lokasimu) Sekarang</div>
                <div className="second-blue-text">
                  <div className="text-second"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div>
              </div>
              <Link to="/find">
            <button type="button" class="btn btn-success second">
             Mulai Sewa Mobil</button></Link>
            </div>
          </div>
          </div>
        </div>
    </section>

    {/* end of fifth section */}

    {/* start of sixth section  */}
    <section id="faq-section">
      <div className="container">
        <div className="row sixth">
          <div className="col">
            <div className="faq-highlight">Frequently Asked Question 
            {/* <p className='faq-point'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
            </div>
      
            <div className="faq-point">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
          <div className="col">
            <div className="accordion-group">
            <FaqAccordion AccHeader='Apa saja syarat yang dibutuhkan?' AccBody='Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. In sodales volutpat nisi sit amet faucibus. Proin tellus tellus, volutpat a 
          hendrerit eget, cursus porttitor felis. Donec vulputate tincidunt tellus, nec consequat lectus viverra et. 
          Curabitur consequat gravida odio, id mollis.' />
          <FaqAccordion AccHeader='Berapa hari minimal sewa mobil lepas kunci?' AccBody='Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. In sodales volutpat nisi sit amet faucibus. Proin tellus tellus, volutpat a 
          hendrerit eget, cursus porttitor felis. Donec vulputate tincidunt tellus, nec consequat lectus viverra et. 
          Curabitur consequat gravida odio, id mollis.' />
          <FaqAccordion AccHeader='Berapa hari sebelumnya sabaiknya booking sewa mobil?' AccBody='Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. In sodales volutpat nisi sit amet faucibus. Proin tellus tellus, volutpat a 
          hendrerit eget, cursus porttitor felis. Donec vulputate tincidunt tellus, nec consequat lectus viverra et. 
          Curabitur consequat gravida odio, id mollis.' />
          <FaqAccordion AccHeader='Apakah Ada biaya antar-jemput?' AccBody='Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. In sodales volutpat nisi sit amet faucibus. Proin tellus tellus, volutpat a 
          hendrerit eget, cursus porttitor felis. Donec vulputate tincidunt tellus, nec consequat lectus viverra et. 
          Curabitur consequat gravida odio, id mollis.' />
            </div>
          </div>
        </div>
      </div>

    </section>
    <Footer />
    </div>
    </>
  )
}

export default Home