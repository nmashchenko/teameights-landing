import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  WaitingWrapper,
  RegularTextWrapper,
  RowWrapper,
} from "./Waiting.styles";
import GradientText from "../Shared/GradientText/GradientText";
import { Element } from "react-scroll";

const Waiting = () => {
  return (
    <Element name="Help">
      <WaitingWrapper>
        <GradientText text="So what are you waiting for? " textType="huge" />
        <RegularTextWrapper>
          <HeaderText
            text="Sign up today and start exploring all that our platform has to offer!
"
          />
        </RegularTextWrapper>
        <RowWrapper>
          <RegularInput placeholder="Enter your email" />
          <RegularButton text="Join Beta" />
        </RowWrapper>
      </WaitingWrapper>
    </Element>
  );
};

export default Waiting;
