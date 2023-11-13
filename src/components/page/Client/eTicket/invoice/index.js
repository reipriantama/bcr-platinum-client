// import ceklis from '../../../../../data/success.png';
import "./index.css";
import unduh from "../../../../../data/Button_unduh.png";
// import { saveAs } from 'file-saver';
// import { Link } from 'react-router-dom';
// import rectangle from '../../../../../data/pdfviewer.png';
import { useEffect, useState } from "react";

const Invoice = () => {
    const [slip, setSlip] = useState(null);
    const newOrder = JSON.parse(sessionStorage.getItem("orderConfirmation"));

    const downloadFile = (url, filename) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
    

    useEffect(() => {
        setSlip(newOrder.slip);  
        //console.log("link", slip);
    }, [newOrder]);


    return(
        <>
        <div className="container">
                <div className='row invoice'>
                    <div className="card invoice">
                        <div className="d-flex flex-lg-column flex-xl-column card-body invoice">
                            <div className='d-flex flex-lg-row flex-xl-row'>
                                <div className='d-flex w-50 justify-content-start align-items-start'>
                                    <span className="textinvoice fw-bold">Invoice</span>
                                </div>
                                <div className='d-flex w-50 justify-content-end align-items-end'>
                                    <button className={"p-0"} onClick={() => { downloadFile(slip, "Invoice.png");}}>
                                        <img src={unduh} style={{width:80, height:30}}/>
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex w-50 justify-content-start align-items-start' style={{marginTop:10, color:"#787878" }}>*no. invoice</div>
                            <div className="d-flex w-100 justify-content-center align-items-center">
                                <div className="">
                                    <img src={slip} alt="Responsive image" style={{maxWidth: "25rem", maxHeight: "25rem"}}></img>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Invoice;