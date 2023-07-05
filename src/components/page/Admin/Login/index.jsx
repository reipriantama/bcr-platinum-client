import React from 'react'
import './index.css'
import bgImage from '../../../img/bg-login.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        const api = 'https://api-car-rental.binaracademy.org/customer/auth/login'
        const data = {
          // ini ambil dari handleChange
          email: form.email,
          password: form.password
        }
        console.log(data)
        axios.post(api, data).then((res) => {
            console.log(res.data)
            if (res.status === 201) {
                setSuccess("Berhasil Login")
                setLoad(false)

                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }
        }).catch((err) => {
            setError("Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.")
            setLoad(false)
        })
        console.log(data)
    }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-7">
                <img src={bgImage} alt="bgimage" />
            </div>
            <div className="col-5 form">
                <div className="form-fill">
                    <div className="box-logo" />
                    <p>Welcome, Admin BCR</p>
                    {error && <div class="alert alert-danger" role="alert">{error}</div>}
                    <label forHtml="formGroupExampleInput" className="form-label">Email</label>
                    <input onChange={handleChange} type="email" name='email' className="form-control email" id="formGroupExampleInput" placeholder="Contoh: johndee@gmail.com"></input>
                    <label forHtml="formGroupExampleInput" className="form-label">Password</label>
                    <input onChange={handleChange} name='password' type="password" className="form-control password" id="formGroupExampleInput" placeholder="6+ karakter"></input>
                    <button  type="button" onClick={handleSubmit} className="btn btn-primary">{load ? "Loading" : "Sign In"}</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Login