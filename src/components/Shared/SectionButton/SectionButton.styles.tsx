import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${colors.GREY_NORMAL};
  font-weight: 400;

  &:hover {
    color: ${colors.GREEN_BRIGHT};
  }
`;
