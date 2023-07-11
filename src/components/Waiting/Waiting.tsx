import { colors } from "@/constants/colors";
import ContactLink from "../Shared/ContactLink/ContactLink";
import { RowWrapper } from "./Waiting.styles";
import SectionLayout from "@/layout/Section/Section";

const Waiting = () => {

  return (
    <SectionLayout
      name="Waiting"
      headerText="So what are you waiting for?"
      description="Sign up today and start exploring all that our platform has to offer!"
      withDescription={true}
    >
      <RowWrapper>
        <ContactLink href="https://app.teameights.com"  width="100%" text="Join Beta" background={colors.GREEN_NORMAL} />
      </RowWrapper>
    </SectionLayout>
  );
};

export default Waiting;
