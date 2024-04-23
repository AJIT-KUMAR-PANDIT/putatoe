import React from 'react'
import StyleCardDisplaySellers from './CardDisplaySellers.module.css'

const CardDisplaySellers = ({image, sellerName,border, backgroundColor, address,description}) => {
  return (
    <>
    <div className={StyleCardDisplaySellers.card}
    style={{border: `${border}`,  background: `${backgroundColor}`}}
    >
        <span>
            <img src={image} alt="grocery" style={{width: 'auto', height: '71px', borderRadius:`50%`}} />
        </span>
        <br/>
        <span className={StyleCardDisplaySellers.text}>{sellerName}</span>
       
        <span style={{fontSize:'11px'}}>
          <img src='https://www.freeiconspng.com/thumbs/location-icon-png/red-location-icon-map-png-4.png' alt='location' style={{width:'12px', height:'12px'}}/>
          {address}
        </span>
        <span>{description}</span>
    </div>
    </>
  )
}

export default CardDisplaySellers;