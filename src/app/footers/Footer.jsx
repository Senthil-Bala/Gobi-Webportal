import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='container-fluid p-4 footer d-flex justify-content-between align-items-center'>
        <div className="quicklinks">
            <h5>Quick Links</h5>
            <p>Shoppings</p>
            <p>Blogs</p>
            <p>Jobs</p>
            <p>About Us</p>
            <p>Careers</p>
        </div>
        <div className="socialMedia">
            <h5>Social Media</h5>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>You tube</p>
            <p>Skype</p>
            
            
        </div>
    </div>
  )
}

export default Footer