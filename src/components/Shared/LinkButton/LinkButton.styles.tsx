import styled from "styled-components";
import { colors } from "@/constants/colors";

export const Button = styled.button`
  width: 32px;
  height: 32px;
  background: ${colors.WHITE};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;
