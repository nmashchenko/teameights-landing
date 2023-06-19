import { features } from "@/constants/features";
import {
  ToggleButtonsContainer,
  ToggleButton,
} from "./ToggleButtonComponent.styles";
import { useGetScreenWidth } from "@/hooks/useGetScreenWidth";

const ToggleButtonComponent = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (T: string) => void;
}) => {
  const screenWidth = useGetScreenWidth();

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
          {screenWidth > 767 && feature.name}
        </ToggleButton>
      ))}
    </ToggleButtonsContainer>
  );
};

export default ToggleButtonComponent;
