import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import { FeaturesWrapper, RegularTextWrapper } from "./Features.styles";
import { useState } from "react";
import ToggleButtonComponent from "./ToggleButtonComponent/ToggleButtonComponent";
import FeatureLayout from "@/layout/Feature/Feature";
import { featuresData } from "@/constants/features";
import { Element } from "react-scroll";

const Features = () => {
  const [active, setActive] = useState("Teammates");

  return (
    <Element name="Features">
      <FeaturesWrapper>
        <GradientText text="Features" textType="huge" />
        <RegularTextWrapper>
          <HeaderText text="Our platform provides a space where you can partner with other developers to tackle exciting new projects, develop new skills and build valuable connections in the world of technology. " />
        </RegularTextWrapper>
        <ToggleButtonComponent active={active} setActive={setActive} />
        {active === "Teammates" && (
          <FeatureLayout cardsData={featuresData[0]} />
        )}
        {active === "Teams" && <FeatureLayout cardsData={featuresData[1]} />}
        {active === "Tournaments" && (
          <FeatureLayout cardsData={featuresData[2]} />
        )}
      </FeaturesWrapper>
    </Element>
  );
};

export default Features;
