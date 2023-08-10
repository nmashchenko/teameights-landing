import { TargetAudienceSection } from "./TargetAudience.styles";
import HeaderText from "../Shared/HeaderText/HeaderText";
import GradientText from "@/components/Shared/GradientText/GradientText";
import { RegularTextWrapper } from "./TargetAudience.styles";
import CustomizedAccordions from "../Accordion/Accordion";
import { info } from "@/constants/info";
import { Element } from "react-scroll";

const TargetAudience = () => {
  return (
    <Element name="Target Audience">
      <TargetAudienceSection>
        <GradientText text={"Target Audience"} textType="huge" />
        <RegularTextWrapper>
          <HeaderText text="Our platform caters to a diverse target audience in the tech and development industry, fostering a vibrant community where individuals can network, collaborate, and embark on remarkable projects together." />
        </RegularTextWrapper>
        <CustomizedAccordions
          accordionData={info}
          withIcon={true}
        ></CustomizedAccordions>
      </TargetAudienceSection>
    </Element>
  );
};

export default TargetAudience;
