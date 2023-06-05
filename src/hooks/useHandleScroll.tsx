import { useEffect, useState } from "react";

export const useHandleScroll = () => {
  const [navbarStyle, setNavbarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const wn = window.scrollY;
      if (wn > 20) {
        setNavbarStyle({
          borderBottom: "thin solid rgba(255, 255, 255, 0.055)",

          transitionDuration: "0.3s",
        });
      } else {
        setNavbarStyle({
          borderBottom: "thin solid rgba(255, 255, 255, 0)",
          transitionDuration: "0.3s",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return navbarStyle;
};
