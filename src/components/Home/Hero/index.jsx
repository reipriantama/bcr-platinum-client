import React, { useState } from "react";
import MerC from "../../img/img_car.png";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import style from "./index1.module.css";
// import { use } from 'chai';



function Hero({displayButton, displayText, padTop}) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [displayModal, setDisplayModal] = useState(false);

  const navigate = useNavigate();

  const displayMessage = () => {
      setDisplayModal(true);
      setTimeout(() => {
        setDisplayModal(false);
      }, 2500);
  };

  const checkAuthentication = () => {
      if(isAuthenticated) {
          navigate("/find");
      }
      else {
        displayMessage();
      }
  };

  return (
    <>
    {
      displayModal
       &&
      <div className={`${style.modal}`}>
        <div className={`${style.modal_container}`}>
            <span className={`${style.popup}`}>Harap Sign In atau Registrasi terlebih dahulu.</span>
        </div>
     </div>
    }
    
    <section className="block about-block" style={{paddingBottom:2 ,backgroundColor:"#F1F3FF", justifyContent:"center"}}>
    <div className="container">
        <div className="row first" style={{paddingTop: padTop}}>
          <div className="col-sm-6">
            <div className="row">
            <div className="first-tagline" style={{display: displayText}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
            <div className="first-tagline-description" style={{display: displayText}}>Selamat datang di Binar Car Rental. 
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap 
            melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
            <button style={{display: displayButton}} type="button" class="btn btn-success second" onClick={checkAuthentication}>
             Mulai Sewa Mobil</button>
          </div>
          </div>
          <div className="col-sm-6" style={{display: displayText}}>
            <img src={MerC} alt='Car Mantap' className='img-car-merc' />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Hero;