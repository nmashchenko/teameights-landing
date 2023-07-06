import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionWrapper,
  Description,
  SummaryText,
} from "./Accordion.styles";
import { AccordionData } from "../Shared/Interfaces/accordionData.interface";

export default function CustomizedAccordions({
  accordionData,
}: {
  accordionData: AccordionData[];
}) {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <AccordionWrapper>
      {accordionData.map((question, index) => (
        <div key={index}>
          <Accordion
            expanded={expanded === question.questionName}
            onChange={handleChange(question.questionName)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expanded={(expanded === question.questionName).toString()}
            >
              <SummaryText>{question.summary}</SummaryText>
            </AccordionSummary>
            <AccordionDetails>
              <Description>{question.description}</Description>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </AccordionWrapper>
  );
}
