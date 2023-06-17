import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import { RowWrapper, canvasStyles } from "./Waiting.styles";
import { useState } from "react";
import { useSubmitEmail } from "@/api/hooks/useSubmitEmail";
import SectionLayout from "@/layout/Section/Section";
import ReactCanvasConfetti from "react-canvas-confetti";

const Waiting = () => {
  const [email, setEmail] = useState("");

  const { handleSubmit, getInstance } = useSubmitEmail(email, setEmail);

  return (
    <SectionLayout
      name="Waiting"
      headerText="So what are you waiting for?"
      description="Sign up today and start exploring all that our platform has to offer!"
      withDescription={true}
    >
      <RowWrapper>
        <RegularInput
          placeholder="Enter your email"
          data={email}
          setData={setEmail}
        />
        <RegularButton text="Join Beta" handleClick={handleSubmit} />
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </RowWrapper>
    </SectionLayout>
  );
};

export default Waiting;
