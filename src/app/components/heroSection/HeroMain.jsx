import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import HeroDesktop from "./HeroDesktop";

function MainHero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 768 ? (
        // Render mobile version if window width is less than 768px
        <Hero />
      ) : (
        // Render desktop version if window width is 768px or greater
        <HeroDesktop />
      )}
    </div>
  );
}

export default MainHero;
