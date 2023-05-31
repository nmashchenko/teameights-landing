import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Text = styled.h1`
  font-weight: 400;
  font-size: 20px;

  text-align: center;
  margin: 0;
  color: ${colors.WHITE};

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
