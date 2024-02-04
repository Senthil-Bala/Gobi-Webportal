import Image from 'next/image';
import React from 'react';
import "./HeroDesktop.css";

function HeroDesktop() {
  const commonStyles = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: 'rgba(255, 255, 255, 1)',
  };

  return (
    <div>
        <Image src="/bgdesign.png" width={1763} height={800}  layout='responsive' className='big'/>
        <Image src="/hero-banner.png" width={450} height={480}   className='small'/>
        <div className="contents">
            <p style={{
                ...commonStyles,
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: '63px',
                letterSpacing: '0em',
                textAlign: 'left',
            }}>Connecting Local Talent with  <br />Local Opportunities</p>
            <p style={{
                ...commonStyles,
                fontFamily: 'Saira, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '31px',
                letterSpacing: '0.15em',
                textAlign: 'left',
            }}>Hyper local marketplace & job portal</p>
            <input type="text" name="" id="" style={{
                ...commonStyles,
                position:"relative",
                width: '620px',
                height: '55px',
                borderRadius:"10px",
                border:"none"
            }}/>
            <button className='find-btn' style={{
                color:"#000",
                width:"6rem",
                padding:"5px",
                position:"absolute",
                right:"10px",
                // top:"0%",
                bottom:"35%",
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 1)',
                border:"none",
                // padding:"10px",
                background: 'linear-gradient(0deg, #FFDD55, #FFDD55), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
            }}>Find Now</button>

            <p style={{
                ...commonStyles,
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '26px',
                letterSpacing: '0.14em',
                // textAlign: 'left',
            }}>Search for Products or Jobs you need to get</p>

<div className="small-fonts d-flex justify-content-around mt-5">
                <p>400+ Jobs</p>
                <p>300+ Seekers</p>
                <p>2000+ Products</p>
            </div>
            
        </div>
        
       
    </div>
  );
}

export default HeroDesktop;
