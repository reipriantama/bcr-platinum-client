import { useState} from 'react';
import { useNavigate } from 'react-router';
import api from "../../../../../api"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./index.module.css";
import logo from "../../../../img/Logo_1.png";
import close from "../../../../img/btn-close.png";
import { Link } from 'react-router-dom';


const FormSignUp = () => {

    // State untuk menampilkan pesan error
    let [errorMessage, setErrorMessage] = useState("");

    // State untuk menampung data nama, email dan password yang diinputkan Customer
    let [inputCustomer, setInputCustomer] = useState({
        nama: "",
        email: "",
        password: "",
    });


    // Function untuk menghandle input nama Customer
    const handleInputNama = (e) => {
        setInputCustomer({...inputCustomer, nama: e.target.value.trim()});
    };


    // Function untuk menghandle input email Customer
    const handleInputEmail = (e)  => {
        setInputCustomer({...inputCustomer, email: e.target.value.trim()});
    };

    // Function untuk menghandle input password Customer
    const handleInputPassword = (e)  => {
        setInputCustomer({...inputCustomer, password: e.target.value.trim()});
    };

    const navigateTo = useNavigate();

    // Membuat navigasi ke halaman Sign In
    const navigateToSignInPage = () => {
        navigateTo("/sign-in");
    };


    // Function untuk proses Sign Up
    const signUpProcess = async () => {
        try {
            if(inputCustomer.nama.length < 1) {
                throw new Error("Nama harus diisi.")
            }
            else if(inputCustomer.password.length < 6) {
                throw new Error("Password kurang dari 6 karakter.");
            }
            else {
                setErrorMessage("");

                const response = await api.signUpClient({
                    "email": inputCustomer.email,
                    "password": inputCustomer.password,
                    "role": "Customer"
                });

                console.log("response: ", response);

                // Navigasi ke halaman Sign In
                navigateToSignInPage();
                
            }

        } catch(error) {
            // Mengecek apakah pesan error berasal dari Api
            if(error.message !== "Nama harus diisi." && error.message !== "Password kurang dari 6 karakter.") {
                if(error.response.data) {
                    if(error.response.data.message === "Email Already exists.") {
                        setErrorMessage("Email sudah terdaftar.");
                    }
                }
            }
            else {
                setErrorMessage(error.message);
            }
            
        }
    };

    return(
        <div className={`${style.container_size_1}  d-flex flex-column flex-shrink-0  justify-content-center align-items-center`}>
            <div className={`d-flex justify-content-end p-3 p-md-4 p-xl-3 w-100`}>
                <Link to="/"><img className={``} src={close} alt="close button image" /></Link>
            </div>
            <div className={`${style.flex_size_1} ${style.flex_position_1} d-flex flex-column gap-4 `}>    
                <div className="d-flex flex-column gap-4">
                    <div>
                        <img src={logo}></img>
                    </div>
                    <div>
                        <h4 className="fw-bold">Sign Up</h4>
                    </div>
                </div>
                {
                    errorMessage && 
                    <div class="alert alert-danger" role="alert">
                        {errorMessage}
                    </div> 
                }
                <div>
                    <form>
                        <div className="mb-3">
                            <label for="input-nama" className="form-label">Nama*</label>
                            <input type="text" className="form-control rounded-1" id="input-nama" value={inputCustomer.nama} onChange={handleInputNama} placeholder="Nama Lengkap"></input>
                        </div>
                        <div className="mb-3">
                            <label for="input-email" className="form-label">Email*</label>
                            <input type="email" className="form-control rounded-1" id="input-email" value={inputCustomer.email} onChange={handleInputEmail} placeholder="Contoh: johndee@gmail.com"></input>
                        </div>
                        <div className="mb-3">
                            <label for="input-password" className="form-label">Password*</label>
                            <input type="password" className="form-control rounded-1" id="input-password" value={inputCustomer.password} onChange={handleInputPassword} placeholder="6+ karakter"></input>
                        </div>
                        <div className="mt-4 mb-4">
                            <button type="button" className={` btn btn-primary w-100 fw-bold rounded-1`} style={{backgroundColor: "#0D28A6"}} onClick={signUpProcess}>Sign Up</button>
                        </div>
                    <div className="d-flex justify-content-center align-items-center" >
                            <p className={` fw-bold`}>Already have an account? <Link to="/sign-in"><span className="" style={{color: "#0D28A6", borderBottom: "1px solid #0D28A6"}}>Sign In here</span></Link></p>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    );
};


export default FormSignUp;
