import Countdown from "react-countdown";
import moment from "moment-timezone";
import { CountdownBox, CountdownWrapper } from "./Countdown.styles";
import GradientText from "../Shared/GradientText/GradientText";
import Fireworks from "./Confetti/Confetti";
import Timer from "./Timer";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <Fireworks />;
  } else {
    return (
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

const CountdownComponent = () => {
  const countdownDuration = moment
    .tz("2023-07-03 00:00:00", "America/Chicago")
    .diff(moment());

  return (
    <CountdownWrapper>
      <CountdownBox>
        <GradientText text={"Launch in"} textType="huge" />
        <Countdown date={Date.now() + countdownDuration} renderer={renderer} />
      </CountdownBox>
    </CountdownWrapper>
  );
};

export default CountdownComponent;
