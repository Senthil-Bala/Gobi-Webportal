import React from 'react'
import Image from "next/image";
import "./Hero.css"
import "./Hero.css"
function Hero() {
  return (
    <div className='hero-div text-center'>
      <Image src="/Frame 35.png" width={360}   height={938}/>
    {/* <Image src="/bg.png" layout='fill' objectFit='fill' className='bg-image'   />
    <Image src="/hero-banner.png" width={250} height={272} className='people'/> */}
  </div>
  )
}

export default Hero