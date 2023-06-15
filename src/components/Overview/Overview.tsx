import { overviewData } from "@/constants/overviewData";
import Tilt from "react-parallax-tilt";

import {
  CardContainer,
  DesktopTiltContainer,
  MobileTiltContainer,
} from "./Overview.styles";
import OverviewCard from "./Card/Card";
import { Fragment } from "react";
import SectionLayout from "@/layout/Section/Section";

const Overview = () => {
  return (
    <SectionLayout
      name="Overview"
      headerText="Overview"
      description="Learn more about our dynamic platform, the diverse target audience we cater to, and the exclusive benefits of joining our beta test."
      withDescription={true}
      marginTop="0"
    >
      <CardContainer>
        {overviewData.map((element, index) => (
          //https://www.npmjs.com/package/react-parallax-tilt <-- Instructions just in case
          <Fragment key={index}>
            {/* Desktop width >= 1024 */}
            <DesktopTiltContainer>
              <Tilt
                tiltReverse={false}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="white"
                glarePosition="all"
                glareBorderRadius="10px"
              >
                <OverviewCard element={element} />
              </Tilt>
            </DesktopTiltContainer>
            {/* Desktop width < 1024 */}
            <MobileTiltContainer>
              <OverviewCard element={element} />
            </MobileTiltContainer>
          </Fragment>
        ))}
      </CardContainer>
    </SectionLayout>
  );
};

export default Overview;
