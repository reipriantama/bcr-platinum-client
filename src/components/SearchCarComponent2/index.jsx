import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';

function SearchCarComponent() {
    const [selectedCar, setSelectedCar] = useState({
        name: "",
        category: "",
        price: "",
        minPrice: "",
        maxPrice: "",
        status: "",
    });

    const handleSetName = (e) => {
        setSelectedCar({ ...selectedCar, name: e.target.value});
    };

    const handleSetCategory = (e) => {
        setSelectedCar({ ...selectedCar, category: e.target.value});
    };

    const handleSetPrice = (e) => {
        // setSelectedCar({ ...selectedCar, price: e.target.value});
        if(e.target.value === "small") {
            setSelectedCar({ ...selectedCar, price: "small", minPrice: 0, maxPrice: 400000});
        }
        else if(e.target.value === "medium") {
            setSelectedCar({ ...selectedCar,  price: "medium", minPrice: 400000, maxPrice: 600000});
        }
        else if(e.target.value === "large") {
            setSelectedCar({ ...selectedCar,  price: "large", minPrice: 600000, maxPrice: 1000000});
        }
    };

    
    const handleSetStatus = (e) => {
        setSelectedCar({ ...selectedCar, status: e.target.value});
    };

    useEffect(() => {
        sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
    }, [selectedCar]);

    useEffect(() => {
        // getData();
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
        {/* <div className="container"> */}
        <div className="card search2" >
        <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
                <div className="col">
                <label>Nama Mobil</label>
                <input type="string" className="form-control" id="inputEmail4" placeholder="Ketik nama/tipe mobil" onChange={(e) => {handleSetName(e);}} style={{color:'grey'}} disabled/>
                </div>
                <div className="col">
                    <label for="inputCategory">Kategori</label>
                        <select id="inputCategory" className="form-select" onChange={(e) => { handleSetCategory(e); }} style={{color:'grey'}} disabled>
                            <option selected value='default'>Masukan Kapasitas Mobil</option>
                            <option value='small'>2 - 4 Orang</option>
                            <option value='medium'>4 - 6 Orang</option>
                            <option value='large'>6 - 8 Orang</option>
                        </select>
                </div>
                <div className="col">
                    <label for="inputPrice">Harga</label>
                    <select id="inputPrice" className="form-select" onChange={(e) => { handleSetPrice(e); }} style={{color:'grey'}} disabled>
                            <option selected value='default'>Masukan Harga Sewa per Hari</option>
                            <option value="small">&lt; Rp. 400.000</option>
                            <option value="medium">Rp.400.000 - Rp. 600.000</option>
                            <option value="large">&gt; Rp. 600.000</option>
                    </select>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <label for="inputState">Status</label>
                            <select id="inputState" className="form-select" 
                            onChange={(e) => { handleSetStatus(e); }} style={{color:'grey'}} disabled>
                            <option selected value='default'>Pilih Status</option>
                            <option value='true'>Disewakan</option>
                            <option value='false'>Tidak Disewa</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
        {/* </div> */}
        </>
      )
    }
  
  export default SearchCarComponent

