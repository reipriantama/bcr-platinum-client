import React from 'react'
import FindCarComponent from '../FindCarComponent'
import Footer from '../Home/Footer'
import Hero from '../Home/Hero'
import NavbarComponent from '../NavbarComponent'
import './index.css'

function Search() {
  return (
    <>
    <NavbarComponent />
    <Hero displayButton={"none"} displayText={"none"} padTop={200} />
    <FindCarComponent />
    <Footer/>
    </>
  )
}

export default Search