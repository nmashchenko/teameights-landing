import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  ButtonsWrapper,
  GetInTouchWrapper,
  ImagesWrapper,
  MemberImage,
  RegularTextWrapper,
} from "./GetInTouch.styles";
import RegularButton from "../Shared/RegularButton/RegularButton";
import { contactData } from "@/constants/contact";
import { colors } from "@/constants/colors";
import { Element } from "react-scroll";
import all from "@/assets/Images/Team/All.png";

const GetInTouch = () => {
  return (
    <Element name="Our Team">
      <GetInTouchWrapper>
        <GradientText text="Get In Touch" textType="medium" />
        <RegularTextWrapper>
          <HeaderText text="Our team is made up of talented and dedicated students who are passionate about technology. We are committed to creating a platform that empowers developers to connect, collaborate, and build amazing projects together." />
        </RegularTextWrapper>
        <ImagesWrapper>
          <MemberImage src={all} alt={"all"} />
        </ImagesWrapper>
        <RegularTextWrapper>
          <HeaderText text="We're currently looking for developers and sponsors, who share our vision for the future of the tech industry. If you're interested in joining our team or sponsorship, please contact us to learn more about how you can get involved. " />
        </RegularTextWrapper>
        <ButtonsWrapper>
          {contactData.map((data, index) => (
            <RegularButton
              icon={data.icon}
              text={data.name}
              color={colors.BLACK_BRIGHT}
              background={colors.WHITE}
              key={index}
              width="none"
              height="40px"
            />
          ))}
        </ButtonsWrapper>
      </GetInTouchWrapper>
    </Element>
  );
};

export default GetInTouch;
