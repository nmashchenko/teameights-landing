import { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { FlexWrapper, TimerText } from "../Countdown.styles";
import { getAnimationSettings } from "./Confetti.utils";
import { canvasStyles } from "./Confetti.styles";

export default function Fireworks() {
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);

    if (refAnimationInstance.current) {
      refAnimationInstance.current.reset();
    }
  }, [intervalId]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    startAnimation();

    const timeoutId = setTimeout(() => {
      stopAnimation();
    }, 60000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <FlexWrapper>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <TimerText>We are live!</TimerText>
    </FlexWrapper>
  );
}
