import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./index.module.css";




const DetailPembayaran = ({selectedBank, chosenBank}) => {
   const [data, setData] = useState({});
   let [itemPrice, setItemPrice] = useState(null);
   let [formattedItemPrice, setFormattedItemPrice] = useState(null);
   let [formattedTotalPrice, setFormattedTotalPrice] = useState(null);
   let [categoryCar, setCategoryCar] = useState(null);
   const { id } = useParams();

   const getDetailedData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
        axios
        .get(api)
        .then((res) => {
            console.log(res);
            console.log("hasil data:", res.data);
            setData(res.data);
            setItemPrice(res.data.price);
            setFormattedItemPrice(itemPrice.toLocaleString('id-ID'));
            setFormattedTotalPrice((countDays(receivedDates[0], receivedDates[1]) * itemPrice).toLocaleString('id-ID'));

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

   const location = useLocation();
   const receivedDates = location.state?.dates || [];

   const countDays = (startDate, endDate) => {
        const oneDayInMs = 24 * 60 * 60 * 1000;
        const differentTime = Math.abs(endDate - startDate);
        return Math.ceil(differentTime/oneDayInMs);
   };

   let [resultDays, setResultDays] = useState(null);
   



   useEffect(() => {
    getDetailedData();
    setResultDays(countDays(receivedDates[0], receivedDates[1]));
   }, [itemPrice, categoryCar]);


   const navigate = useNavigate();

   const goToSelesaikanPembayaran = () => {
        navigate("/selesaikan-pembayaran", {state: {
            chosenBank: chosenBank,
            formattedTotalPrice: formattedTotalPrice
        }});
   };

    return(
        <div className={`d-flex flex-lg-column flex-xl-column card p-4 gap-4 ${style.container_size_1} `}>
            <div className={``}>
                <h6>{data.name}</h6>
            </div>
            <div className={``}>
                <span className={`${style.content_1}`} id="passanger1">{categoryCar}</span>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row ${style.item_space_1}`}>
                <div className={`${style.item_size_1}`}>
                   <span className={`${style.item_style_1}`}>Total</span>
                </div>
                <div className={``}>
                    <span>Rp. {formattedTotalPrice}</span>
                </div>
            </div>
            <div className={`d-flex flex-lg-column flex-xl-column gap-2 ${style.container_style_2}`}>
                <div>
                    <h6>Harga</h6>
                </div>
                <div className={`d-flex flex-lg-row flex-xl-row`}>
                    <div className={`${style.item_size_2}`}>
                        <ul>
                            <li>Sewa Mobil Rp. {formattedItemPrice} x {resultDays} Hari</li>
                        </ul>
                    </div>
                    <div>
                        <span>Rp. {formattedTotalPrice}</span>
                    </div>

                </div>
                
                <div className={``}>
                    <h6>Biaya Lainnya</h6>
                </div>
                <div className={`d-flex flex-lg-row flex-xl-row`}>
                    <div className={`${style.item_size_3}`}>
                        <ul className={`${style.list_style_1}`} style={{listStyleType: "disc"}}>
                            <li>Pajak</li>
                            <li>Biaya Makan Supir</li>
                        </ul>
                    </div>
                    <div className={`${style.item_size_4}`}>
                        <ul >
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
                <div className={`d-flex flex-lg-row flex-xl-row`}>   
                    <div className={``}>
                        <ul>
                            <li>Bensin</li>
                            <li>Tol dan Parkir</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row`}>
                <div className={`fw-bold ${style.item_size_2}`}>
                    <span>Total</span>
                </div>
                <div className={`fw-bold`}>
                    <span>Rp. {formattedTotalPrice}</span>
                </div>
            </div>
            <div className={`w-100 fw-bold`}>
                <button className={`w-100 pt-2 pb-2 ${selectedBank ? style.btn_style_2 : style.btn_style_1}`} style={{backgroundColor: "#5CB85F", color: "#FFF"}} onClick={goToSelesaikanPembayaran} disabled={selectedBank}>Bayar</button>
            </div>
        </div>
    );
};


export default DetailPembayaran;




                // <div className={`accordion`} id="accordionExample">
                //     <div className="accordion-item">
                //         <h2 className="accordion-header">
                //             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                //                 Accordion Item #1
                //             </button>
                //         </h2>
                //         <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                //             <div class="accordion-body">
                //                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                //             </div>
                //         </div>
                //     </div>
                // </div>