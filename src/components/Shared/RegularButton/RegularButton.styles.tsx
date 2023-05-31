import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Button = styled.button<{
  color?: string;
  background?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 6px;

  width: 170px;
  height: 48px;

  /* Green/Normal */

  background: ${(props) => props.background || colors.GREEN_NORMAL};
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 340px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;
