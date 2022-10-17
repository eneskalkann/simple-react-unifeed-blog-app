import React from 'react'
import "../Design/designNavbar/Navbar.css"
import image from '../Assets/Logo.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';


function Navbar() {

  const navbarRef = useRef();

  const showNavbar = () =>{
    navbarRef.current.classList.toggle("responsive-navbar")
  }

  const navActiveStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid white" : "normal",
      paddingBottom: "22px",
    };
  };

  return (
    <div className='navbar'>
      <img src={image} alt="unifeed" />
      <nav>
        <ul ref={navbarRef}>
          <li className='home-item' style={{navActiveStyle}}><a>Home</a></li>
          <li style={{navActiveStyle}}><a>Features</a></li>
          <li style={{navActiveStyle}}><a>Pricing</a></li>
          <li style={{navActiveStyle}} className='subscribe'><a>Subscribe</a></li>
          <button onClick={showNavbar} className="navbar-btn navbar-btn-close">
            <FaTimes/>
          </button>
        </ul>
        <button onClick={showNavbar} className="navbar-btn navbar-btn-open">
            <FaBars/>
          </button>
      </nav>
    </div>
  )
}

export default Navbar;