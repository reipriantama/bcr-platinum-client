import { useState } from "react";
import DetailPesanan from "./DetailPesanan";
import PilihBank from "./PilihBank";
import DetailPembayaran from "./DetailPembayaran";

const Pembayaran = () => {
    let [selectedBank, setSelectedBank] = useState(true);
    let [chosenBank, setChosenBank] = useState(null);
    return(
        <>
            <DetailPesanan />
            <PilihBank setSelectedBank={setSelectedBank} setChosenBank={setChosenBank} />
            <DetailPembayaran selectedBank={selectedBank} chosenBank={chosenBank}/>
        </>
    );
};


export default Pembayaran;