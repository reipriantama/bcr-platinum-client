import BatasWaktu from "./BatasWaktu";
import Transfer from "./Transfer";
import Konfirmasi from "./Konfirmasi";
import KonfirmasiPembayaran from "./KonfirmasiPembayaran";
import Hero from '../../../../Home/Hero';
import NavbarComponent from "../../../../NavbarComponent";
import Footer from '../../../../Home/Footer';
import satup from '../../../../../data/Group 13.png';
import duap from '../../../../../data/Group 20.png';
import tigap from '../../../../../data/Group 18.png';
import linep from '../../../../../data/Rectangle 36.png';
import backp from '../../../../../data/fi_arrow-left.png';
import { useDispatch, useSelector } from "react-redux";
import { updateKonfirmasi } from "../../../../../store/SlicePembayaran";
import { useEffect, useState } from "react";

const SelesaikanPembayaran = () => {
    const status = useSelector((state) => state.storePembayaran.konfirmasi);
    const timerState = useSelector((state) => state.storePembayaran.timerNow);

    const [confirm, setConfirm] = useState(status);

    useEffect(() => {
        console.log("vcvcvc", confirm);

        sessionStorage.setItem("confirm", status);
    }, [status]);

    useEffect(() => {
        sessionStorage.setItem("timerNow", timerState);
    }, [timerState]);

    return(
        <>
            <NavbarComponent />
            <Hero displayButton={"none"} displayText={"none"} padTop={70}/>
            <div className="container" style={{marginBottom:200, marginTop:-60}}>
                    <div className="row" style={{marginBottom:30}}>
                        <div className="col">
                            <span><img src={backp} style={{marginRight:10}}/>Pembayaran</span>
                            <span>Order ID :</span>
                        </div>
                        <div className="col">
                        <div className="row">
                            <div className="col-md-4">
                                <span><img src={satup} style={{marginRight:5}}/>Pilih Metode <img src={linep} style={{marginLeft:30}}/></span>
                            </div>
                            <div className="col-sm-4">
                                <span><img src={duap} style={{marginRight:5}}/> Bayar <img src={linep} style={{marginLeft:30}}/></span>
                            </div>
                            <div className="col-md-3">
                                <span><img src={tigap} style={{marginLeft:-40,marginRight:5}}/>Tiket</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <BatasWaktu />
                        <Konfirmasi />
                       
                    </div>
                    <KonfirmasiPembayaran />
                <Transfer />
            </div>
            <Footer />
        </>
    );
};


export default SelesaikanPembayaran;
