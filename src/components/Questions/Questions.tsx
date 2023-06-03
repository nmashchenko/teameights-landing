import { Element } from "react-scroll";
import { QuestionsWrapper } from "./Questions.styles";
import GradientText from "../Shared/GradientText/GradientText";
import CustomizedAccordions from "../Accordion/Accordion";

const Questions = () => {
  return (
    <Element name="Questions">
      <QuestionsWrapper>
        <GradientText text="Frequently asked questions" textType="medium" />
        <CustomizedAccordions />
      </QuestionsWrapper>
    </Element>
  );
};

export default Questions;
