import React from 'react'
import '../styles/navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Vision</a></li>
            <li><a href="">Contact Us</a></li>
            <select id="customerSelect">
              <option value="History">History</option>
              <option value="Check Supplychain">Check Supplychain</option>
            </select>
        </ul>
    </div>
  )
}

export default Navbar