import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionImage,
  AccordionSummary,
  AccordionWrapper,
  Description,
  SummaryText,
} from "./Accordion.styles";
import { AccordionData } from "../Shared/Interfaces/accordionData.interface";
import Image from "next/image";

export default function CustomizedAccordions({
  accordionData,
  withIcon = false,
}: {
  accordionData: AccordionData[];
  withIcon: boolean;
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
              <AccordionImage>
                {withIcon && (
                  <Image
                    src={question.icon || ""}
                    alt={question.questionName}
                  />
                )}
                <SummaryText>{question.summary}</SummaryText>
              </AccordionImage>
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
