import ceklis from '../../../../../data/success.png';
import "./index.css";
import unduh from '../../../../../data/Button_unduh.png';
import { Link } from 'react-router-dom';
import rectangle from '../../../../../data/pdfviewer.png';

const invoice = () => {
    return(
        <>
        <div className="container">
                <div className='row invoice'>
                    <div class="card invoice">
                        <div class="card-body invoice">
                            <div className='row'>
                                <div className="textinvoice">Invoice</div>
                                <Link to="/selesaikan-pembayaran" className='col-md-2'>
                                <img src={unduh} style={{width:80, height:30}}/>
                                </Link>
                            </div>
                            <div style={{marginTop:10, color:'#787878' }}>*no. invoice</div>
                            <div class="card pdf">
                                <div class="card-body pdf">
                                    <img src={rectangle} class="img-fluid pdf" alt="Responsive image"></img>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default invoice;