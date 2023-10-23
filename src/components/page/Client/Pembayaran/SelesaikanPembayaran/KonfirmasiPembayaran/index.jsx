import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateKonfirmasi, updateTimerNow } from "../../../../../../store/SlicePembayaran";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";
import { set } from "lodash";




const KonfirmasiPembayaran = () => { 
    const dispatch = useDispatch();

    const confirm = useSelector((state) => state.storePembayaran.konfirmasi);
    const [confirmState, setConfirmState] = useState(true);
    

    const targetTime = useSelector((state) => state.storePembayaran.timerNow);

    const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

    useEffect(() => {
        setConfirmState(confirm);
    }, [confirm]);

    useEffect(() => {
        // Update timer setiap detik
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetTime - now;

          // Jika waktu sudah habis, hentikan interval
          if (distance < 0) {
            clearInterval(interval);
            dispatch(updateKonfirmasi(true));
            setTimeLeft(0);
          } else {
            setTimeLeft(distance);
          }
      }, 1000);

      // Bersihkan interval ketika komponen dilepaskan
      return () => clearInterval(interval);
    }, [targetTime]);

    const formatNumber = (number) => {
        return (number < 10) ? `0${number}` : number;
    };

    const minutes = formatNumber(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatNumber(Math.floor((timeLeft % (1000 * 60)) / 1000));


    return(
        <div className={`${confirmState && style.container_display}`}>
            <div className={`d-flex flex-lg-column flex-xl-column card ${style.container_size_1} ${style.container_display}`}>
                <div className={`d-flex flex-lg-row flex-xl-row card `}>
                    <div>
                        <h6>Konfirmasi Pembayaran</h6>
                    </div>
                    <div>
                        <span className={`${style.item_style_1}`}>{minutes}</span>:
                        <span className={`${style.item_style_1}`}>{seconds}</span>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
       

    );
};

export default KonfirmasiPembayaran;










// const confirm = useSelector((state) => state.storePembayaran.konfirmasi);
// const [confirmState, setConfirmState] = useState(true);
// const startTime1 = useSelector((state) => state.storePembayaran.timerNow );
// const st = new Date(startTime1);
// const INITIAL_DURATION = 10 * 60 * 1000;

// const getRemainingTime = () => {
//     // const startTime = parseInt(sessionStorage.getItem('timerNow'), 10);

//     const startTime = st;
//     if (!startTime) return INITIAL_DURATION;

//     const elapsed = Date.now() - startTime;
//     return INITIAL_DURATION - elapsed;
// };

// const [timeLeft, setTimeLeft] = useState(getRemainingTime);
// const [isTimerStarted, setIsTimerStarted] = useState(timeLeft < INITIAL_DURATION);

// useEffect(() => {
//     //setConfirmState(JSON.parse(sessionStorage.getItem("confirm")));
//     setConfirmState(confirm);
//     console.log("cxxx", st );
//     console.log("ssss", confirm);
// }, [confirm]);

// useEffect(() => {
//     let interval;

//     if (isTimerStarted) {
//         interval = setInterval(() => {
//             setTimeLeft(prevTimeLeft => {
//                 if (prevTimeLeft <= 0) {
//                     clearInterval(interval);
//                     dispatch(updateKonfirmasi(true));
//                     return 0;
//                 }
//                 return prevTimeLeft - 1000;
//             });
//         }, 1000);
//     }

//     return () => clearInterval(interval);
// }, [isTimerStarted]);

// const minutes = Math.floor(timeLeft / (60 * 1000));
// const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);