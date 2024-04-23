import React from 'react'
import StyleCardDisplayGrocery from './CardDisplayGrocery.module.css'
import loader from '../../../assets/loader.svg'

const CardDisplayGrocery = ({image, name,border, backgroundColor}) => {
  return (
    <>
    <div className={StyleCardDisplayGrocery.card}
    style={{border: `${border}`,  background: `${backgroundColor}`}}
    >
        <span>
            <img src={image||loader} alt="grocery" style={{width: 'auto', height: '111px'}} />
        </span>
        <br/>
        <span className={StyleCardDisplayGrocery.text}>{name}</span>
    </div>
    </>
  )
}

export default CardDisplayGrocery;