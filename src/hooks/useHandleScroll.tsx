import { IconStyle } from "@/components/Shared/Interfaces/iconStyle.interface";
import { NavbarStyle } from "@/components/Shared/Interfaces/navbarStyle.interface";
import { useEffect, useState } from "react";

export const useHandleScroll = ({
  isTargetIcon = false,
}: {
  isTargetIcon?: boolean;
}) => {
  const [style, setStyle] = useState<IconStyle | NavbarStyle>();

  useEffect(() => {
    const handleScroll = () => {
      const wn = window.scrollY;
      if (wn > 20) {
        if (isTargetIcon) {
          setStyle({ display: "block" });
        } else {
          setStyle({
            borderBottom: "thin solid rgba(255, 255, 255, 0.055)",

            transitionDuration: "0.3s",
          });
        }
      } else {
        if (isTargetIcon) {
          setStyle({ display: "none" });
        } else {
          setStyle({
            borderBottom: "thin solid rgba(255, 255, 255, 0)",
            transitionDuration: "0.3s",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return style;
};
