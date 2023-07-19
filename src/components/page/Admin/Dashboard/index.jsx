import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Toast } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar';
import ModalDelete from '../ModalDelete';
import ItemCarCard from './ItemCarCard';

function DashboardAdmin() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);

  // for modal 
  const [modalId, setModalId] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [showToast, setShowToast] = useState(false);
  

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/admin/v2/car?name=${name}&price=${price}&status=${status}&category=${category}`;
    axios.get(api, {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then(
        (res) => setData(res.data.cars))
        .catch((err) => console.log(err));
};

    useEffect(() => {
      getData()
    }, []);
    console.log(data);

    const navigate = useNavigate();

  const goToEdit = (id) => {
    navigate(`/edit-car/${id}`)
  }

  // for delete button using modal 
  const handleModal = (id) => {
    setIsShown(true);
    setModalId(id)
  }

  const handleClose = () => {
    setIsShown(false);
    setModalId(null)
  }

  const handleDelete = (id) => {
    axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`,
    {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then((res) => {
      setIsShown(true);
      setModalId(null);
      getData();
      setShowToast(true);
    }).catch((err) => console.log(err))
  }

  setTimeout(() => {
    setShowToast(false);
  }, 3000)


  return (
    <div>
      {/* <Sidebar /> */}

      {/* after succesfullydelete */}
      {showToast && (
        <Toast delay={3000} autohide>
          <Toast.Body style={{ background: "green"}}>
            Berhasil Hapus
          </Toast.Body>
        </Toast>
      )}

      {/* //alert for delete */}

      {isShown && modalId !== null && (
        <ModalDelete
        show={isShown}
        handleClose={handleClose}
        modalId={modalId}
        deleteButton={handleDelete}
        />
      )}

      {data.map((item) => (
      <ItemCarCard carname={item.name} carimage={item.image} carcategory={item.category} 
      carprice={item.price} editcarbutton={() => goToEdit(item.id)} 
      deletecarbutton={() => handleModal(item.id)} 
      />
      ))}
      <Link to='/add-car'>
      <button>Add Car</button>
      </Link>
    </div>
  )
}

export default DashboardAdmin