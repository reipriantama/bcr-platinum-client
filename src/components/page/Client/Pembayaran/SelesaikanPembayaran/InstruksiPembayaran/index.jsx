import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.module.css";
import style from "./index.module.css";

const InstruksiPembayaran = () => {
    return(
        <div className='card w-100'>
            
            <div className="container p-4">
            <h6 className='mb-3'>Instruksi Pembayaran</h6>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link instruksi active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">BCA</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link instruksi" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">BNI</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link instruksi" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Mandiri</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul className={`${style.order_style}`} style={{color: "#8A8A8A", marginTop: "25px"}}>
                        <li className={`${style.order_style}`}>Masukan kartu ATM, lalu PIN</li>
                        <li className={`${style.order_style}`}>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Accout"</li>
                        <li className={`${style.order_style}`}>Masukan nomor BCA Virtual Account: 70020+Order ID</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>Contoh:</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                        <li className={`${style.order_style}`} >Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li className={`${style.order_style}`}>Ambil dan simpan bukti transaksi tersebut</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <ul className={`${style.order_style}`} style={{color: "#8A8A8A", marginTop: "25px"}}>
                        <li className={`${style.order_style}`}>Masukan kartu ATM, lalu PIN</li>
                        <li className={`${style.order_style}`}>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BNI Virtual Accout"</li>
                        <li className={`${style.order_style}`}>Masukan nomor BNI Virtual Account: 70020+Order ID</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>Contoh:</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                        <li className={`${style.order_style}`} >Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li className={`${style.order_style}`}>Ambil dan simpan bukti transaksi tersebut</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                     <ul className={`${style.order_style}`} style={{color: "#8A8A8A", marginTop: "25px"}}>
                        <li className={`${style.order_style}`}>Masukan kartu ATM, lalu PIN</li>
                        <li className={`${style.order_style}`}>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek Mandiri Virtual Accout"</li>
                        <li className={`${style.order_style}`}>Masukan nomor Mandiri Virtual Account: 70020+Order ID</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>Contoh:</li>
                        <li className={`${style.order_style}`} style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                        <li className={`${style.order_style}`} >Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li className={`${style.order_style}`}>Ambil dan simpan bukti transaksi tersebut</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
       
    );
};

export default InstruksiPembayaran;