import React from 'react'
import FaqAccordion from '../../FAQAccordionComponent'
import './index.css'
import { SixSectionData } from '../../../data/Homepage'

function SixSection() {
  return (
    <>
          <div className="container">
            <div className="row sixth">
                <div className="col">
                     <div className="faq-highlight">Frequently Asked Question </div>
                    <div className="faq-point">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
          <div className="col">
            <div className="accordion-group">
            {SixSectionData.length ? 
            SixSectionData.map((item) => (
                <FaqAccordion AccHeader={item.firstTagline} AccBody={item.secondTagline} />
            ))
            : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SixSection