import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionWrapper,
  Description,
  SummaryText,
} from "./Accordion.styles";
import { questions } from "@/constants/questions";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <AccordionWrapper>
      {questions.map((question, index) => (
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
