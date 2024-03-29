import { useEffect, useState } from "react";

export const useGetScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(function onFirstMount() {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Function to update the screen width state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};
