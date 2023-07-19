import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCar() {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [photo, setPhoto] = useState(null)
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangePrice= (e) => {
    setPrice(e.target.value);
  }

  const handleChangeCategory= (e) => {
    setCategory(e.target.value);
  }

  const handleChangePhoto= (e) => {
    setPhoto(e.target.files[0]);
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('name', name)
    formData.append('price', parseInt(price))
    formData.append('category', category)
    // the api requesting for status, but we set to false, because we post the car that not been rented yet
    formData.append('status', false)
    formData.append('image', photo)

    const config = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }

    // karena kita ngeadd data, jadi kita menggunakan method post dari axios
    const api = "https://api-car-rental.binaracademy.org/admin/car"
    axios.post(api, formData, config
    ).then((res) => console.log(res)).catch((err) => console.log(err));
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000);
  }
  



  return (
    <>
    <div className="container addcar">
      <div className="h3">Add New Car</div>
      <form>
          <div class="form-group row">
            <label for="inputname" class="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword" value={name} onChange={handleChangeName} placeholder="Nama/Tipe Mobil" /> 
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Harga</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword" onChange={handleChangePrice} value={price} placeholder="Password" /> 
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Foto</label>
            <div class="col-sm-10">
              <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleChangePhoto} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputprice" class="col-sm-2 col-form-label">Kategory</label>
            <div class="col-sm-10">
              <select id="inputState" className="form-select" onChange={handleChangeCategory}>
                        <option selected value=''>Pilih Status</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
              </select>
            </div>
          </div>
          <button onClick={handleSubmit} className="btn btn-success">Save</button>
        </form>
    </div>
    </>
  )
}

export default AddCar