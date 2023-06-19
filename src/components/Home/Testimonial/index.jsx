import React from "react";
// import TestiOne from '../../img/testi/testi_one.png'
import StarRating from '../../img/Icons/Rate.png'
import './index.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//import data
import { TestimonialSectionData } from "../../../data/Homepage";

function Testimonial() {

  return (
    <>
      <div className="container">
        <div className="row fourth">

          <div className="testimonial-tagline">Testimonial</div>
          <div className="testimonial-description">Berbagai review positif dari pelanggan kami</div>
          
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {TestimonialSectionData.length ? 
        TestimonialSectionData.map((item) => (
          <div className="container testimonial">
          <div className="row fourth">
            <div className="col-3">
              <div className="image-testimonial">
              <img src={item.personImage} alt="Testi" className="person-testi" />
              </div>
            </div>
            <div className="col-9">
              <div className="description-tester">
                <div className="starrating">
                  
                </div>
                <div className="description-text">
                {item.descriptionText}
                </div>
                <div className="person-testimoner">
                {item.nametester} {item.agetester}, {item.locationtester}
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
        : null}
          </SwiperSlide>
      </Swiper>
        
          
        </div>
      </div>

    </>
  )
}

export default Testimonial