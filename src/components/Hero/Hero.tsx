import { colors } from "@/constants/colors";
import ContactLink from "../Shared/ContactLink/ContactLink";
import HeaderText from "../Shared/HeaderText/HeaderText";

import {
  AutoTyping,
  GradientTextWrapper,
  HeroWrapper,
  PlatformText,
  RegularTextWrapper,
  RowWrapper,
} from "./Hero.styles";


const Hero = () => {

  return (
    <HeroWrapper>
      <GradientTextWrapper>
        <PlatformText>
          Collaboration Platform For{" "}
          <AutoTyping
            sequence={[
              "Developers",
              2000,
              "Designers",
              2000,
              "Testers",
              2000,
              "QA Engineers",
              2000,
            ]}
            repeat={Infinity}
          />
        </PlatformText>
      </GradientTextWrapper>
      <RegularTextWrapper>
        <HeaderText text="Join our beta test now and unlock a world of opportunities for professional growth, networking, and impactful collaborations." />
      </RegularTextWrapper>
      <RowWrapper>
        <ContactLink href="https://app.teameights.com"  width="100%" text="Join Beta" background={colors.GREEN_NORMAL} />
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
