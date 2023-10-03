import React from "react";
import "../Footer/index.scss";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import facebook from "../../../data/icon_facebook.png";
import instagram from "../../../data/icon_instagram.png";
import twitter from "../../../data/icon_twitter.png";
import email from "../../../data/icon_mail.png";
import twitch from "../../../data/icon_twitch.png";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginBottom: 50 }}>
          <div className="col">
            <div className="footer-one">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </div>
            <div className="footer-one">binarcarrental@gmail.com</div>
            <div className="footer-one">081-233-334-808</div>
          </div>
          <div className="col">
            <Nav.Link href="/#ourservices" className="service">
              Our Service
            </Nav.Link>
            <Nav.Link href="/#whyus" className="why">
              Why Us
            </Nav.Link>
            <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="/#faq">FAQ</Nav.Link>
          </div>
          <div className="col icon">
            <div className="footer-one">Connect With Us</div>
            <div className="social-icons">
              <img src={facebook} className="img-fluid" />
              <img src={instagram} className="img-fluid" />
              <img src={twitter} className="img-fluid" />
              <img src={email} className="img-fluid" />
              <img src={twitch} className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="footer-one">Copyright Binar 2022</div>
            <div className="blue-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
