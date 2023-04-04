import React from 'react'
import './index.scss'
import MerC from '../img/img_car.png'
import serviceBla from '../img/img_service.png'
import WhyUsCard from '../WhyUsCardComponent'

// import icons

import ThumbsIcon from '../img/Icons/icon_thumbs.png'
import TwentyForHour from '../img/Icons/icon_24hrs.png'
import PriceIcon from '../img/Icons/icon_price.png'
import ProfessionalIcon from '../img/Icons/icon_professional.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

//import testi person 

import TestiOne from '../img/testi/testi_one.png'
// import TestiTwo from '../img/testi/testi_two.png'


function Home() {
  return (
    <>
    <div>

    {/* first section */}

    <section id='hero'>
      <div className="container">
        <div className="row first" >
          <div className="col" >
            <div className="first-tagline">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
            <div className="first-tagline-description">Selamat datang di Binar Car Rental. 
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap 
            melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
            <button type="button" class="btn btn-success first">Mulai Sewa Mobil</button>
          </div>
          <div className="col">
            <img src={MerC} alt='Car Mantap' className='img-car-merc' />
          </div>
        </div>
      </div>
    </section>

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


    {/* start of fourth section */}

    <section id='testiomonial-section'>
      <div className="container">
        <div className="row fourth">

          <div className="testimonial-tagline">Testimonial</div>
          <div className="testimonial-description">Berbagai review positif dari pelanggan kami</div>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="presentation">
                  <div className="container">
                    <div className="row">
                      <div className="col-2 testimonial-slide"><img src={TestiOne} alt="Testi One" /></div>
                      <div className="col-10 testimonial-slide"><div className="text-testi-slide">“Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod”</div>
                        <div className="name-testi">John Dee 32, Bromo</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* end of fourth section */}


    </div>
    </>
  )
}

export default Home