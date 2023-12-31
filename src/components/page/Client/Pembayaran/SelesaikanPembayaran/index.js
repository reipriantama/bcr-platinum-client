import BatasWaktu from "./BatasWaktu";
import Transfer from "./Transfer";
import Konfirmasi from "./Konfirmasi";
import KonfirmasiPembayaran from "./KonfirmasiPembayaran";
import InstruksiPembayaran from "./InstruksiPembayaran";
import Hero from "../../../../Home/Hero";
import NavbarComponent from "../../../../NavbarComponent";
import Footer from "../../../../Home/Footer";
import satup from "../../../../../data/Group 13.png";
import duap from "../../../../../data/Group 20.png";
import tigap from "../../../../../data/Group 18.png";
import linep from "../../../../../data/Rectangle 36.png";
import backp from "../../../../../data/fi_arrow-left.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const SelesaikanPembayaran = () => {
    const status = useSelector((state) => state.storePembayaran.konfirmasi);
    const timerState = useSelector((state) => state.storePembayaran.timerNow);

    const [newOrder, setNewOrder] = useState(JSON.parse(sessionStorage.getItem("newOrder")));

    const [idCar] = useState(sessionStorage.getItem("carID"));

    useEffect(() => {
        sessionStorage.setItem("confirm", status);
    }, [status]);

    useEffect(() => {
        setNewOrder(JSON.parse(sessionStorage.getItem("newOrder")));
    }, []);

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
                            <span><Link to={`/pembayaran/${idCar}`}><img src={backp} style={{marginRight:10, cursor: "pointer"}}/></Link>Pembayaran</span>
                            <span>Order ID : {newOrder.id ? newOrder.id : ""}</span>
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
                    <div className="d-flex flex-lg-row flex-xl-row gap-4" style={{width: "100%"}}>
                        <div className="d-flex flex-lg-column flex-xl-column w-100">
                            <div className="w-100">
                                 <BatasWaktu />
                            </div>
                            <div>
                                <Transfer />
                            </div>
                            <div>
                                <InstruksiPembayaran />
                            </div>
                            
                        </div>
                        <div className="d-flex justify-content-end" style={{width: "70%", maxWidth: "70%"}}>
                            <Konfirmasi />
                            <KonfirmasiPembayaran />
                        </div>
                        
                    </div>
            </div>
            
            <Footer />
        </>
    );
};


export default SelesaikanPembayaran;
