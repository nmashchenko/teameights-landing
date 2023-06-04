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

  @media screen and (max-width: 468px) {
    align-items: left;
  }
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
  font-size: 96px;
  user-select: none;
  text-align: center;
  margin: 0;

  color: #5bd424;

  animation: animate 3s ease-in-out infinite running;

  @keyframes animate {
    0% {
      color: #5bd424;
    }
    50% {
      color: #79f242;
    }
    100% {
      color: #5bd424;
    }
  }

  /*background: radial-gradient(
      94.05% 4394.48% at 5.95% 11.97%,
      #46a11b 0%,
      #79f242 49.79%,
      #46a11b 100%
    ),
    ${colors.GREEN_BRIGHT};

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;*/

  /* neon text */
  //text-shadow: 0px 0px 16px rgba(91, 212, 36, 0.25);

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 468px) {
    font-size: 40px;
  }
`;
