import { colors } from "@/constants/colors";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100dvh - 80px);
  margin: auto;
  @media screen and (max-width: 767px) {
    max-width: 328px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const GradientTextWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 450px;
  }

  @media screen and (max-width: 767px) {
    max-width: 318px;
    min-height: 138px;

    span {
      display: block;
    }
  }
`;

export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  text-align: center;
  margin-bottom: 36px;

  @media screen and (max-width: 1024px) {
    max-width: 510px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
    text-align: left;
  }
`;

export const PlatformText = styled.h1`
  font-weight: 600;
  font-size: 86px;
  user-select: none;
  text-align: center;
  margin: 0;

  color: ${colors.GREEN_BRIGHT};

  animation: animate 3s ease-in-out infinite running;

  @keyframes animate {
    0% {
      color: ${colors.GREEN_BRIGHT};
    }
    50% {
      color: ${colors.GREEN_ULTRA_BRIGHT};
    }
    100% {
      color: ${colors.GREEN_BRIGHT};
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
`;

export const canvasStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};
