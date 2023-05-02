import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import serviceBla from '../../img/img_service.png'

function Second() {
  return (
    <>
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
            <div>
              <ul className='fa-ul'>
                <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Sewa Mobil Jangka Panjang Bulanan</li>
                <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Gratis Antar - Jemput Mobil di Bandara</li>
                <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Second