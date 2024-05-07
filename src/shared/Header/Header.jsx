import React from 'react'
import logo from "../../assets/logo/logoFull.webp"
import "../../shared/Header/navbar.scss"
const Header = () => {
  return (
    <nav className='navbar'>
     <img src={logo} alt="" />
     <button>Logout</button>
    </nav>
  )
}

export default Header