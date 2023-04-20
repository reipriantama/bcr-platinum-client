import React from 'react'
import './index.scss'
// import MerC from '../img/img_car.png'
import serviceBla from '../img/img_service.png'

// import component
import WhyUsCard from '../WhyUsCardComponent'
import FaqAccordion from '../FAQAccordionComponent'

// import icons

import ThumbsIcon from '../img/Icons/icon_thumbs.png'
import TwentyForHour from '../img/Icons/icon_24hrs.png'
import PriceIcon from '../img/Icons/icon_price.png'
import ProfessionalIcon from '../img/Icons/icon_professional.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

//import page
import Footer from '../Footer'
import Testimonial from '../Testimonial'
import Hero from '../Hero'




function Home() {
  return (
    <>
    <div>

    {/* first section */}
    <Hero />

    {/* end of first section */}

    {/* second section */}
    <section id="features">
      <div className="container">
        <div className="row second">
          <div className="col">
          <img src={serviceBla} alt='Feature Ill' className='feature-ill' />
          </div>
          <div className="col" style={{paddingLeft: "100px"}}>
            <div className="second-tagline">
            Best Car Rental for any kind of trip in (Lokasimu)!
            </div>
            <div className="second-tagline-description">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih 
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan 
            terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </div>
          
              <ul className='fa-ul'>
                <li><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Jangka Panjang Bulanan</li>
                <li><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Gratis Antar - Jemput Mobil di Bandara</li>
                <li><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Layanan Airport Transfer / Drop In Out</li>
              </ul>
          
          </div>
        </div>
      </div>
    </section>


    {/* end of second section */}

    {/* start of third section */}

    <section id="why-us">
      <div className="container">
        <div className="row third">
          <div className="tag-why-us">Why Us?</div>
          <div className="why-us-desc">Mengapa harus pilih Binar Car Rental?</div>
          <div className="card-container">
            <div className="container text-center" style={{padding: "0", margin: "0"}}>
              <div className="row">
                <div className="col">
                    <WhyUsCard
                    cardIcon={ThumbsIcon}
                    cardTitle='Mobil Lengkap'
                    cardText='Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={PriceIcon}
                    cardTitle='Harga Murah'
                    cardText='Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={TwentyForHour}
                    cardTitle='Layanan 24 Jam'
                    cardText='Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={ProfessionalIcon}
                    cardTitle='Sopir Profesional'
                    cardText='Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* end of third section */}
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
              <button type="button" class="btn btn-success second">Mulai Sewa Mobil</button>
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


    {/* end of sixth section */}

    {/* start of footer section */}

    <section id='footer'>
      
    </section>
    <Footer />

    </div>
    </>
  )
}

export default Home