import { useState, useEffect } from "react";
import { format, add } from "date-fns";
import { id } from 'date-fns/locale';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const BatasWaktu = () => {
    //Tanggal saat halaman pertama kali dimuat
    const formattedDate = sessionStorage.getItem("deadlineTime");

    // const [now] = useState(new Date());
    const [tomorrow] = useState(new Date(sessionStorage.getItem("tomorrow")));

    //Timer
    const targetTime = tomorrow.getTime();

    // State untuk menyimpan waktu tersisa
    const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

    useEffect(() => {
          // Update timer setiap detik
          const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            // Jika waktu sudah habis, hentikan interval
            if (distance < 0) {
              clearInterval(interval);
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

    const hours = formatNumber(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = formatNumber(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatNumber(Math.floor((timeLeft % (1000 * 60)) / 1000));

    return (
        <div className={`d-flex flex-lg-row flex-xl-row card col-md-7 ${style.container_space_1}`}>
            <div className={`d-flex flex-lg-column flex-xl-column gap-3 justify-content-start w-100`}>
                <div className={``}>
                    <h6>Selesaikan Pembayaran Sebelum</h6>
                </div>
                <div className={``}> 
                    <span>{formattedDate}</span>
                </div>
            </div>
            <div className={`d-flex justify-content-end align-items-center w-100`}>
                <span className={`${style.item_style_1}`}>{hours}</span>
                <span className="ms-1 me-1">:</span>
                <span className={`${style.item_style_1}`}>{minutes}</span>
                <span className="ms-1 me-1">:</span>
                <span className={`${style.item_style_1}`}>{seconds}</span>
            </div>
        </div>
    );
};

export default BatasWaktu;
