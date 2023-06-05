import GradientText from "@/components/Shared/GradientText/GradientText";
import HeaderText from "@/components/Shared/HeaderText/HeaderText";
import { Element } from "react-scroll";
import { RegularTextWrapper, SectionWrapper } from "./Section.styles";

const SectionLayout = ({
  headerText,
  description,
  children,
  name,
  marginTop,
  withDescription,
}: {
  headerText: string;
  description?: string;
  children: any;
  name: string;
  marginTop?: string;
  withDescription?: boolean;
}) => {
  return (
    <>
      <Element name={name}>
        <SectionWrapper marginTop={marginTop}>
          <GradientText text={headerText} textType="huge" />
          {withDescription && (
            <RegularTextWrapper>
              <HeaderText text={description} />
            </RegularTextWrapper>
          )}
          {children}
        </SectionWrapper>
      </Element>
    </>
  );
};

export default SectionLayout;
