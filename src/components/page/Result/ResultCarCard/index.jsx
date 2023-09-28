import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.css'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-rtl.css';


function ResultCarCard({imagecarresult, categorycarresult, carresultname, carresultprice}) {
  return (
    <>
    <div class="card car">
      <div className="carimage">
      <img src={imagecarresult} class="card-img-top" alt="car" />
      </div>
          <div class="card-body">
            <div className="carname">{carresultname}</div>
            <div className="card-text car-price"><FontAwesomeIcon icon={faUserGroup} style={{color: "#8A8A8A", width: "16px", height:"12px", marginRight: "3px"}} />{categorycarresult}</div>
            <div className="datepicker">
              <span>Tentukan lama sewa mobil (max. 7 hari)</span>
              <DateRangePicker placeholder="Pilih tanggal mulai dan tanggal akhir sewa" className="daterange" showOneCalendar block />
            </div>
            <div className="price-car">
                <div className="amount-price">Total</div>
                <div className="amount-price">Rp. {carresultprice}</div>
            </div>
            <button type="button" class="btn btn-success pembayaran" block>Lanjutkan Pembayaran</button>
          </div>
      </div>
    </>
  )
}

export default ResultCarCard