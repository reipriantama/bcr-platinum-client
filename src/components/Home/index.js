import React from 'react'
import './index.scss'
import MerC from '../img/img_car.png'
import serviceBla from '../img/img_service.png'
import CardWhyUs from '../CardWhyUsComponent'

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
          </div>
        </div>
      </div>
    </section>


    {/* end of second section */}

    <section id="why-us">
      <div className="container">
        <div className="row third">
          <div className="tag-why-us">Why Us?</div>
          <div className="why-us-desc">Mengapa harus pilih Binar Car Rental?</div>
          <div className="card-container">
            <div className="container text-center">
              <div className="row">
                    <div className="col">
                    <CardWhyUs />
                    </div>
                    <div className="col">
                    <CardWhyUs />
                    </div>
                    <div className="col">
                    <CardWhyUs />
                    </div>
                    <div className="col">
                    <CardWhyUs />
                    </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    </div>
    </>
  )
}

export default Home