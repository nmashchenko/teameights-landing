import { AnimationSettings } from "./AnimationSettings.interface";

export const getAnimationSettings = (
  originXA: number,
  originXB: number
): AnimationSettings => {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
};

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
