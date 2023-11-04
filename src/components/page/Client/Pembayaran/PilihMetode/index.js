import { useState } from "react";
import DetailPesanan from "./DetailPesanan";
import PilihBank from "./PilihBank";
import DetailPembayaran from "./DetailPembayaran";
import Hero from '../../../../Home/Hero';
import NavbarComponent from "../../../../NavbarComponent";
import Footer from '../../../../Home/Footer';
import satu from '../../../../../data/Group 16.png';
import dua from '../../../../../data/Group 17.png';
import tiga from '../../../../../data/Group 18.png';
import line from '../../../../../data/Rectangle 36.png';
import back from '../../../../../data/fi_arrow-left.png';
import { Link } from 'react-router-dom';

const Pembayaran = () => {
    let [selectedBank, setSelectedBank] = useState(true);
    let [chosenBank, setChosenBank] = useState(null);
    return(
        <>
        <NavbarComponent />
        <Hero displayButton={"none"} displayText={"none"} padTop={170}/>
        <div className="container" style={{marginTop:-100, marginBottom:200}}>
            <div className="col">
                    <div className="row">
                    <div className="col">
                            <span><Link to="/result" className='col-md-2'><img src={back} style={{marginRight:10}}/></Link>Pembayaran</span>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-md-4">
                                    <span><img src={satu} style={{marginRight:5}}/>Pilih Metode <img src={line} style={{marginLeft:30}}/></span>
                                </div>
                                <div className="col-sm-4">
                                    <span><img src={dua} style={{marginRight:5}}/> Bayar <img src={line} style={{marginLeft:30}}/></span>
                                </div>
                                <div className="col-md-3">
                                    <span><img src={tiga} style={{marginLeft:-40,marginRight:5}}/>Tiket</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <DetailPesanan />
                <div className="row">
                        <PilihBank setSelectedBank={setSelectedBank} setChosenBank={setChosenBank} />
                        <DetailPembayaran selectedBank={selectedBank} chosenBank={chosenBank}/>
                </div>
            </div>
        
        
             <Footer />
        </>
    );
};


export default Pembayaran;