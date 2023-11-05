import ceklis from "../../../../../data/success.png";
import "./index.css";


const Berhasil = () => {
    return(
        <>
        <div className="container">
            <div className='col'>
                <div className='row ceklis'>
                    <div ><img src={ceklis} className='center'></img></div>
                    <span className='textpembayaran' ><b>Pembayaran Berhasil!</b></span>
                    <span className='textpetunjuk' >Tunjukan invoice ini pada petugas BCR di titik temu.</span>
                </div> 
            </div>
        </div>
        </>
    );
};

export default Berhasil;