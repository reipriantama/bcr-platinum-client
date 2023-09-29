import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import api from "../../../../../api"
import HeroImage from "../HeroImage";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./index.module.css";
import logo from "../../../../img/Logo_1.png";



const Form = () => {

    // State untuk handle input email dan password
    let [inputEmail, setInputEmail] = useState("");
    let [inputPassword, setInputPassword] = useState("");

    // State untuk menangkap pesan error
    let [errorMessage, setErrorMessage] = useState("");
    

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    };

    
    const navigateTo = useNavigate();

    const navigateToLandingPage = () => {
        navigateTo("/");
        //console.log("berhasil");
    };



    const loginProcess = async () => {
        try {
            const response = await api.loginAdmin({
                "email": inputEmail,
                "password": inputPassword,
            });

            localStorage.setItem("token", response.data.access_token);
            setErrorMessage("");
            console.log("responsenya: ", response);
            navigateToLandingPage();
        } catch (error) {
            console.log("errornya: ", error);
            if(error.response.data.message === "Email not found.") {
                setErrorMessage("The email you entered is incorrect!");
            }
            else if(error.response.data.message === "Password was Wrong.") {
                setErrorMessage("The password you entered is incorrect!");
            }


        }
    };



    return (
        <div className={`${style.container_size_1} d-flex flex-column flex-lg-row flex-xl-row justify-content-center align-items-center`}>
            <div>
                <HeroImage />
            </div>
            <div className={`d-flex flex-column gap-4 ${style.flex_size_1}`}>
                <div className="d-flex flex-column gap-4">
                    <div>
                        <img src={logo}></img>
                    </div>
                    <div>
                        <h4 className="fw-bold">Welcome Back!</h4>
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
                            <label for="inputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control rounded-1" id="inputEmail1" value={inputEmail} onChange={handleInputEmail} placeholder="Contoh: johndee@gmail.com"></input>
                        </div>
                        <div className="mb-3">
                            <label for="inputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control rounded-1" id="inputPassword1" value={inputPassword} onChange={handleInputPassword} placeholder="6+ karakter"></input>
                        </div>
                        <div className="mt-4 mb-4">
                            <button type="button" className={`${style.font_size_1} btn btn-primary w-100 fw-bold rounded-1`} style={{backgroundColor: "#0D28A6"}} onClick={loginProcess}>Sign In</button>
                        </div>
                    <div className="d-flex justify-content-center align-items-center" >
                            <p className={`${style.font_size_1} fw-bold`}>Don't have an account? <span className="" style={{color: "#0D28A6", borderBottom: "1px solid #0D28A6"}}>Sign Up for free</span></p>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    );
};


export default Form;