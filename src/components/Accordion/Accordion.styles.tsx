import { colors } from "@/constants/colors";
import styled from "styled-components";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import Plus from "@/assets/Icons/Plus";
import { styled as muistyled } from "@mui/material/styles";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const AccordionWrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    max-width: 970px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 776px;
  }

  @media screen and (max-width: 768px) {
    max-width: 720px;
  }

  @media screen and (max-width: 468px) {
    max-width: 328px;
  }
`;

export const SummaryText = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin: 0;
  color: ${colors.WHITE};
`;

export const Description = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  margin: 0;
  color: ${colors.GREY_LIGHT};
`;

export const Accordion = muistyled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: `1px solid ${colors.GREY_BORDER}`,
  background: "inherit",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  padding: "20px 0 20px 0",
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = muistyled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<Plus />} {...props} />
))(() => ({
  padding: 0,
  background: "inherit",
  color: colors.WHITE,
}));

export const AccordionDetails = muistyled(MuiAccordionDetails)(() => ({
  padding: "0 0 10px 0",
}));
