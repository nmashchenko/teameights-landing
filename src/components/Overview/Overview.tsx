import { overviewData } from "@/constants/overviewData";
import GradientText from "../Shared/GradientText/GradientText";
import HeaderText from "../Shared/HeaderText/HeaderText";

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

const Overview = () => {
  return (
    <OverviewWrapper>
      <GradientText text="Overview" textType="medium" />
      <RegularTextWrapper>
        <HeaderText text="Learn more about our dynamic platform, the diverse target audience we cater to, and the exclusive benefits of joining our beta test." />
      </RegularTextWrapper>
      <CardContainer>
        {overviewData.map((element, index) => (
          <Card key={index} onClick={() => console.log(element.icon)}>
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
        ))}
      </CardContainer>
    </OverviewWrapper>
  );
};

export default Overview;
