import React from 'react'
import '../styles/newproduct.css'

const NewProduct = () => {
  return (
    <form className='new-product'>
        <input type="text" placeholder='Enter product name: '/>
        <input type="text" placeholder='Enter product description: '/>
        <input type="text" placeholder='Enter manufacturing place'/>
        <input type="date" />
        <input type="date" />
        <input type="number" placeholder='Enter product price: '/>
        <input type="text" placeholder='Enter product quantity: '/>
        <input type="submit" className='submit-btn'/>
    </form>
  )
}

export default NewProduct