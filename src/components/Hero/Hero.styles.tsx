import { colors } from "@/constants/colors";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
`;

export const RowWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 22px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const GradientTextWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 1024px) {
    max-width: 450px;
  }

  @media screen and (max-width: 468px) {
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

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 468px) {
    font-size: 40px;
  }
`;
