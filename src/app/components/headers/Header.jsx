import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import "./Header.css"
import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

function Header() {
  return (
    <Navbar expand="md" className="header-mobile px-1" data-aos="slide-up">
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-icon'>
        <MdOutlineMenu  />
      </Navbar.Toggle>
      
      <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
        <Image src="/logo.png" width={120} height={36} alt="Logo" />
      </Link>
      
      <FaSearch color='inherit' />
      <Navbar.Collapse id="responsive-navbar-nav" className='toggle-icon'>
        <Link href="#" style={{ textDecoration: "none", color: "inherit" }}><p>Home</p></Link>
        <Link href="/shopping" style={{ textDecoration: "none", color: "inherit" }}><p>Shopping</p></Link>
        <Link href="/jobs" style={{ textDecoration: "none", color: "inherit" }}><p>Jobs</p></Link>
      </Navbar.Collapse>

      <button>Login</button>
    </Navbar>
  );
}

export default Header;
