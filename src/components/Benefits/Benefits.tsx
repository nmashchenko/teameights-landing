import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  BenefitsSection,
  RegularTextWrapper,
  BenefitsWrapper,
  BenefitsItem,
  BenefitsText,
  SupportingTextWrapper,
  MediumGradientText,
} from "./Benefits.styles";
import Image from "next/image";
import Stars from "../../assets/Images/Emojies/Stars.png";

const Benefits = () => {
  return (
    <BenefitsSection>
      <GradientText text={"Beta Test Benefits"} textType="huge" />
      <RegularTextWrapper>
        <HeaderText text="We invite you to join our beta test. As a valued beta tester, you'll enjoy a range of exclusive benefits that not only enhance your experience during the testing phase but also reward your contribution to our development process." />
      </RegularTextWrapper>
      <BenefitsWrapper>
        <BenefitsItem>
          <Image src={Stars} alt="stars" width={36} height={36}></Image>
          <BenefitsText>
            <MediumGradientText>Early Access</MediumGradientText>

            <SupportingTextWrapper>
              You will have the exclusive opportunity to explore and utilize all
              cutting-edge features, functionalities, and tools of our platform
              before it is officially launched to the public.{" "}
            </SupportingTextWrapper>
          </BenefitsText>
        </BenefitsItem>
        <BenefitsItem>
          <Image src={Stars} alt="stars" width={36} height={36}></Image>
          <BenefitsText>
            <MediumGradientText>Free Premium Subscription</MediumGradientText>
            <SupportingTextWrapper>
              As a token of our gratitude for your invaluable participation in
              the beta test, we are thrilled to offer you a complimentary
              premium subscription at the conclusion of the testing phase.{" "}
            </SupportingTextWrapper>
          </BenefitsText>
        </BenefitsItem>
        <BenefitsItem>
          <Image src={Stars} alt="stars" width={36} height={36}></Image>
          <BenefitsText>
            <MediumGradientText>Shape the Future</MediumGradientText>

            <SupportingTextWrapper>
              Your feedback and input will directly influence the development of
              our platform, helping us make it even better to meet your needs
              and expectations.{" "}
            </SupportingTextWrapper>
          </BenefitsText>
        </BenefitsItem>
      </BenefitsWrapper>
    </BenefitsSection>
  );
};

export default Benefits;
