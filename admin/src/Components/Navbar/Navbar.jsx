import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logooo.jpeg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img src={navlogo} className='nav-logo' alt="" />
      <div className='alo' style={{ textAlign: "left", flex: 1 }}>
      <h3 align="left">ALO</h3>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
