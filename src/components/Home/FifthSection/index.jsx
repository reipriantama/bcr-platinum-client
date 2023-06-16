import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function FifthSection() {
  return (
    <>
    <div className="container">
        <div className="row fifth">
        <div className="col fourth">
            <div className="container text-center">
            <div className="blue-container">
            <div className="first-blue-text">Sewa Mobil di (Lokasimu) Sekarang</div>
            <div className="second-blue-text">
                <div className="text-second"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div>
            </div>
            <Link to="/find">
        <button type="button" class="btn btn-success second">
            Mulai Sewa Mobil</button></Link>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default FifthSection