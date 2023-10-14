import { useState, useEffect } from "react";
import { format, add } from "date-fns";
import { id } from 'date-fns/locale';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const BatasWaktu = () => {
    //Tanggal saat halaman pertama kali dimuat
    const [now] = useState(new Date());
    const [tomorrow] = useState(add(now, {days : 1}));

    const formattedDate = format(tomorrow, "EEEE, d MMMM yyyy 'jam' HH:mm 'WIB'", { locale: id });

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

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className={`d-flex flex-lg-row flex-xl-row card col-md-7 ${style.container_space_1}`}>
            <div className={`d-flex flex-lg-column flex-xl-column`}>
                <div className={``}>
                    <h6>Selesaikan Pembayaran Sebelum</h6>
                </div>
                <div className={``}>
                    <span>{formattedDate}</span>
                </div>
            </div>
            <div className={``}>
                <span className={`${style.item_style_1}`}>{hours}</span>:
                <span className={`${style.item_style_1}`}>{minutes}</span>:
                <span className={`${style.item_style_1}`}>{seconds}</span>
            </div>
        </div>
    );
};

export default BatasWaktu;
