import React from 'react'
import '../styles/checksupplychain.css'

const CheckSupplyChain = () => {
  return (
    <div className='checkSupplyChain'>
      <h3>Supply Chain</h3>
      <div>
        <input type="text" placeholder='Enter product id'/>
        <button>+</button>
      </div>
    </div>
  )
}

export default CheckSupplyChain