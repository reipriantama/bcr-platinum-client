import React from 'react'
import Home from '../Home'
import NavbarComponent from '../NavbarComponent'
import './index.scss'

const Layout = () => {
  return (
    <>
    <div>
      <NavbarComponent />
      <Home />
    </div>
    </>
  )
}

export default Layout