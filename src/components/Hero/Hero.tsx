import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import HeaderText from "../Shared/HeaderText/HeaderText";

import {
  GradientTextWrapper,
  HeroWrapper,
  PlatformText,
  RegularTextWrapper,
  RowWrapper,
  canvasStyles,
} from "./Hero.styles";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useSubmitEmail } from "@/api/hooks/useSubmitEmail";
import ReactCanvasConfetti from "react-canvas-confetti";

const Hero = () => {
  const [email, setEmail] = useState("");

  const { handleSubmit, getInstance } = useSubmitEmail(email, setEmail);

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
          />
        </PlatformText>
      </GradientTextWrapper>
      <RegularTextWrapper>
        <HeaderText text="Join our beta test now and unlock a world of opportunities for professional growth, networking, and impactful collaborations." />
      </RegularTextWrapper>
      <RowWrapper>
        <RegularInput
          placeholder="Enter your email"
          data={email}
          setData={setEmail}
        />
        <RegularButton text="Join Beta" handleClick={handleSubmit} />
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
