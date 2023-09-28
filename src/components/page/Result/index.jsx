import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarComponent from '../../NavbarComponent'
import './index.css'
import ResultCarCard from './ResultCarCard'



function Result() {
  
  // useState for put the object into data variable
  const [data, setData] = useState({})
  //using useParams for get the id from the parameter
  const { id } = useParams();

  //fetching API then put the ID so we can get the details
  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
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
    <>
    <NavbarComponent />
    <div className="container">
        <div className="row result">
          <div className="col-8">
            <div className="colwrapper">
            <div className="point-text">Tentang Paket</div>
            <div className="point-text">Include</div>
            <ul>
              <li className='list-points'>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li className='list-points'>Sudah termasuk bensin selama 12 jam</li>
              <li className='list-points'>Sudah termasuk Tiket Wisata </li>
              <li className='list-points'>Sudah termasuk pajak</li>
            </ul>
            <div className="point-text">Exclude</div>
            <ul>
              <li className='list-points'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className='list-points'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li className='list-points'>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div className="point-text">Include</div>
            <ul>
              <li className='list-points'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className='list-points'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li className='list-points'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className='list-points'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            </ul>
          </div>
          </div>
          <div className="col-4">
          <ResultCarCard carresultname={data?.name} categorycarresult={data?.category} imagecarresult={data?.image} carresultprice={data?.price} />
          </div>
        </div>
      </div>
      </>
  )
}

export default Result