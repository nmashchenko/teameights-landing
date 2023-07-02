import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import { BenefitsSection, RegularTextWrapper } from "./Benefits.styles";

const Benefits = () => {
  return (
    <BenefitsSection>
      <GradientText text={"Beta Test Benefits"} textType="huge" />
      <RegularTextWrapper>
        <HeaderText text="We invite you to join our beta test. As a valued beta tester, you'll enjoy a range of exclusive benefits that not only enhance your experience during the testing phase but also reward your contribution to our development process." />
      </RegularTextWrapper>
    </BenefitsSection>
  );
};

export default Benefits;
