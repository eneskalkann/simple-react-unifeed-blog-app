import React from 'react'
import "../Design/designNavbar/Navbar.css"
import image from '../Assets/Logo.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import { NavLink } from "react-router-dom";


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
          <NavLink exact="true" to="/" className='items home-item' style={{navActiveStyle}}>Home</NavLink>
          <NavLink to="/features" className='items' style={{navActiveStyle}}>Features</NavLink>
          <NavLink to="/pricing" className='items' style={{navActiveStyle}}>Pricing</NavLink>
          <NavLink to="/subs" className='items subscribe' style={{navActiveStyle}}>Subscribe</NavLink>
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