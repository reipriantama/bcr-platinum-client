import React from 'react'
import './index.scss'
import MerC from '../img/mobil_merc.png'
import serviceBla from '../img/img_service.png'

function Home() {
  return (
    <>
    <div className='container pt-5'>
      <div className='container text-center first'>
        <section id='first-section'>

        <div className='row'>
          <div className='col-6 first'>
            <h1 className='first-tagline'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <div className="tagline-description">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </div>
            <button type="button" class="btn btn-success first">Mulai Sewa Mobil</button>
            </div>
          <div className='col-6'>
            <div className="blue-rounded-square">
            <img src={MerC} alt='Mobil Illustration' className='mobil-illustration' />
            </div>
          </div>
        </div>
        </section>

        <section id='second-section'>
            <div className="row second">
              <div className="col-6 third">
                <img src={serviceBla} alt="Service" />
              </div>
              <div className="col-6 fourth">
                <div className="second-tagline">Best Car Rental for any kind of trip in (Lokasimu)!</div>
                <div class="tag-explain">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                 </div>
              </div>

            </div>
        </section>

        <section id='third-section'>
          <div className="container pt-5 third">
            asdsa
            

          </div>





        </section>

      </div>
    </div>
    </>
  )
}

export default Home