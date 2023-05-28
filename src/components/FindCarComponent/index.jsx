import React from 'react'
import { useState } from 'react'
import './index.css'

function FindCarComponent() {

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", {
            name,
            category,
            price,
            status
        })
    }

    const renderedFormData = () => (
        <div>
            <h2>Form Data </h2>
            <div>
                Nama Mobil: {name}
            </div>
            <div>
                Kategori: {category}
            </div>
            <div>
                Harga: {price}
            </div>
            <div>
                Status: {status}
            </div>
        </div>
    )

  return (
    <>
    <div className="container form">
    <div className="line-boxes">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="row boxes">
                <div className="col">
                    <label for="inputState" class="form-label">Nama Mobil</label>
                    <input type="text" class="form-control" placeholder="Ketik nama/tipe mobil" onChange={(e) => setName(e.target.value) } />
                </div>
                <div className="col">
                <label for="inputState" class="form-label">Kategori</label>
                    <select id="inputState" class="form-select" onChange={(e) => setCategory(e.target.value) }>
                        <option value="1" selected>2 - 4 Orang</option>
                        <option value="2">4 - 6 orang</option>
                        <option value="3" >6 - 8 orang</option>
                    </select>
                </div>
                <div className="col">
                <label for="inputState" class="form-label">Harga</label>
                    <select id="inputState" class="form-select" onChange={(e) => setPrice(e.target.value) }>
                        <option value="1" selected> Kurang Dari Rp. 400.000 </option>
                        <option value="2" >Rp. 400.000 - Rp. 600.000</option>
                        <option value="3" >Lebih DariRp. 600.000</option>
                    </select>
                </div>
                <div className="col">
                <label for="inputState" class="form-label">Status</label>
                <div className="col-last">
                <select id="inputState" class="form-select" onChange={(e) => setStatus(e.target.value) }>

                    {/* e is for the event, target for the field that we lock in, value in the things that we fill or select */}
                        <option value="1" selected>Disewa</option>
                        <option value="2" >Tidak Tersedia</option>
                    </select>
                    <button type="submit" class="btn btn-success">Cari</button>
                </div>
                </div>
            </div>
        </form>
        </div>
        {renderedFormData()}
    </div>

    </>
  )
}

export default FindCarComponent