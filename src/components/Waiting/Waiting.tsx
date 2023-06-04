import RegularButton from "../Shared/RegularButton/RegularButton";
import RegularInput from "../Shared/RegularInput/RegularInput";
import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  WaitingWrapper,
  RegularTextWrapper,
  RowWrapper,
} from "./Waiting.styles";
import GradientText from "../Shared/GradientText/GradientText";
import { Element } from "react-scroll";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const Waiting = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    toast.promise(
      axios.post(
        "https://teameights-server.herokuapp.com/api/users/beta/sign-up",
        { email }
      ),
      {
        loading: "Loading",
        success: (data) => {
          // Clear the email input field
          setEmail("");
          return "Welcome to Team8s!";
        },
        error: (err) => {
          console.log(err);
          if (err?.response?.status === 400) {
            return `${err.response?.data[0]?.split("-")[1]?.toString()}`;
          } else if (err?.response?.status === 429) {
            return `${err.response?.data?.message?.toString()}`;
          }

          return `Something wrong happened, try again later!`;
        },
      },
      {
        id: "beta/sign-up/2",
        style: { background: "#2F3239", color: "white" },
        success: {
          duration: 3000,
        },
      }
    );
  };
  return (
    <Element name="Help">
      <WaitingWrapper>
        <GradientText text="So what are you waiting for? " textType="huge" />
        <RegularTextWrapper>
          <HeaderText
            text="Sign up today and start exploring all that our platform has to offer!
"
          />
        </RegularTextWrapper>
        <RowWrapper>
          <RegularInput
            placeholder="Enter your email"
            data={email}
            setData={setEmail}
          />
          <RegularButton text="Join Beta" handleClick={handleSubmit} />
        </RowWrapper>
      </WaitingWrapper>
    </Element>
  );
};

export default Waiting;
