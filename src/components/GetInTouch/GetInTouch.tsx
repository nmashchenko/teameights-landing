import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  ButtonsWrapper,
  ImagesWrapper,
  MemberImage,
  RegularTextWrapper,
} from "./GetInTouch.styles";

import ContactLink from "../Shared/ContactLink/ContactLink";
import { contactData } from "@/constants/contact";
import { colors } from "@/constants/colors";
import all from "@/assets/Images/Team/All.png";
import SectionLayout from "@/layout/Section/Section";

const GetInTouch = () => {
  return (
    <SectionLayout
      name="Our Team"
      headerText="Get In Touch"
      description="Our team is made up of talented and dedicated students who are passionate about technology. We are committed to creating a platform that empowers developers to connect, collaborate, and build amazing projects together."
      withDescription={true}
    >
      <ImagesWrapper>
        <MemberImage src={all} alt={"all"} loading="eager" />
      </ImagesWrapper>
      <RegularTextWrapper>
        <HeaderText text="We're currently looking for developers and sponsors, who share our vision for the future of the tech industry. If you're interested in joining our team or sponsorship, please contact us to learn more about how you can get involved. " />
      </RegularTextWrapper>
      <ButtonsWrapper>
        {contactData.map((data, index) => (
          <ContactLink
            href={data.href}
            icon={data.icon}
            text={data.name}
            color={colors.WHITE}
            background={colors.TRANSPARENT}
            key={index}
            width="160px"
            height="40px"
          />
        ))}
      </ButtonsWrapper>
    </SectionLayout>
  );
};

export default GetInTouch;
