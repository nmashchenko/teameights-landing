import { overviewData } from "@/constants/overviewData";
import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";
import Tilt from "react-parallax-tilt";

import {
  CardContainer,
  DesktopTiltContainer,
  MobileTiltContainer,
  OverviewWrapper,
  RegularTextWrapper,
} from "./Overview.styles";
import { Element } from "react-scroll";
import OverviewCard from "./Card/Card";

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
            <>
              <DesktopTiltContainer key={index}>
                <Tilt
                  tiltReverse={false}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glareColor="white"
                  glarePosition="all"
                  glareBorderRadius="10px"
                >
                  <OverviewCard index={index} element={element} />
                </Tilt>
              </DesktopTiltContainer>
              <MobileTiltContainer key={index}>
                <OverviewCard index={index} element={element} />
              </MobileTiltContainer>
            </>
          ))}
        </CardContainer>
      </OverviewWrapper>
    </Element>
  );
};

export default Overview;
