import {
  Card,
  Description,
  InfoContainer,
  LearnButton,
} from "../Overview.styles";
import Image from "next/image";
import ArrowRight from "@/assets/Arrows/ArrowRight";
import GradientText from "@/components/Shared/GradientText/GradientText";
import Link from "next/link";

const OverviewCard = ({ element }: { element: any }) => {
  return (
    <Card onClick={() => console.log(1)}>
      <InfoContainer>
        <Image src={element.icon} alt={element.alt} width={36} height={36} />
        <GradientText text={element.header} textType="small" />
        <Description>{element.description}</Description>
      </InfoContainer>
      <div>
        <Link href="/info" style={{ textDecoration: "none" }}>
          <LearnButton>
            Learn more
            <ArrowRight />
          </LearnButton>
        </Link>
      </div>
    </Card>
  );
};

export default OverviewCard;
