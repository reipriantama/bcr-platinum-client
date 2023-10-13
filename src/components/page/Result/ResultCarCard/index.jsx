import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import './index.css'
import { DateRangePicker } from 'rsuite';
import { Link } from 'react-router-dom';

function ResultCarCard({idcar, imagecarresult, categorycarresult, carresultname, carresultprice}) {
  const [dates, setDates] = useState([]);

  const handleDateChange = (dateArray) => {
      setDates(dateArray);
      console.log("Mulai:", dateArray[0]);
      console.log("Akhir:", dateArray[1]);
  };
  
  const navigate = useNavigate();

  const goToPembayaran = () => {
    navigate(`/pembayaran/${idcar}`, {state: {dates}});
  };

  return (
    <>
    <div class="card car result">
      <div className="carimage">
      <img src={imagecarresult} class="card-img-top" alt="car" />
      </div>
          <div class="card-body">
            <div className="carname">{carresultname}</div>
            <div className="card-text car-price"><FontAwesomeIcon icon={faUserGroup} style={{color: "#8A8A8A", width: "16px", height:"12px", marginRight: "3px"}} />{categorycarresult}</div>
            <div className="datepicker">
              <span>Tentukan lama sewa mobil (max. 7 hari)</span>
              <DateRangePicker placeholder="Pilih tanggal mulai dan tanggal akhir sewa" className="daterange" ranges={[]} onChange={handleDateChange} showOneCalendar block />
            </div>
            <div className="price-car">
                <div className="amount-price">Total</div>
                <div className="amount-price">Rp. {carresultprice}</div>
            </div>
            <button type="button" class="btn btn-success pembayaran" onClick={() =>{goToPembayaran();}} block>Lanjutkan Pembayaran</button>
          </div>
      </div>
    </>
  )
}

export default ResultCarCard