import React from 'react'
import "../Design/designNavbar/Navbar.css"
import image from '../Assets/Logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={image} alt="unifeed" />
        <ul>
          <li><a>Home</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li className='subscribe'><a>Subscribe</a></li>
        </ul>
    </div>
  )
}

export default Navbar