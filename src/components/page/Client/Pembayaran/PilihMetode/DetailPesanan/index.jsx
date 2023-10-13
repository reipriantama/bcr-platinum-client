import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./index.module.css";

const DetailPesanan = () => {
    const { id } = useParams();

    let [data, setData] = useState(null);
    let [nameCar, setNameCar] = useState(null);
    let [categoryCar, setCategoryCar] = useState(null);

    const location = useLocation();
    const receivedDates = location.state?.dates || [];

    const getDetailedData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
        axios
        .get(api)
        .then((res) => {
            console.log(res);
            console.log("hasil data:", res.data);
            setData(res.data);
            setNameCar(res.data.name);

            let category = res.data.category;

            if(category === "small") {
                setCategoryCar("2 - 4 Orang");
            }
            else if(category === "medium") {
                setCategoryCar("4 - 6 Orang");
            }
            else {
                setCategoryCar("6 - 8 Orang");
            }
        })
        .catch((err) => console.log(err));

   };

   

   useEffect(() => {
        getDetailedData();
   }, [nameCar, categoryCar]);

    return(
        <div className={`d-flex flex-lg-column flex-xl-column card gap-2 ${style.container_size_1} ${style.container_1}`}>
            <div className=""> 
                <h6 className="">Detail Pesananmu</h6>
            </div>
            <div className="d-flex flex-lg-row flex-xl-row fw-bold gap-5 justify-content-start align-items-start">
                <div className={`${style.flex_item_size_1}`}>
                    <p>Nama/Tipe Mobil</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>Kategori</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>Tanggal Mulai Sewa</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>Tanggal Akhir Sewa</p>
                </div>
            </div>
            <div className="d-flex flex-lg-row flex-xl-row gap-5 justify-content-start align-items-start">
                <div className={`${style.flex_item_size_1}`}>
                    <p>{nameCar}</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>{categoryCar}</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>{receivedDates[0].toLocaleDateString('id-ID')}</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>{receivedDates[1].toLocaleDateString('id-ID')}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPesanan;