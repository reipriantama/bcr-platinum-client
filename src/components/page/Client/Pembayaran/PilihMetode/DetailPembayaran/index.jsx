import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalPrice } from "../../../../../../store/SlicePembayaran";
import { updateKonfirmasi } from "../../../../../../store/SlicePembayaran";
import { format, add } from "date-fns";
import { id as localeID } from "date-fns/locale";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./index.module.css";



const DetailPembayaran = () => {
   const [data, setData] = useState({});
   let [itemPrice, setItemPrice] = useState(null);
   let [formattedItemPrice, setFormattedItemPrice] = useState(null);
   let [totalPrice, setTotalPrice] = useState(null);
   let [formattedTotalPrice, setFormattedTotalPrice] = useState(null);
   let [categoryCar, setCategoryCar] = useState(null);
   const { id } = useParams();
   const selectedBank = useSelector((state) => state.storePembayaran.selectedBank);

   sessionStorage.setItem("carID", id);


   let [startDateRent] = useState(sessionStorage.getItem("startDate"));
   let [endDateRent] = useState(sessionStorage.getItem("endDate"));
  
   
   const dispatch = useDispatch();
   dispatch(updateTotalPrice(formattedTotalPrice));


   const getDetailedData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
        axios
        .get(api)
        .then((res) => {
            setData(res.data);
            setItemPrice(res.data.price);
            

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

   const getDetailedOrder = async () => {
        try {
            const detailedOrder = await JSON.parse(sessionStorage.getItem("newOrder"));
            setTotalPrice(detailedOrder.total_price);
        
        }catch(error) {
            // eslint-disable-next-line no-console
            console.log("otalprice", error);
        }
        
   };

   useEffect(() => {
    getDetailedOrder();
   });


   const location = useLocation();
  

   const countDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const range = end.getTime() - start.getTime();
        const realRange = range / (1000 * 3600 * 24);
        
        return realRange;
   };

   let [resultDays, setResultDays] = useState(null);
   
   useEffect(() => {
    
   }, []);


   useEffect(() => {
    getDetailedData();
    
    setResultDays(countDays(startDateRent, endDateRent));
   }, [itemPrice, categoryCar]);

   useEffect(() => {
        if(totalPrice) {
            setFormattedTotalPrice(totalPrice.toLocaleString("id-ID"));
        }
        
        if(itemPrice) {
            setFormattedItemPrice(itemPrice.toLocaleString("id-ID"));
        }
        

   }, [totalPrice, itemPrice]);


   const deadlineTime = () => {
        const now = new Date();
        const tomorrow = add(now, {days: 1});
        const formattedTime = format(tomorrow, "EEEE, d MMMM yyyy 'jam' HH:mm 'WIB'", { locale: localeID });
        sessionStorage.setItem("tomorrow", tomorrow);
        sessionStorage.setItem("deadlineTime", formattedTime);
   };

   const setConfirmation = () => {
        // sessionStorage.setItem("confirm", true);
        dispatch(updateKonfirmasi(true));
   };

   const navigate = useNavigate();

   const goToSelesaikanPembayaran = () => {
        navigate("/selesaikan-pembayaran");
   };

    return(
        <div className={"d-flex flex-lg-column flex-xl-column card p-4 gap-4 col"}>
            <div className={""}>
                <h6>{data.name}</h6>
            </div>
            <div className={""}>
                <span className={`${style.content_1}`} id="passanger1">{categoryCar}</span>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row ${style.item_space_1}`}>
                <div className={`${style.item_size_1}`}>
                   <span className={`${style.item_style_1}`}>Total</span>
                </div>
                <div className={"d-flex justify-content-end w-50"}>
                    <span>Rp. {formattedTotalPrice}</span>
                </div>
            </div>
            <div className={`d-flex flex-lg-column flex-xl-column gap-2 ${style.container_style_2}`}>
                <div>
                    <h6>Harga</h6>
                </div>
                <div className={"d-flex flex-lg-row flex-xl-row"}>
                    <div className={`${style.item_size_2}`}>
                        <ul>
                            <li>Sewa Mobil Rp. {formattedItemPrice} x {resultDays} Hari</li>
                        </ul>
                    </div>
                    <div>
                        <span>Rp. {formattedTotalPrice}</span>
                    </div>

                </div>
                
                <div className={""}>
                    <h6>Biaya Lainnya</h6>
                </div>
                <div className={"d-flex flex-lg-row flex-xl-row"}>
                    <div className={`${style.item_size_3}`}>
                        <ul className={`${style.list_style_1}`} style={{listStyleType: "disc"}}>
                            <li>Pajak</li>
                            <li>Biaya Makan Supir</li>
                        </ul>
                    </div>
                    <div className={`${style.item_size_4}`}>
                        <ul style={{listStyle: "none", color: "#5CB85F"}}>
                            <li>
                                Termasuk
                            </li>
                            <li>
                                Termasuk
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h6>Belum Termasuk</h6>
                </div>
                <div className={"d-flex flex-lg-row flex-xl-row"}>   
                    <div className={""}>
                        <ul>
                            <li>Bensin</li>
                            <li>Tol dan Parkir</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"d-flex flex-lg-row flex-xl-row"}>
                <div className={`fw-bold ${style.item_size_2}`}>
                    <span>Total</span>
                </div>
                <div className={"fw-bold"}>
                    <span>Rp. {formattedTotalPrice}</span>
                </div>
            </div>
            <div className={"w-100 fw-bold"}>
                <button className={`w-100 pt-2 pb-2 ${selectedBank ? style.btn_style_2 : style.btn_style_1}`} style={{backgroundColor: "#5CB85F", color: "#FFF"}} onClick={() => {goToSelesaikanPembayaran(); deadlineTime(); setConfirmation();}} disabled={selectedBank}>Bayar</button>
            </div>
        </div>
    );
};


export default DetailPembayaran;




            
        