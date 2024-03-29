import { colors } from "@/constants/colors";
import styled from "styled-components";

export const SmallText = styled.h1`
  font-weight: 500;
  font-size: 20px;

  text-align: center;
  margin: 0;

  color: ${colors.GREEN_BRIGHT};

  @media screen and (max-width: 468px) {
    text-align: left;
  }
`;

export const MediumText = styled.h1`
  font-weight: 600;
  font-size: 24px;
  user-select: none;
  text-align: center;
  margin: 0;

  background: linear-gradient(
    0deg,
    rgba(70, 161, 27, 1) 0%,
    rgba(121, 242, 66, 1) 87%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 468px) {
    text-align: left;
  }
`;

export const LargeText = styled.h1`
  font-weight: 600;
  font-size: 48px;

  text-align: center;
  margin-bottom: 16px;
  margin-top: 0;

  background: linear-gradient(
    0deg,
    rgba(70, 161, 27, 1) 0%,
    rgba(121, 242, 66, 1) 87%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 300%;
  user-select: none;

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
