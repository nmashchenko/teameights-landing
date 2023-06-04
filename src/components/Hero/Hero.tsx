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
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    toast.promise(
      axios.post(
        "https://teameights-server.herokuapp.com/api/users/beta/sign-up",
        { email }
      ),
      {
        loading: "Loading",
        success: (data) => {
          // Clear the email input field
          setEmail("");
          return "Welcome to Team8s!";
        },
        error: (err) => {
          console.log(err);
          if (err?.response?.status === 400) {
            return `${err.response?.data[0]?.split("-")[1]?.toString()}`;
          } else if (err?.response?.status === 429) {
            return `${err.response?.data?.message?.toString()}`;
          }

          return `Something wrong happened, try again later!`;
        },
      },
      {
        id: "beta/sign-up",
        style: { background: "#2F3239", color: "white" },
        success: {
          duration: 3000,
        },
      }
    );
  };

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
            cursor={true}
            // deletionSpeed={90}
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
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
