import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const InstruksiPembayaran = () => {
    return(
        <div className='card w-100'>
            
            <div className="container p-4">
            <h6 className='mb-3'>Instruksi Pembayaran</h6>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">BCA</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">BNI</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Mandiri</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul style={{color: "#8A8A8A"}}>
                        <li>Masukan kartu ATM, lalu PIN</li>
                        <li>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Accout"</li>
                        <li>Masukan nomor BCA Virtual Account: 70020+Order ID</li>
                        <li style={{listStyle: "none"}}>Contoh:</li>
                        <li style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpan bukti transaksi tersebut</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ul style={{color: "#8A8A8A"}}>
                        <li>Masukan kartu ATM, lalu PIN</li>
                        <li>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Accout"</li>
                        <li>Masukan nomor BCA Virtual Account: 70020+Order ID</li>
                        <li style={{listStyle: "none"}}>Contoh:</li>
                        <li style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpan bukti transaksi tersebut</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <ul style={{color: "#8A8A8A"}}>
                            <li>Masukan kartu ATM, lalu PIN</li>
                            <li>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Accout"</li>
                            <li>Masukan nomor BCA Virtual Account: 70020+Order ID</li>
                            <li style={{listStyle: "none"}}>Contoh:</li>
                            <li style={{listStyle: "none"}}>No. Peserta: 12345678 maka ditulis 7002012345678</li>
                            <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                            <li>Ambil dan simpan bukti transaksi tersebut</li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
       
    );
};

export default InstruksiPembayaran;