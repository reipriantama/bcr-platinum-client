import React from 'react'
import TestiOne from '../img/testi/testi_one.png'
import StarRating from '../img/Icons/Rate.png'
import './index.css'

function Testimonial() {
  return (
    <>
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
                      <div className="col-10 testimonial-slide">
                        
                        <div className="starating"><img src={StarRating} alt="Star Rating" /></div>
                        <div className="text-testi-slide">“Lorem ipsum dolor sit amet, consectetur adipiscing 
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
    </>
  )
}

export default Testimonial