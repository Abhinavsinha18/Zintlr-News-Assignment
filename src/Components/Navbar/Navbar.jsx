import React from 'react'
import "./Navbar.css"
import Menu from "../../Images/menu.png"

const Navbar = () => {

    
  return (
    <div className='navbar'>
        <div className='menuIC'>
           <img src={Menu} alt="menu" />
        </div>
        <div className='logoName'>
    <h2>Zintlr News</h2>
        </div>
        <div className='search-icon'>
        <p>🔍</p>
        </div>
    </div>
  )
}

export default Navbar;