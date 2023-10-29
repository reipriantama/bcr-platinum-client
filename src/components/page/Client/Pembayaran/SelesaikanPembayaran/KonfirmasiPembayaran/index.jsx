import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateKonfirmasi, updateTimerNow } from "../../../../../../store/SlicePembayaran";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";
import { Link } from 'react-router-dom';
// import { set } from "lodash";
import api from "../../../../../../api";
import image1 from "../../../../../img/default_frame.png";




const KonfirmasiPembayaran = () => { 
    const dispatch = useDispatch();

    const newOrder = JSON.parse(sessionStorage.getItem("newOrder"));
    const orderId = parseInt(newOrder.id);

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
    const [fileName, setFileName] = useState("No file chosen");

    const uploadBuktiBayar = async (body) => {
        try {
            const response = await api.uploadImage(orderId, body);

            sessionStorage.setItem("orderConfirmation", JSON.stringify(response.data));
            console.log("hasil PUT", response);
        } catch(error) {
            console.log(error);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append("slip", file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);

            uploadBuktiBayar(formData);
        }
    };


    return(
        <div className={`${confirmState && style.container_display}`}>
            <div className={`d-flex flex-lg-column flex-xl-column card p-4 gap-2 w-100 col ${style.container_size_1}`}>
                <div className={`d-flex flex-lg-row flex-xl-row `}>
                    <div className={`w-100`}>
                        <h6>Konfirmasi Pembayaran</h6>
                    </div>
                    <div className={`d-flex flex-lg-row flex-xl-row w-50 justify-content-end align-items-end`}>
                            <span className={`${style.item_style_1}`}>{minutes}</span>:
                            <span className={`${style.item_style_1}`}>{seconds}</span>
                    </div>
                </div>
                <div className={`d-flex flex-lg-column flex-xl-column gap-3`}>
                    <div className="mb-3">
                        <p>Terima kasih telah melakukan konfirmasi pembayaran.
                            Pembayaranmu akan segera kamu cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi</p>

                    </div>
                    <div>
                        <h6>Upload Bukti Bayar</h6>
                    </div>
                    <div>
                        <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                    </div>
                    <div className={`d-flex flex-lg-column flex-xl-column`}>
                        <div className="image-preview">
                             {image ? (
                            <div className="d-flex flex-lg-column flex-xl-column justify-content-center align-items-center gap-4">
                                <img src={image} alt="Uploaded" style={{maxWidth: "25rem", maxHeight: "25rem"}} />
                                <Link className="w-100" to="/eticket"><button className="w-100 pt-2 pb-2 fw-bold" style={{backgroundColor: "#5CB85F", color: "#FFF", fontSize: "1rem"}}>Konfirmasi</button></Link>
                            </div>
                            
                            ) : (
                            <div className="d-flex flex-lg-column flex-xl-column justify-content-center align-items-center gap-4">
                                <img src={image1} alt="Default" style={{maxWidth: "25rem", maxHeight: "25rem"}} />
                                <label  className={`d-flex w-100 pt-2 pb-2 fw-bold ${style.upload_button}`} style={{backgroundColor: "#5CB85F", color: "#FFF"}} htmlFor="file-upload">
                                Upload Image
                                </label>
                                <input className="" id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                            </div>
                            )}
                        </div>
                    
                    </div>
                </div>
                
               
            </div>
                

        </div>
       

    );
};

export default KonfirmasiPembayaran;







