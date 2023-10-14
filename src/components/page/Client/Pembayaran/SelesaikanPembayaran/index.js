import BatasWaktu from "./BatasWaktu";
import Transfer from "./Transfer";
import KonfirmasiPembayaran from "./KonfirmasiPembayaran";
import Hero from '../../../../Home/Hero';
import NavbarComponent from "../../../../NavbarComponent";
import Footer from '../../../../Home/Footer';

const SelesaikanPembayaran = () => {
    return(
        <>
            <NavbarComponent />
            <Hero displayButton={"none"} displayText={"none"} padTop={70}/>
            <div className="container" style={{marginBottom:200, marginTop:-60}}>
                    <div className="row" style={{marginBottom:30}}>
                        <div className="col">
                            <span>Pembayaran</span>
                            <span>Order ID :</span>
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
                    <div className="row">
                        <BatasWaktu />
                        <KonfirmasiPembayaran />
                    </div>
                <Transfer />
            </div>
            <Footer />
        </>
    );
};


export default SelesaikanPembayaran;
