import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateKonfirmasi, updateTimerNow } from "../../../../../../store/SlicePembayaran";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";
import { Link } from 'react-router-dom';
import { set } from "lodash";
import api from "../../../../../../api";
import defaultPicture from "../../../../../img/img_car.png";
import "./index1.css";




const KonfirmasiPembayaran = () => { 
    const dispatch = useDispatch();

    const id = parseInt(sessionStorage.getItem("id"));

    const confirm = useSelector((state) => state.storePembayaran.konfirmasi);
    const [confirmState, setConfirmState] = useState(true);
    

    const targetTime = useSelector((state) => state.storePembayaran.timerNow);

    const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

    // const uploadImage = (image) => {

    // };

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
            dispatch(updateTimerNow(0));
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

    const [image, setImage] = useState(null);

    const imageUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await api.uploadImage(id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("puuut res", response);
            
        } catch(error) {
            console.log("puuut error", error)
        }
    };

  // Fungsi untuk menangani event upload gambar
    const handleImageUpload = (e) => {
        const file = e.target.files[0];  // Dapatkan file dari event
        if (file) {
            const reader = new FileReader();  // Buat instance FileReader
            reader.onloadend = () => {
                setImage(reader.result);  // Tetapkan data gambar ke state
            };
            reader.readAsDataURL(file);  // Baca file sebagai Data URL

            imageUpload(file);
        }

    
    };

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
                    <p>Terima kasih......</p>

                </div>
                <div>
                    <h6>Upload Bukti Bayar</h6>
                </div>
                <div>
                    <p>Untuk membantu kamu....</p>
                </div>
                <div>
                    <div className="image-preview">
                        {
                            image ? (
                                <img src={image} alt="Uploaded" />
                            ) : (
                                <img src="/path/to/default-image.png" alt="Default" />
                                )}
                    </div>
                    <div className="d-flex flex-lg-column flex-xl-column justify-content-center align-items-center">
                        {
                            image ? (
                                <Link to="/eticket">
                                    <label htmlFor="file-upload" className="w-100 pt-1 pb-1 d-flex justify-content-center align-items-center" style={{backgroundColor: "#5CB85F", color: "#FFF"}}>
                                        Konfirmasi
                                    </label>
                                </Link>
                            ): (
                                <label htmlFor="file-upload" className="w-100 pt-1 pb-1 d-flex justify-content-center align-items-center" style={{backgroundColor: "#5CB85F", color: "#FFF"}}>
                                    Upload Image
                                </label>
                            
                            )
                        }
                
                        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                    
                    </div>    
                    
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