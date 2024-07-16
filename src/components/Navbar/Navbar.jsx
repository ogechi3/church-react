import React from 'react'
import logo from '../../assets/logo.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

import "./Navbar.css";
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu =() =>{
    setShowMenu(!showMenu)
  }
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="nav-logo" />
        <ul
          className="nav-links"
          id={showMenu ? "mobile-navbar" : "hide-mobile-navbar"}
        >
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            {" "}
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/sermons">Sermons</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div onClick={toggleMenu} className='mobile-menu'>
          {showMenu ? (
            <IoIosClose fontSize={27} />
          ) : (
            <GiHamburgerMenu fontSize={27} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar

