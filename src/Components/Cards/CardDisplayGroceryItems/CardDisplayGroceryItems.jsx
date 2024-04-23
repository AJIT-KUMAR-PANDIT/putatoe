import React from 'react'
import StyleCardDisplayGroceryItems from './CardDisplayGroceryItems.module.css'
import addToCartIcon from '../../../assets/addToCart.svg'
import loader from '../../../assets/loader.svg'

const CardDisplayGroceryItems = ({image, name, price}) => {
  return (
    <>
    <div className={StyleCardDisplayGroceryItems.card}
    style={{border: "2px solid coral",  background: "#ffff"}}
    >
        <span style={{width: '111px', height: '111px', backgroundImage: `url('${image ? image : loader}')` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        </span>
        <br/>
        <span className={StyleCardDisplayGroceryItems.text}>{name}</span>
        <span className={StyleCardDisplayGroceryItems.textPrice}>{price}
        <img src={addToCartIcon} alt="addToCartIcon" style={{width:'51px', height:'51px'}} />
        </span>
    </div>
    </>
  )
}

export default CardDisplayGroceryItems;