import React from 'react'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
// import { } from 'react-router-dom';
import './index.css'





function FindCarComponent() {
//     note
// option -> value sebagai marking agar nnti pengelolaan datanya mudah
// onchange untuk mendeteksi interaksi dengan user apa yang user input, pakai arrowfunction

// e punya property target yang merupakan inputan, value adalah hasil dari inputan dari input form kita, untuk yang option kita letak di select agar bisa dibaca valuenya

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();

    //for redirect with url parameters

    const showData = () => (
        <div>
            <h2>Form Data</h2>
            <p>Nama Mobil: {name}</p>
            <p>Kategori: {category}</p>
            <p>Price: {price}</p>
            <p>Status: {status}</p>
        </div>
    )

    const onSubmit = (e) => {
        // function untuk tidak melakukan reload, untuk nnti pengelolaan data pada saat hit API
        e.preventDefault();
        console.log("form data: ", {
            name, 
            category, 
            price, 
            status
        })
    }

    const navigate = useNavigate();

    const goToSearch = () => 
        navigate({
            pathname: '/result',
            search: `?${createSearchParams({name : name, category : category, price : price, status : status})}`,
        });

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
                        <option value='1'>2 - 4 Orang</option>
                        <option value='2'>4 - 6 Orang</option>
                        <option value='3'>6 - 8 Orang</option>
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
                        <option value='2'>Disewakan</option>
                        <option value='2'>Tidak Disewa</option>
                    </select>
                    </div>
                    <div className="col">
                    <label></label>


                    <button className="btn btn-success" onClick={goToSearch}>Cari Mobil</button>


                    </div>
                </div>
            </div>
        </div>
        </form>
        {showData()}
    </div>
    </>
  )
}

export default FindCarComponent