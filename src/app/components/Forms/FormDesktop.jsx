import React from 'react';
// import "./Form.css";
import Image from 'next/image';

function FormDesktop() {
  return (
    <div className='container ' style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom:"95px"
    }}>

      <div className='d-flex flex-column justify-content-center align-items-center' data-aos="slide-up">
        <Image src="/form.png" width={180} height={180} />
        <p style={{
          fontFamily: 'Saira',
          fontSize: '19px',
          fontWeight: 300,
          lineHeight: '34px',
          letterSpacing: '0em',
          textAlign: 'center',
          width: "494px",
        }}>
          Join our newsletter for the latest updates, local news, and special offers. Be a part of our community-led journey to make local living better for everyone
        </p>
      </div>

      <div data-aos="slide-up"className='d-flex flex-column justify-content-center align-items-center' style={{
        width: "534px",
        height: "290px",
        borderRadius: "10px",
        background: "rgba(254, 248, 248, 1)",
      }}>
        <p style={{
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          fontSize: '28px',
          fontWeight: 'bolder',
          lineHeight: '39px',
          letterSpacing: '0em',
          textAlign: 'center',
          color: 'rgba(241, 43, 42, 1)',
        }}>
          Stay in our Loop
        </p>
        <input type="text" name="" className='inputs' placeholder='Enter Email' />
        <p style={{
          fontSize: '10px',
        }}>
          (You will get an email with the latest updates and features)
        </p>
        <button className='inputs'>Get Connect</button>
      </div>
    </div>
  );
}

export default FormDesktop;
