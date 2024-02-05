import React from 'react';
import "./Form.css";
import Image from 'next/image';

function Form() {
  return (
    <div className='form-div container py-4' data-aos="flip-right">
        <p className='form-header'>Stay in our Loop</p>
        <Image src="/form.png" width={168} height={168} />
        
        <input type="text" name=""  className='inputs' placeholder='  Enter Email' />
        <p style={{
            fontSize:"10px"
        }}> ( You will get a mail with latest updates and features ) </p>
        <button className='inputs'>Get Connect</button>
    </div>
  )
}

export default Form