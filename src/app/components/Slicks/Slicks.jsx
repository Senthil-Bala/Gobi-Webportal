import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Slicks.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function Slicks() {
  return (
    <div className='slick-div'  data-aos="zoom-in">
    <p className='slick-header'>Here from our Community</p>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src='/slick1.png' width={290} height={325} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/slick2.png' width={290} height={325} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/slick3.png' width={290} height={325} />
        </SwiperSlide>
        {/* <SwiperSlide>
        <Image src='/slick4.png' width={290} height={325} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
