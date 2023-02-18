import React from 'react'
import '../styles/product.css'

const Product = (props) => {
  return (
    <>
        <li className='product'>
            <div className="product-logo">{props.logo}</div>
            <div className="product-title">{props.title}</div>
            <div className="product-manufacturer">{props.manufaturer}</div>
            <button className="product-supplychain">{props.icon}</button>
        </li>
    </>
  )
}

export default Product