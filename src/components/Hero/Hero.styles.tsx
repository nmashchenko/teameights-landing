import { colors } from "@/constants/colors";
import styled, { keyframes } from "styled-components";

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
  max-width: 710px;

  @media screen and (max-width: 1024px) {
    max-width: 460px;
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

  @media screen and (max-width: 1024px) {
    max-width: 510px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const PlatformText = styled.h1`
  font-weight: 600;
  font-size: 56px;

  text-align: center;
  margin: 0;

  background: radial-gradient(
        94.05% 4394.48% at 5.95% 11.97%,
        #46a11b 0%,
        #79f242 49.79%,
        #46a11b 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #5bd424;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* neon text */
  text-shadow: 0px 0px 16px rgba(91, 212, 36, 0.25);

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }
`;
