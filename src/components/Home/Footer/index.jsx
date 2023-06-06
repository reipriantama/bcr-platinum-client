import React from 'react'
import '../Footer/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="footer-one">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                <div className="footer-one">binarcarrental@gmail.com</div>
                <div className="footer-one">081-233-334-808</div>
            </div>
            <div className="col">
                <div className="footer-two">Our Services</div>
                <div className="footer-two">Why Us</div>
                <div className="footer-two">Testimonial</div>
                <div className="footer-two">FAQ</div>
            
            </div>
            <div className="col icon">
                <div className="footer-one">Connect With Us</div>
                <div className="social-icons">
                    <ul className="social">
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li><FontAwesomeIcon icon={faTwitch} /></li>
                    </ul>
                </div>
                </div>
            <div className="col">
                <div className="footer-one">Copyright Binar 2022</div>
                <div className="blue-box"></div>
                </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer