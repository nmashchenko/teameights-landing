import { useState } from "react";
import ToggleButtonComponent from "./ToggleButtonComponent/ToggleButtonComponent";
import FeatureLayout from "@/layout/Feature/Feature";
import { featuresData } from "@/constants/features";
import SectionLayout from "@/layout/Section/Section";

const Features = () => {
  const [active, setActive] = useState("Teammates");

  return (
    <SectionLayout
      name="Features"
      headerText="Features"
      description="Our platform provides a space where you can partner with other developers to tackle exciting new projects, develop new skills and build valuable connections in the world of technology."
      withDescription={true}
    >
      <ToggleButtonComponent active={active} setActive={setActive} />
      {active === "Teammates" && <FeatureLayout cardsData={featuresData[0]} />}
      {active === "Teams" && <FeatureLayout cardsData={featuresData[1]} />}
      {active === "Tournaments" && (
        <FeatureLayout cardsData={featuresData[2]} />
      )}
    </SectionLayout>
  );
};

export default Features;
