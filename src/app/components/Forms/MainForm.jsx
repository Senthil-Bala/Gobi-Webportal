import React, { useEffect, useState } from "react";
import Form from "./Form";
import FormDesktop from "./FormDesktop";

function Main() {
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
        <Form />
      ) : (
        // Render desktop version if window width is 768px or greater
        <FormDesktop />
      )}
    </div>
  );
}

export default Main;
