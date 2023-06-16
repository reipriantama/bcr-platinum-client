import React from 'react'

function Cart(props) {
  return (
    <div>
        <p>Ini merek {props.MerkMobil}</p>
        <p>Ini Mobil {props.TypeMobil}</p>
    </div>
  )
}

export default Cart