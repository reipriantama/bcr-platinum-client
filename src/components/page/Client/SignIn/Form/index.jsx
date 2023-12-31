import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../../../../api";
import style from "./index.module.css";
import CryptoJS from 'crypto-js';
import logo from "../../../../img/Logo_1.png";
import close from "../../../../img/btn-close.png";
import { Link } from "react-router-dom";

const FormSignIn = () => {
  // State untuk menampung input email dan passwod dari Customer
  let [inputCustomer, setInputCustomer] = useState({
    email: "",
    password: "",
  });

  // State untuk menangkap pesan error
  let [errorMessage, setErrorMessage] = useState("");

  // Fungsi untuk menangkap input email dari Customer
  const handleInputEmail = (e) => {
    setInputCustomer({ ...inputCustomer, email: e.target.value.trim() });
  };

  // Fungsi untuk menangkap input password dari Customer
  const handleInputPassword = (e) => {
    setInputCustomer({ ...inputCustomer, password: e.target.value.trim() });
  };

  const navigateTo = useNavigate();

  // Fungsi untuk melakukan navigasi ke Landing Page
  const navigateToLandingPage = () => {
    navigateTo("/");
    //console.log("berhasil");
  };

  const secretKey = '123az2278';

  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  };

  // Fungsi untuk menjalankan proses Sign in
  const signInProcess = async () => {
    try {
      const response = await api.loginAdmin({
        email: inputCustomer.email,
        password: inputCustomer.password,
      }); 
      console.log("hasil enkripsi:", response.data.access_token);
      localStorage.setItem("token", encryptData(response.data.access_token));
      setErrorMessage("");

      // Navigasi ke halaman Landing Page
      navigateToLandingPage();
    } catch (error) {
      if (error.response.data.message === "Email not found.") {
        setErrorMessage("Email tidak ditemukan.");
      } else if (error.response.data.message === "Password was Wrong.") {
        setErrorMessage("Password salah.");
      }
    }
  };

  const navigateToSignUpPage = () => {
    navigateTo("/sign-up");
  };

  return (
    <div
      className={`${style.container_size_1} ${style.flex_gap_1}  d-flex flex-column flex-shrink-0  justify-content-center align-items-center`}
    >
      <div className={"d-flex justify-content-end p-3 p-md-4 p-xl-3 w-100"}>
        <Link to="/">
          <img className={`${style.btn_close_size}`} src={close} />
        </Link>
      </div>
      <div
        className={`d-flex flex-column gap-4 ${style.flex_size_1} ${style.flex_position_1}`}
      >
        <div className="d-flex flex-column gap-4">
          <div>
            <img src={logo}></img>
          </div>
          <div>
            <h4 className="fw-bold">Welcome Back!</h4>
          </div>
        </div>
        {errorMessage && (
          <div
            data-testid="alert-signin"
            class="alert alert-danger"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
        <div>
          <form>
            <div className="mb-3">
              <label for="inputEmail1" className="form-label">
                Email
              </label>
              <input
                data-testid="email-input"
                type="email"
                className="form-control rounded-1"
                id="inputEmail1"
                value={inputCustomer.email}
                onChange={handleInputEmail}
                placeholder="Contoh: johndee@gmail.com"
              ></input>
            </div>
            <div className="mb-3">
              <label for="inputPassword1" className="form-label">
                Password
              </label>
              <input
                data-testid="password-input"
                type="password"
                className="form-control rounded-1"
                id="inputPassword1"
                value={inputCustomer.password}
                onChange={handleInputPassword}
                placeholder="6+ karakter"
              ></input>
            </div>
            <div className="mt-4 mb-4">
              <button
                data-testid="signin-input"
                type="button"
                className={`${style.font_size_2} btn btn-primary w-100 fw-bold rounded-1`}
                style={{ backgroundColor: "#0D28A6" }}
                onClick={signInProcess}
              >
                Sign In
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p className={`${style.font_size_1} fw-bold`}>
                Don't have an account?{" "}
                <span
                  className={`${style.btn_style}`}
                  style={{
                    color: "#0D28A6",
                    borderBottom: "1px solid #0D28A6",
                  }}
                  onClick={navigateToSignUpPage}
                >
                  Sign Up for free
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
