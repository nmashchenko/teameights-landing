import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  GradientTextWrapper,
  HeroWrapper,
  PlatformText,
  RegularTextWrapper,
  RowWrapper,
} from "./Hero.styles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <HeroWrapper>
      <GradientTextWrapper>
        <PlatformText>
          Collaboration Platform For{" "}
          <TypeAnimation
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
            // deletionSpeed={90}
            cursor={false}
          />
        </PlatformText>
      </GradientTextWrapper>
      <RegularTextWrapper>
        <HeaderText text="Join our beta test now and unlock a world of opportunities for professional growth, networking, and impactful collaborations." />
      </RegularTextWrapper>
      <RowWrapper>
        <RegularInput placeholder="Enter your email" />
        <RegularButton text="Join Beta" />
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
