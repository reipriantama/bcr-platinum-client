import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import style from "./index1.module.css";

function FifthSection() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [displayModal, setDisplayModal] = useState(false);

  const navigate = useNavigate();

  const displayMessage = () => {
      setDisplayModal(true);
      setTimeout(() => {
        setDisplayModal(false);
      }, 2500);
  };

  const checkAuthentication = () => {
      if(isAuthenticated) {
          navigate("/find");
      }
      else {
        displayMessage();
      }
  };


  return (
    <>
    {
      displayModal
       &&
      <div className={`${style.modal}`}>
        <div className={`${style.modal_container}`}>
            <span className={`${style.popup}`}>Harap Sign In atau Registrasi terlebih dahulu.</span>
        </div>
     </div>
    }
    <div className="container">
        <div className="row fifth">
        <div className="col fourth">
            <div className="container text-center">
            <div className="blue-container">
            <div className='row'>
              <div className='col'>
            <div className="first-blue-text">Sewa Mobil di (Lokasimu) Sekarang</div>
            <div className="second-blue-text">
                <div className="text-second"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div>
            </div>
            <Link>
            <button type="button" class="btn btn-success second" onClick={checkAuthentication}>
            Mulai Sewa Mobil</button></Link>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default FifthSection