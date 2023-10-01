import React from 'react'
import './index.css'
import MerC from '../../img/img_car.png'
import { Link } from 'react-router-dom'


function Hero({displayButton, displayText}) {
  return (
    <>
    <section className="block about-block" style={{paddingBottom:2 ,backgroundColor:'#F1F3FF', justifyContent:'center'}}>
    <div className="container">
        <div className="row first" >
          <div className="col-sm-6">
            <div className="row">
            <div className="first-tagline" style={{visibility: displayText}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
            <div className="first-tagline-description" style={{visibility: displayText}}>Selamat datang di Binar Car Rental. 
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap 
            melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
            <Link to="/find">
            <button style={{visibility : displayButton}} type="button" class="btn btn-success second">
             Mulai Sewa Mobil</button></Link>
          </div>
          </div>
          <div className="col-sm-6" style={{visibility: displayText}}>
            <img src={MerC} alt='Car Mantap' className='img-car-merc' />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Hero