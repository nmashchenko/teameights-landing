import GradientText from "@/components/Shared/GradientText/GradientText";
import {
  Card,
  CardsContainer,
  Description,
  FeatureLayoutContainer,
  MainImage,
  SubImage,
} from "./Feature.styles";
import { Cards } from "@/components/Shared/Interfaces/cards.interface";

const FeatureLayout = ({ cardsData }: { cardsData: Cards }) => {
  return (
    <FeatureLayoutContainer>
      <MainImage src={cardsData.image} alt={"Platform image"} loading="eager" />

      <CardsContainer>
        {cardsData.cards.map((card, index) => (
          <Card key={index}>
            <GradientText text={card.header} textType="small" />
            <Description>{card.description}</Description>
            <SubImage src={card.cardImage} alt={card.header} />
          </Card>
        ))}
      </CardsContainer>
    </FeatureLayoutContainer>
  );
};

export default FeatureLayout;
