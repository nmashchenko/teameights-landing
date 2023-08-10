import {
  Card,
  Description,
  InfoContainer,
  LearnButton,
} from "../Overview.styles";
import Image from "next/image";
import ArrowRight from "@/assets/Arrows/ArrowRight";
import GradientText from "@/components/Shared/GradientText/GradientText";
import { useRouter } from "next/router";
("react-scroll");

const OverviewCard = ({ element }: { element: any }) => {
  const router = useRouter();
  return (
    <Card>
      <InfoContainer>
        <Image src={element.icon} alt={element.alt} width={36} height={36} />
        <GradientText text={element.header} textType="small" />
        <Description>{element.description}</Description>
      </InfoContainer>
      <div>
        <LearnButton
          onClick={() =>
            router.push({
              pathname: "/info",
              query: { section: element.header },
            })
          }
        >
          Learn more
          <ArrowRight />
        </LearnButton>
      </div>
    </Card>
  );
};

export default OverviewCard;
