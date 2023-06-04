import { overviewData } from "@/constants/overviewData";
import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import Tilt from "react-parallax-tilt";

import {
  Card,
  CardContainer,
  Description,
  InfoContainer,
  LearnButton,
  OverviewWrapper,
  RegularTextWrapper,
} from "./Overview.styles";
import Image from "next/image";
import ArrowRight from "@/assets/Arrows/ArrowRight";
import { Element } from "react-scroll";

const Overview = () => {
  return (
    <Element name="About">
      <OverviewWrapper>
        <GradientText text="Overview" textType="huge" />
        <RegularTextWrapper>
          <HeaderText text="Learn more about our dynamic platform, the diverse target audience we cater to, and the exclusive benefits of joining our beta test." />
        </RegularTextWrapper>
        <CardContainer>
          {overviewData.map((element, index) => (
            //https://www.npmjs.com/package/react-parallax-tilt <-- Instructions just in case
            <Tilt
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="10px"
              key={index}
            >
              <Card key={index} onClick={() => console.log(1)}>
                <InfoContainer>
                  <Image
                    src={element.icon}
                    alt={element.alt}
                    width={36}
                    height={36}
                  />
                  <GradientText text={element.header} textType="small" />
                  <Description>{element.description}</Description>
                </InfoContainer>
                <LearnButton>
                  Learn more
                  <ArrowRight />
                </LearnButton>
              </Card>
            </Tilt>
          ))}
        </CardContainer>
      </OverviewWrapper>
    </Element>
  );
};

export default Overview;
