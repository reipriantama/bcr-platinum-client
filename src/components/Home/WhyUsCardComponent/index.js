import React from 'react'
// import ThumbsUp from '../img/Icons/icon_thumbs.png'
import './index.scss'

function WhyUsCard({cardIcon, cardTitle, cardText}) {
  return (
    <>
    <div class="card">
        <div class="card-body">
            <img src={cardIcon} alt=".." className='card-icon' />
            <div class="card-title">{cardTitle}</div>
            <div  class="card-text">{cardText}</div>
        </div>
    </div>
    </>
  )
}

export default WhyUsCard