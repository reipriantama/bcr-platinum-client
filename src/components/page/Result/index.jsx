import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

function Result() {

  // useState for put the object into data variable
  const [data, setData] = useState({})
  //using useParams for get the id from the parameter
  const { id } = useParams();

  //fetching API then put the ID so we can get the details
  const getDetailedData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`;
    axios.get(api).then(
        (res) => {
          console.log(res)
          setData(res.data)
        })
        .catch((err) => console.log(err));
  }

  // using useEffect so it can be rendered when the page is loaded
  useEffect(() => {
    getDetailedData();
  }, [])

  return (
    <div>
      <h1>Result of Car</h1>
      <div className="carname">{data?.name}</div>
      <div className="carname">{data?.category}</div>
    </div>
  )
}

export default Result