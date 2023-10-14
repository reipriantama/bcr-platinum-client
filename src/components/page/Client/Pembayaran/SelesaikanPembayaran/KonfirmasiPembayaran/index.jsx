import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";

const KonfirmasiPembayaran = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <>
            <div className={`d-flex flex-lg-column flex-xl-column card p-3 ${style.container_size_1}`}>
                <div className={``}>
                    <h6>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h6>
                </div>
                <div className={``}>
                    <button className="w-100 pt-1 pb-1 " style={{backgroundColor: "#5CB85F", color: "#FFF"}}>Konfirmasi Pembayaran</button>
                </div>
            </div>
            <div className={`d-flex flex-lg-column flex-xl-column card p-3 ${style.container_size_1}`}>
                <div className={`d-flex flex-lg-row flex-xl-row`}>
                    <div className={``}>
                        <h6>Konfirmasi Pembayaran</h6>
                    </div>
                    <div className={``}>
                        

                    </div>
                </div>
                <div className={``}>
                    <p>
                        Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera
                        kami cek, tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
                    </p>
                    
                </div>
                <div className={``}>
                    <p>UPLOAD BUKTI PEMBAYARAN</p>
                </div>
                <div className={``}>
                    <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                </div>
                <div className={``}>
                    <div style={{ textAlign: 'center' }}>
                           
                        {selectedImage && <img src={selectedImage} alt="Selected Preview" style={{ width: '300px', marginBottom: '10px' }} />}
                        <div>
                            <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} className={`${style.hidden}`} />
                            <label htmlFor="fileInput" className={`${style.file_label}`}>Upload</label>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
       
    );
};

export default KonfirmasiPembayaran;