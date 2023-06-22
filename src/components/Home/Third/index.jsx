import React from 'react'
import WhyUsCard from '../WhyUsCardComponent'
import './index.css'

//import icon
import { ThirdSection } from '../../../data/Homepage'

function Third() {
  return (
    <>
    <div className="container">
        <div className="row third">
          <div className="tag-why-us">Why Us?</div>
          <div className="why-us-desc">Mengapa harus pilih Binar Car Rental?</div>
          <div className="card-container">
            <div className="container text-center" style={{padding: "0", margin: "0"}}>
              <div className="row">
                {ThirdSection.length ? 
                ThirdSection.map((item) => (
                  <div className="col whyus">
                  <WhyUsCard
                  cardIcon={item.icon}
                  cardTitle={item.HighTagline}
                  cardText={item.SecondTagline}
                  />
                  </div>
                ))
                : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Third