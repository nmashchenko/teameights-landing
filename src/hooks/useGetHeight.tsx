import { useState, useEffect } from "react";

export const useGetHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const { clientHeight } = document.documentElement;
      setHeight(clientHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
};
