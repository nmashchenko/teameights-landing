import { features } from "@/constants/features";
import {
  ToggleButtonsContainer,
  ToggleButton,
} from "./ToggleButtonComponent.styles";
import { useEffect, useState } from "react";

const ToggleButtonComponent = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (T: string) => void;
}) => {
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

  return (
    <ToggleButtonsContainer>
      {features.map((feature, index) => (
        <ToggleButton
          key={index}
          active={active === feature.name}
          name={feature.name}
          onClick={() => setActive(feature.name)}
        >
          {feature.icon}
          {screenWidth > 567 && feature.name}
        </ToggleButton>
      ))}
    </ToggleButtonsContainer>
  );
};

export default ToggleButtonComponent;
