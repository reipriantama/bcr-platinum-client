import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedBank, updateChosenBankName } from "../../../../../../store/SlicePembayaran";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./index.module.css";


const PilihBank = ({/*setSelectedBank,*/ setChosenBank}) => {
    const dispatch = useDispatch();


    let [bankChecked, setBankChecked] = useState({
        bcaChecked: false,
        bniChecked: false,
        mandiriChecked: false
    });

    const setCheckedBank = (number) => {
        sessionStorage.setItem("selectedBank", number);
    };

    const getCheckedBank = () => {
        const number = Number(sessionStorage.getItem("selectedBank"));

        if(number > 0) {
            if(number == 1) {
                setBankChecked({
                    bankChecked, 
                    bcaChecked: true,
                    bniChecked: false,
                    mandiriChecked: false
                });
            }
            else if(number == 2) {
                setBankChecked({
                    bankChecked, 
                    bcaChecked: false,
                    bniChecked: true,
                    mandiriChecked: false
                });
            }
            else if(number == 3) {
                setBankChecked({
                    bankChecked, 
                    bcaChecked: false,
                    bniChecked: false,
                    mandiriChecked: true
                });
            }

            dispatch(updateSelectedBank(false));
        }

        return;
    };
    
    const handleBCAChecked = () => {
        let updatedBCAChecked = !bankChecked.bcaChecked;

        setBankChecked({
            ...bankChecked, 
            bcaChecked: updatedBCAChecked,
            bniChecked: false,
            mandiriChecked: false
        });

        updatedBCAChecked ? setCheckedBank(1) : setCheckedBank(0);
        //setSelectedBank(!updatedBCAChecked);
        dispatch(updateSelectedBank(!updatedBCAChecked));
        

       
    };

    const handleBNIChecked = () => {
        let updatedBNIChecked = !bankChecked.bniChecked;

        setBankChecked({
            ...bankChecked, 
            bcaChecked: false,
            bniChecked: updatedBNIChecked,
            mandiriChecked: false
        });

        updatedBNIChecked ? setCheckedBank(2) : setCheckedBank(0);

        dispatch(updateSelectedBank(!updatedBNIChecked));
        // setSelectedBank(!updatedBNIChecked);

      
    };

    const handleMandiriChecked = () => {
        let updatedMandiriChecked = !bankChecked.mandiriChecked;

        setBankChecked({
            ...bankChecked, 
            bcaChecked: false,
            bniChecked: false,
            mandiriChecked: updatedMandiriChecked
        });

        updatedMandiriChecked ? setCheckedBank(3) : setCheckedBank(0);

        dispatch(updateSelectedBank(!updatedMandiriChecked));

        //setSelectedBank(!updatedMandiriChecked);

       
    };

    

    useEffect(() => {
        getCheckedBank();

        

       
    }, []);

    // useEffect(() => {
    //     setCheckedBank();
        
    // },[selectedBank]);

    useEffect(() => {
        if(bankChecked.bcaChecked) {
            // setChosenBank(1);
            dispatch(updateChosenBankName(1));
        }
        else if(bankChecked.bniChecked) {
            // setChosenBank(2);
            dispatch(updateChosenBankName(2));
        }
        else if(bankChecked.mandiriChecked) {
            // setChosenBank(3);
            dispatch(updateChosenBankName(3));
        }
    }, [bankChecked]);

   

    return(
        
            <div className={`d-flex flex-lg-column flex-xl-column card gap-4 col-md-7 ${style.container_space_1}`}>
                <div className={""}>
                    <h6>Pilih Bank Transfer</h6>
                </div>
                <div className={"w-100"}>
                    <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                </div>
                <div className={"d-flex flex-lg-column flex-xl-column "}>  
                    <div className={`d-flex flex-lg-row flex-xl-row ps-3 pt-4 pb-4 rounded-3 ${style.container_style_1}`} onClick={() =>{handleBCAChecked();}}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_2 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-center fw-bold ${style.btn_style_1}` }>
                                <span style={{fontSize: "1rem"}}>BCA</span>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_3 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <p style={{fontSize: "1rem"}}>BCA Transfer</p>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_4 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <span className={bankChecked.bcaChecked ?`${style.checked_style_1}`: ""}></span>
                        </div>
                        </div>
                    </div>
                        
                    <div className={`d-flex flex-lg-row flex-xl-row ps-3 pt-4 pb-4 rounded-3 ${style.container_style_1}`} onClick={handleBNIChecked}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_2 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-center fw-bold ${style.btn_style_1}` }>
                                <span style={{fontSize: "1rem"}}>BNI</span>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_3 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <p style={{fontSize: "1rem"}}>BNI Transfer</p>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_4 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <span className={bankChecked.bniChecked ?`${style.checked_style_1}`: ""}></span>
                        </div>
                        </div>
                    </div>
                    <div className={`d-flex flex-lg-row flex-xl-row ps-3 pt-4 pb-4 rounded-3 ${style.container_style_1}`} onClick={handleMandiriChecked}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_2 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-center fw-bold ${style.btn_style_1}` }>
                                <span style={{fontSize: "0.9rem"}}>Mandiri</span>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_3 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <p style={{fontSize: "1rem"}}>Mandiri Transfer</p>
                        </div>
                        </div>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start ${style.container_size_4 }`}>
                        <div className={`d-flex flex-lg-row flex-xl-row justify-content-start fw-bold ${style.btn_style_2}` }>
                                <span className={bankChecked.mandiriChecked ?`${style.checked_style_1}`: ""}></span>
                        </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        
       
    );
};


export default PilihBank;