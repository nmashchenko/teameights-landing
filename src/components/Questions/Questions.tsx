import CustomizedAccordions from "../Accordion/Accordion";
import SectionLayout from "@/layout/Section/Section";
import { questions } from "@/constants/questions";
const Questions = () => {
  return (
    <SectionLayout
      name="FAQ"
      headerText="Frequently asked questions"
      withDescription={false}
    >
      <CustomizedAccordions accordionData={questions} />
    </SectionLayout>
  );
};

export default Questions;
