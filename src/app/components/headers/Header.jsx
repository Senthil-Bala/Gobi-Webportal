import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import "./Header.css"
import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="md" className="header-mobile px-1">
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-icon'>
        <MdOutlineMenu  />
      </Navbar.Toggle>
      
        <Image src="/logo.png" width={120} height={36} alt="Logo" />
      
      <FaSearch color='inherit' />
      <Navbar.Collapse id="responsive-navbar-nav" className='toggle-icon'>
  <p>Shoppings</p>
  <p>Careers</p>
  <p>Blogs</p>
  <p>About Us</p>
</Navbar.Collapse>

      <button>Login</button>
    </Navbar>
  );
}

export default Header;
