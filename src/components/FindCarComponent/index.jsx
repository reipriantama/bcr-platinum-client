import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import CarCard from '../CarCard';
import './index.css'


function FindCarComponent() {
//     note
// option -> value sebagai marking agar nnti pengelolaan datanya mudah
// onchange untuk mendeteksi interaksi dengan user apa yang user input, pakai arrowfunction

// e punya property target yang merupakan inputan, value adalah hasil dari inputan dari input form kita, untuk yang option kita letak di select agar bisa dibaca valuenya

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [data, setData] = useState([]);

    const getData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}`;
        axios.get(api).then(
            (res) => setData(res.data.cars))
            .catch((err) => console.log(err));
    
    };
    console.log(data);

    useEffect(() => {
        getData();
    }, []);

    const onSubmit = (e) => {
        // function untuk tidak melakukan reload, untuk nnti pengelolaan data pada saat hit API
        e.preventDefault();
    }
    const navigate = useNavigate();

    const goToSearch = (id) => 
        navigate(`/result/${id}`)
        
  return (
    <>
    <div className="container form">
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
            <div className="col">
            <label>Nama Mobil</label>
            <input type="string" className="form-control" id="inputEmail4" placeholder="Ketik nama/tipe mobil" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
                <label>Kategori</label>
                    <select id="inputState" className="form-select" onChange={(e) => setCategory(e.target.value)}>
                        <option selected value=''>Masukan Kapasitas Mobil</option>
                        <option value='small'>2 - 4 Orang</option>
                        <option value='medium'>4 - 6 Orang</option>
                        <option value='large'>6 - 8 Orang</option>
                    </select>
            </div>
            <div className="col">
                <label>Harga</label>
                <select id="inputState" className="form-select" onChange={(e) => setPrice(e.target.value)}>
                        <option selected value=''>Masukan Harga Sewa per Hari</option>
                        <option value='1'>&lt; Rp. 400.000</option>
                        <option value='2'>Rp. 400.000 - Rp. 600.000</option>
                        <option value='3'>&gt; Rp. 600.000</option>
                    </select>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <label>Status</label>
                        <select id="inputState" className="form-select" onChange={(e) => setStatus(e.target.value)}>
                        <option selected value=''>Pilih Status</option>
                        <option value='true'>Disewakan</option>
                        <option value='false'>Tidak Disewa</option>
                    </select>
                    </div>
                    <div className="col">
                    <label></label>
                    <button className="btn btn-success" onClick={getData}>Cari Mobil</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        <div className="row result">
        {data.length ? 
        data.map((item) => (
            <div className="col car">
                <CarCard carname={item.name} carcategory={item.category} carprice={item.price} carimage={item.image} cardetail={() => goToSearch(item.id)} />
            </div>
        ))
        : null}
        </div>
    </div>
    </>
  )
}

export default FindCarComponent