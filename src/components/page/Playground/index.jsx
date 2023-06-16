import React from 'react'
import { useState } from 'react';

function Playground() {
  let data = [{
    brand: 'toyota',
    carName: 'agya'
  },
  {
    brand: 'daihatsu',
    carName: 'xenia'
  },
  {
    brand: 'honda',
    carName: 'brio'
  },
]

  const [list, setList] = useState([]);

  const handleGetToyota = () => {
    const newData = data.filter((item) => {
      return item.brand === 'toyota'
    });
    setList(newData);
    console.log(newData);
  }
  return (
    <>
    <div>
      <button onClick={handleGetToyota}>Get Toyota</button>
      {list.length ? 
      list.map((item) =>  (
        <div>
          <h1>{item.brand}</h1>
          <h1>{item.carName}</h1>
          </div>
      ))
        : 
        null}
    </div>
    </>
  )
}

export default Playground