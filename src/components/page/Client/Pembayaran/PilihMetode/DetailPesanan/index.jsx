import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { format, parse } from "date-fns";
import { id as localeID } from "date-fns/locale";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./index.module.css";

const DetailPesanan = () => {
    const { id } = useParams();

    let [nameCar, setNameCar] = useState(null);
    let [categoryCar, setCategoryCar] = useState(null);

    const convertDate = (date) => {
        const dateObject = new Date(date);
        const formattedDate = format(dateObject, "d MMM yyyy", { locale: localeID });
        return formattedDate;
    };

    let [data, setData] = useState(null);
    let [startDateRent, setStartDateRent] = useState(sessionStorage.getItem("startDate"));
    let [endDateRent, setEndDateRent] = useState(sessionStorage.getItem("endDate"));
    let [formattedStartDateRent, setFormattedStartDateRent] = useState(convertDate(startDateRent));
    let [formattedEndDateRent, setFormattedEndDateRent] = useState(convertDate(endDateRent));
   

    // const location = useLocation();
    //const receivedDates = location.state?.dates || [];
    // let receivedDates = useSelector((state) => state.storePembayaran.dateRent);

    const getDetailedData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
        axios
        .get(api)
        .then((res) => {
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
        // eslint-disable-next-line no-console
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
                    <p>{formattedStartDateRent}</p>
                </div>
                <div className={`${style.flex_item_size_1}`}>
                    <p>{formattedEndDateRent}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPesanan;