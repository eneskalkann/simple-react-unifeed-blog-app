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
          <NavLink exact to="/" className='items home-item' style={{navActiveStyle}}><a>Home</a></NavLink>
          <NavLink to="" className='items' style={{navActiveStyle}}><a>Features</a></NavLink>
          <NavLink to="" className='items' style={{navActiveStyle}}><a>Pricing</a></NavLink>
          <NavLink to="/subs" className='items subscribe' style={{navActiveStyle}}><a>Subscribe</a></NavLink>
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