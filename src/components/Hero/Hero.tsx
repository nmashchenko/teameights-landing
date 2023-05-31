import GradientText from "../Shared/GradientText/GradientText";
import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  GradientTextWrapper,
  HeroWrapper,
  RegularTextWrapper,
  RowWrapper,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <GradientTextWrapper>
        <GradientText
          text="Collaboration Platform For Developers"
          textType="huge"
        />
      </GradientTextWrapper>
      <RegularTextWrapper>
        <HeaderText text="Join our beta test now and unlock a world of opportunities for professional growth, networking, and impactful collaborations." />
      </RegularTextWrapper>
      <RowWrapper>
        <RegularInput placeholder="Input email" />
        <RegularButton text="Join Beta" />
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
