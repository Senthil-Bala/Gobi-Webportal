import React from 'react'
import "./Header.css";
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import "./HeaderDesktop.css"
function HeaderDesktop() {
  return (
    <div className='header-nav'>
      <Image src="/logo.png" width={200} height={60} />
      <p>Home</p>
      <p>Shopping</p>
      <p>Jobs</p>
      <button>Login</button>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        // label="Check this switch"
      />
    </div>
  )
}

export default HeaderDesktop