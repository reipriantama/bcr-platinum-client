import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

function EditCar() {
    const [data, setData] = useState({})
    const { id } = useParams();



    const getData = () => {
        const api = `https://api-car-rental.binaracademy.org/admin/car/${id}`;
        axios.get(api, {
          headers: {
            // sesuaikan sama API
              'Content-Type': 'application/x-www-form-urlencoded',
              'access_token': localStorage.getItem('admin_token')
          }
        }).then(
            (res) => 
            // console.log(res)
            setData(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
      getData()
    }, []);
    console.log(data);

    // for editing Data

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [photo, setPhoto] = useState(null)
    const [status, setStatus] = useState(false)
    const navigate = useNavigate();

    // after edit succesfullly
    const [showToast, setShowToast] = useState(false);

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

    const editData = (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('name', name)
      formData.append('price', parseInt(price))
      formData.append('category', category)
      // the api requesting for status, but we set to false, because we post the car that not been rented yet
      formData.append('status', false)
      formData.append('image', photo)
      formData.append('status', status)
      const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'access_token': localStorage.getItem('admin_token')
        }
      }
      const api = `https://api-car-rental.binaracademy.org/admin/car/${id}`
      axios.put(api, formData, config
        )
        .then((res) => {
          console.log(res)
          setShowToast(true)
        })
        .catch((err) => console.log(err));
          setTimeout(() => {
            navigate('/dashboard')
          }, 3000);
      }
      setTimeout(() => {
        setShowToast(false);
      }, 2000)
      
  return (
    <>

    {showToast && (
        <Toast delay={3000} autohide>
          <Toast.Body style={{ background: "green"}}>
            Berhasil Edit
          </Toast.Body>
        </Toast>
      )}
    <div className="container addcar">
      <div className="h3">Edit Car</div>
      <form>
          <div class="form-group row">
            <label for="inputname" class="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
            <div class="col-sm-10">
              <input value={name} onChange={handleChangeName} type="text" class="form-control" id="inputPassword" placeholder={data?.name} /> 
            </div>
          </div>
          <div class="form-group row">
            <label for="inputprice" class="col-sm-2 col-form-label">Harga</label>
            <div class="col-sm-10">
              <input value={price} onChange={handleChangePrice} type="text" class="form-control" id="inputPassword" placeholder={data?.price} /> 
            </div>
          </div>
          <div class="form-group row">
            <label for="inputprice" class="col-sm-2 col-form-label">Foto</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleChangePhoto} class="form-control-file" id="exampleFormControlFile1" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputprice" class="col-sm-2 col-form-label">Kategory</label>
            <div class="col-sm-10">
              <select id="inputState" className="form-select" onChange={handleChangeCategory}>
                        <option selected value=''>Pilih Kategory</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
              </select>
            </div>
          </div>
          <button onClick={editData} className="btn btn-success">Save</button>
        </form>
    </div>
    </>
  )
}

export default EditCar