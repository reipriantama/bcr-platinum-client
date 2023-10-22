import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";
import { Link } from 'react-router-dom';

const KonfirmasiPembayaran = () => {
    return(
        <div className={`d-flex flex-lg-column flex-xl-column card p-3 col`}>
            <div className={``} style={{marginBottom:30}}>
                <h6>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h6>
            </div>
            <div className={``}>
                <Link to="/eticket">
                <button className="w-100 pt-1 pb-1 " style={{backgroundColor: "#5CB85F", color: "#FFF"}}>Konfirmasi Pembayaran</button>
                </Link>
            </div>
        </div>
    );
};

export default KonfirmasiPembayaran;