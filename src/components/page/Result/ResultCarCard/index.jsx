import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react'
import './index.css'
import { DateRangePicker } from 'rsuite';
import api from '../../../../api';

function ResultCarCard({idcar, imagecarresult, categorycarresult, carresultname, carresultprice}) {
  const { id } = useParams();
  const [dateOrder, setDateOrder] = useState(null);
  const [canOrder, setCanOrder] = useState(false);


  const countDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const range = end.getTime() - start.getTime();
    const realRange = range / (1000 * 3600 * 24);
    console.log("waktu", realRange);
    return realRange;
};

  const handleDateChange = (dateArray) => {
      if ( countDays(dateArray[0], dateArray[1]) < 8) {
        setDateOrder(dateArray);
        sessionStorage.setItem("startDate", dateArray[0]);
        sessionStorage.setItem("endDate", dateArray[1]);
        setCanOrder(true);
        console.log("Mulai:", dateArray[0]);
        console.log("Akhir:", dateArray[1]);
      }
      else {
        setCanOrder(false);
      }
      
  };

  const createNewOrder = async () => {
    try {
       const response = await api.createOrder({
          "start_rent_at": dateOrder[0],
          "finish_rent_at": dateOrder[1],
          "car_id": parseInt(id)
       });

       sessionStorage.setItem("newOrder", JSON.stringify(response.data));
       console.log("createorder", response);

    } catch(error) {
        console.log("createorder", error);
    }
  };

  const sessionCheckedBank = () => {
    sessionStorage.setItem("selectedBank", 0);
  };
  
  const navigate = useNavigate();

  const goToPembayaran = () => {
    navigate(`/pembayaran/${idcar}`);
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
            {
              canOrder ?
              <button type="button" class="btn btn-success pembayaran" onClick={() =>{createNewOrder(); goToPembayaran(); sessionCheckedBank();}} block>Lanjutkan Pembayaran</button> 
              :
              <button type="button" class="btn btn-success pembayaran" block disabled>Lanjutkan Pembayaran</button> 
            }
            
          </div>
      </div>
    </>
  )
}

export default ResultCarCard