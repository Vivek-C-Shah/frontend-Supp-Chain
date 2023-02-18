import React from 'react';
import '../styles/customermain.css';
import DisplaySupplyChain from '../pages/DisplaySupplyChain'
import CheckSupplyChain from '../components/CheckSupplyChain';
import Navbar from '../components/Navbar'
const CustomerMain = () => {
  return (
    <>
        {/* <DisplaySupplyChain/> */}
        <Navbar/>
        <CheckSupplyChain/>
    </>
  )
}

export default CustomerMain