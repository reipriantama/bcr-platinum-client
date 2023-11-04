import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import copypaste from "../../../../../img/copypaste.png";
import style from "./index.module.css";


const Transfer = () => {
    const newOrder = JSON.parse(sessionStorage.getItem("newOrder"));
    const [selectedBank] = useState(Number(sessionStorage.getItem("selectedBank")));
    let [totalPrice, setTotalPrice] = useState(newOrder.total_price);
    let [formattedTotalPrice, setFormattedTotalPrice] = useState(null);
    let [theBank, setTheBank] = useState(null);
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const textInputRef = useRef();
    const textInputRef2 = useRef();


    const copyText = () => {
        const text = textInputRef.current.textContent;
        navigator.clipboard.writeText(text)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000); // Pop-up "Copied!" akan hilang setelah 2 detik
          })
          .catch((err) => {
            console.error('Something went wrong when copying to clipboard', err);
          });
      };

      const copyText2 = () => {
        const text = textInputRef2.current.textContent;
        navigator.clipboard.writeText(text)
          .then(() => {
            setIsCopied2(true);
            setTimeout(() => {
              setIsCopied2(false);
            }, 2000); // Pop-up "Copied!" akan hilang setelah 2 detik
          })
          .catch((err) => {
            console.error('Something went wrong when copying to clipboard', err);
          });
      };

    useEffect(() => {
       switch(selectedBank) {
            case 1:
                setTheBank("BCA");
                break;
            case 2:
                setTheBank("BNI");
                break;
            case 3:
                setTheBank("Mandiri");
                break;
            default:
                setTheBank(null);
       }

       if(totalPrice) {
            const formattedPrice = new Intl.NumberFormat('id-ID').format(parseInt(totalPrice));
            setFormattedTotalPrice(formattedPrice);
       }

       
    }, []);

    return(
        <div className={`d-flex flex-lg-column flex-xl-column card gap-2 col-md-7 ${style.container_style_1}`} >
            <div className={``}>
                <h6>Lakukan Transfer Ke</h6>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row w-100`} style={{marginTop:10}}>
                <div className={``}>
                    <span className={`ps-3 pe-3 ${style.btn_style_1}`}>{theBank}</span>
                </div>
                <div className={`d-flex flex-lg-column flex-xl-column`} style={{marginTop:-10}}>
                    <div className={``}>
                        <span>{theBank} Transfer</span>
                    </div>
                    <div className={``}>
                        <span>a.n Binar Car Rental</span>
                    </div>
                </div>
            </div>
            <div className={``}>
                <span>Nomor Rekening</span>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row w-100 ${style.item_container_1}`}>
                <div>
                    <span ref={textInputRef} className={``}>12345678</span>
                </div>
                <div className={`d-flex justify-content-end align-items-end w-100`}>
                    <img src={copypaste} style={{cursor: "pointer"}} onClick={copyText}/>
                    {isCopied && <div className={`${style.copy_popup}`}>Copied!</div>}
                </div>
            </div>
            <div className={``}>
                <span>Total Bayar</span>
            </div>
            <div className={`d-flex flex-lg-row flex-xl-row w-100 ${style.item_container_1}`}>
                <div className="w-50">
                    <span ref={textInputRef2} className={`fw-bold`}>Rp. {formattedTotalPrice}</span>
                </div>
                <div className={`d-flex justify-content-end align-items-end w-100`}>
                    <img src={copypaste} style={{cursor: "pointer"}} onClick={copyText2} />
                    {isCopied2 && <div className={`${style.copy_popup2}`}>Copied!</div>}
                </div>
            </div>
            
        </div>
    );
};

export default Transfer;