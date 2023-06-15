import {
  Card,
  Description,
  InfoContainer,
  LearnButton,
} from "../Overview.styles";
import Image from "next/image";
import ArrowRight from "@/assets/Arrows/ArrowRight";
import GradientText from "@/components/Shared/GradientText/GradientText";

const OverviewCard = ({ element }: { element: any }) => {
  return (
    <Card onClick={() => console.log(1)}>
      <InfoContainer>
        <Image src={element.icon} alt={element.alt} width={36} height={36} />
        <GradientText text={element.header} textType="small" />
        <Description>{element.description}</Description>
      </InfoContainer>
      <div>
        <LearnButton>
          Learn more
          <ArrowRight />
        </LearnButton>
      </div>
    </Card>
  );
};

export default OverviewCard;
