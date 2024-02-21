import React from "react";
import HeroJobBanner from "./HeroJobBanner";
import Herotext from "./Herotext";
import Image from "next/image";

function HeroJob() {
  return (
    <div
      className="d-flex justify-content-between "
      style={{
        backgroundImage: 'url("/rectangle.png")',
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center", // Adjust as needed
        width: "100%",
        height: "850px",
        // Adjust as needed
      }}
    >
      <Herotext />
      <HeroJobBanner />
    </div>
  );
}

export default HeroJob;
