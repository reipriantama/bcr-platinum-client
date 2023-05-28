import React from 'react'
import { useState } from 'react'

function Playground() {

  let [count, setCount] = useState(0);
  if (count <= 0) {
    count = 0;
  } 

  return (
    <div>
        <header>
            <h2>Mall Counter</h2>
            <h1>Jumlah Pengunjung: {count}</h1>
            <button onClick={() => setCount(count+1)}>Tambah Pengunjung</button>
            <button onClick={() => setCount(count-1)}>Kurang Pengunjung</button>
        </header>
        <footer>
            Aufa Asensio
        </footer>
    </div>
  )
}

export default Playground