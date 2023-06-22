import React from 'react'
import './index.css'

function CarCard({carname, carimage, carprice, cardetail}) {

  return (
    <>
    <div class="card car">
      <div className="carimage">
      <img src={carimage} class="card-img-top" alt="car" />
      </div>
          <div class="card-body">
            <div className="carname">{carname}</div>
            <div className="card-text car-price">Rp. {carprice} / Hari</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          </div>
          <button type="button" class="btn btn-success select-car" onClick={cardetail}>Pilih Mobil</button>
      </div>
    </>
  )
}

export default CarCard