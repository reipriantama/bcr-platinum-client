import { useState } from "react";
import Hero from '../../../Home/Hero';
import NavbarComponent from "../../../NavbarComponent";
import Footer from '../../../Home/Footer';
import Berhasil from '../eTicket/pembayaranBerhasil'
import Invoice from '../eTicket/invoice';

import check from '../../../../data/Group 13.png';
import back from '../../../../data/fi_arrow-left.png';
import line from '../../../../data/Rectangle 36.png';
import number from '../../../../data/Group 19.png';

import { Link } from 'react-router-dom'


const tiket = () => {
    return(
        <>
        <NavbarComponent />
        <Hero displayButton={"none"} displayText={"none"} padTop={90}/>
        <div className="container" style={{marginTop:-70, marginBottom:200}}>
            <div className="col">
                <div className="row" style={{marginBottom:30}}>
                    <div className="col">
                        <span><Link to="/selesaikan-pembayaran"><img src={back} style={{marginRight:10}}/></Link>Tiket</span>
                        <span style={{marginLeft:30}}>Order ID : xxxxx</span>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-md-4">
                                <span><img src={check} style={{marginRight:5}}/>Pilih Metode <img src={line} style={{marginLeft:30}}/></span>
                            </div>
                            <div className="col-sm-4">
                                <span><img src={check} style={{marginRight:5}}/> Bayar <img src={line} style={{marginLeft:30}}/></span>
                            </div>
                            <div className="col-md-3">
                                <span><img src={number} style={{marginLeft:-40,marginRight:5}}/>Tiket</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Berhasil />
                        <Invoice/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};


export default tiket;