import React from "react";
import "./index.scss";
//import page
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import Third from "./Third";
import Second from "./Second";
import FifthSection from "./FifthSection";
import SixSection from "./SixSection";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
    <div>
      <main>
      <Hero displayButton={"inline"} displayText={"inline"} />
      <Second />
      <Third />
      <Testimonial />
      <FifthSection />
      <SixSection />
      <Footer />
      </main>
    </div>
    </>
  );
}

export default Home;