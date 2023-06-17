import { zeroPad } from "react-countdown";
import { TimerText, FlexWrapper, LabelText } from "./Countdown.styles";

const Timer = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  return (
    <FlexWrapper alignItems="baseline" marginTop="0">
      <FlexWrapper flexDirection="column" gap="10px" marginTop="0">
        <TimerText>{zeroPad(days)}</TimerText>
        <LabelText>days</LabelText>
      </FlexWrapper>
      <TimerText>:</TimerText>
      <FlexWrapper flexDirection="column" gap="10px" marginTop="0">
        <TimerText>{zeroPad(hours)}</TimerText>
        <LabelText>hours</LabelText>
      </FlexWrapper>
      <TimerText>:</TimerText>
      <FlexWrapper flexDirection="column" gap="10px" marginTop="0">
        <TimerText>{zeroPad(minutes)}</TimerText>
        <LabelText>minutes</LabelText>
      </FlexWrapper>
      <TimerText>:</TimerText>
      <FlexWrapper flexDirection="column" gap="10px" marginTop="0">
        <TimerText>{zeroPad(seconds)}</TimerText>
        <LabelText>seconds</LabelText>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default Timer;
