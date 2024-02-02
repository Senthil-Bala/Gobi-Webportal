import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import "./Slicks.css";

const Slicks = () => {
  const imageStyle = {
    boxShadow: "1px 3px 7px rgba(0, 2, 0, 0.1)", // Adjust the box shadow according to your needs
  };

  return (
    <div className="mt-0">
      <p className="community-header">Here from our Community</p>
    <Carousel className="text-center my-5">
      <Carousel.Item interval={1000} className="items">
        <Image src="/slick1.png" width={300} height={464} style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="items">
        <Image src="/slick2.png" width={300} height={464} style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item interval={2600} className="items">
        <Image src="/slick3.png" width={300} height={464} style={imageStyle} />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Slicks;
