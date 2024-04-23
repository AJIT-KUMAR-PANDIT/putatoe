import React from 'react'
import StyleCardDisplaySellers from './CardDisplaySellers.module.css'
import loader from '../../../assets/loader.svg'
const icon = 'https://www.freeiconspng.com/thumbs/location-icon-png/red-location-icon-map-png-4.png';

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
          <img src={icon || loader} alt='location' style={{width:'12px', height:'12px'}}/>
          {address}
        </span>
        <span style={{fontSize:'11px'}}>{description}</span>
    </div>
    </>
  )
}

export default CardDisplaySellers;