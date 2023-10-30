import { useState } from "react";
import DetailPesanan from "./DetailPesanan";
import PilihBank from "./PilihBank";
import DetailPembayaran from "./DetailPembayaran";
import Hero from '../../../../Home/Hero';
import NavbarComponent from "../../../../NavbarComponent";
import Footer from '../../../../Home/Footer';

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
                            {/* <span><img src={back} style={{marginRight:10}}/>Pembayaran</span> */}
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* <span><img src={satu} style={{marginRight:5}}/>Pilih Metode <img src={line} style={{marginLeft:30}}/></span> */}
                                </div>
                                <div className="col-sm-4">
                                    {/* <span><img src={dua} style={{marginRight:5}}/> Bayar <img src={line} style={{marginLeft:30}}/></span> */}
                                </div>
                                <div className="col-md-3">
                                    {/* <span><img src={tiga} style={{marginLeft:-40,marginRight:5}}/>Tiket</span> */}
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