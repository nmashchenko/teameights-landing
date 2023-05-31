import { colors } from "@/constants/colors";
import styled, { keyframes } from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12.8%;
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
