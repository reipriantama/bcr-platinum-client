import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const Transfer = () => {
    const location = useLocation();
    const bankName = useSelector((state) => state.storePembayaran.chosenBankName);
    let [totalPrice, setTotalPrice] = useState(sessionStorage.getItem("totalPrice"));
    let [formattedTotalPrice, setFormattedTotalPrice] = useState(null);
    // const totalPrice = useSelector((state) => state.storePembayaran.totalPrice);
    // const theChosenBank = location.state?.chosenBank || [];
    // const totalPrice = location.state?.formattedTotalPrice || [];
    let [theBank, setTheBank] = useState(null);

    useEffect(() => {
       switch(bankName) {
            case 1:
                setTheBank("BCA");
                break;
            case 2:
                setTheBank("BNI");
                break;
            case 3:
                setTheBank("Mandiri");
                break;
            default:
                setTheBank(null);
       }

       if(totalPrice) {
            const formattedPrice = new Intl.NumberFormat('id-ID').format(parseInt(totalPrice));
            setFormattedTotalPrice(formattedPrice);
       }
       
    }, [bankName, totalPrice]);

    return(
        <div className={`d-flex flex-lg-column flex-xl-column card p-2 gap-2 col-md-7`} style={{marginLeft: -2}}>
            <div className={``}>
                <h6>Lakukan Transfer Ke</h6>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row w-100`} style={{marginTop:10}}>
                <div className={``}>
                    <span className={`ps-3 pe-3 ${style.btn_style_1}`}>{theBank}</span>
                </div>
                <div className={`d-flex flex-lg-column flex-xl-column`} style={{marginTop:-10}}>
                    <div className={``}>
                        <span>{theBank} Transfer</span>
                    </div>
                    <div className={``}>
                        <span>a.n Binar Car Rental</span>
                    </div>
                </div>
            </div>
            <div className={``}>
                <span>Nomor Rekening</span>
            </div>
            <div className={`w-100`}>
                <span className={`w-100 ${style.item_style_1}`}>12345678</span>
            </div>
            <div className={``}>
                <span>Total Bayar</span>
            </div>
            <div className={``}>
                <span>Rp. {formattedTotalPrice}</span>
            </div>

        </div>
    );
};

export default Transfer;