import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateKonfirmasi, updateTimerNow } from "../../../../../../store/SlicePembayaran";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const Konfirmasi = () => {
    const dispatch = useDispatch();

    const confirm = useSelector((state) => state.storePembayaran.konfirmasi);
    const [confirmState, setConfirmState] = useState(confirm);

    const setTime = () => {
        //sessionStorage.setItem("timerNow", Date.now().toString());
        const now = new Date();
        const targetTime = new Date(now.getTime() + 10 * 60 * 1000);
        dispatch(updateTimerNow(targetTime));
    };

    const setKonfirmasi = () => {
        //sessionStorage.setItem("confirm", false);
        dispatch(updateKonfirmasi(false));
    };

    useEffect(() => {
        setConfirmState(confirm);
        //console.log("ppppp", confirm);
    }, [confirm]);

    return(
        <div className={`${!confirmState && style.container_display }`}>
            <div className={`d-flex flex-lg-column flex-xl-column card p-4 col ${style.container_size_1}`}>
                <div className={""} style={{marginBottom:30}}>
                    <h6>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h6>
                </div>
                <div className={""}>
                    <button className="w-100 pt-2 pb-2 fw-bold" style={{backgroundColor: "#5CB85F", color: "#FFF", fontSize: "1rem"}} onClick={()=>{setTime(); setKonfirmasi();}}>Konfirmasi Pembayaran</button>
                </div>
            </div>
         </div>
        
    );
};

export default Konfirmasi;