import { LargeText, MediumText, SmallText } from "./GradientText.styles";

const GradientText = ({
  text,
  textType,
}: {
  text: string;
  textType: "small" | "medium" | "huge";
}) => {
  switch (textType) {
    case "small":
      return <SmallText>{text}</SmallText>;
    case "medium":
      return <MediumText>{text}</MediumText>;
    case "huge":
      return <LargeText>{text}</LargeText>;
    default:
      return null;
  }
};

export default GradientText;
