import React from "react";
// import FindCarComponent from '../../FindCarComponent'
import Footer from "../../Home/Footer";
import Hero from "../../Home/Hero";
import NavbarComponent from "../../NavbarComponent";
import SearchCarComponent from "../../SearchCarComponent";
import "./index.css";


function Search() {
  return (
    <>
    <NavbarComponent />
    <Hero displayButton={"none"} displayText={"inline"}/>
    {/* <FindCarComponent /> */}
    <SearchCarComponent />
    <Footer/>
    </>
  );
}

export default Search;