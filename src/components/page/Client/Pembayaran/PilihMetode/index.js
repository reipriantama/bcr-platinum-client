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
                            <span>Pembayaran</span>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <span style={{}}>Pilih Metode</span>
                                </div>
                                <div className="col">
                                    <span style={{}}>Bayar</span>
                                </div>
                                <div className="col">
                                    <span style={{}}>Tiket</span>
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
        </div>
        <Footer />
        </>
    );
};


export default Pembayaran;