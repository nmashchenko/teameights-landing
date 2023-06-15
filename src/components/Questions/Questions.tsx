import CustomizedAccordions from "../Accordion/Accordion";
import SectionLayout from "@/layout/Section/Section";

const Questions = () => {
  return (
    <SectionLayout
      name="FAQ"
      headerText="Frequently asked questions"
      withDescription={false}
    >
      <CustomizedAccordions />
    </SectionLayout>
  );
};

export default Questions;
