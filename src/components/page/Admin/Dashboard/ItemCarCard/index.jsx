import React from 'react'
import './index.css'

function ItemCarCard({carname, carimage, carprice, carcategory, editcarbutton, deletecarbutton }) {

    return (
      <>
      <div class="card car">
        <div className="carimage">
        <img src={carimage} class="card-img-top" alt="car" />
        </div>
            <div class="card-body">
              <div className="carname">{carname}</div>
              <div className="card-text car-price">Rp. {carprice} / Hari</div>
              <div className="desc">{carcategory}</div>
            </div>
            <div className="button-deled" style={{display: "grid"}}>
            <button onClick={deletecarbutton} >Delete</button>
            <button type="button" onClick={editcarbutton}>Edit</button>
            </div>
        </div>
      </>
    )
  }

export default ItemCarCard