import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import serviceBla from "../../img/img_service.png";
import { SecondSection } from "../../../data/Homepage";
import check from "../../../data/checkicon.png";

function Second() {

  return (
    <>
    <div className="container" id='ourservices'>
        <div className="row second">
          <div className="col imageill">
          <img src={serviceBla} alt='Feature Ill' className='feature-ill' />
          </div>
          <div className="col pointssecond">
            <div className="second-tagline">
            Best Car Rental for any kind of trip in (Lokasimu)!
            </div>
            <div className="second-tagline-description">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih 
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan 
            terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </div>
            <div className='list-1'>
              <ul className='fa-ul'>
                {SecondSection.length ? 
                SecondSection.map((item) => (
                  <li className='li-faul'><span className='fa-li'><FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#666100", "--fa-secondary-color": "#666100",}} /></span>{item.point}</li>
                )) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;