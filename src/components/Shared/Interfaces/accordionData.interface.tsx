import { StaticImageData } from "next/image";

export interface AccordionData {
  questionName: string;
  summary: string;
  description: string;
  icon?: StaticImageData;
}
