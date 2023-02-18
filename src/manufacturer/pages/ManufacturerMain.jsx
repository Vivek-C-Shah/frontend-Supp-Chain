import React from 'react'
import NewProduct from './NewProduct'
import '../styles/manufacturermain.css'
import ProductHistory from '../pages/ProductHistory'

const ManufacturerMain = () => {
  return (
    <div className='manufacturer-main'>
        {/* <NewProduct/> */}
        <ProductHistory/>
    </div>
  )
}

export default ManufacturerMain