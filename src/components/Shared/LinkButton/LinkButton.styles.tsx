import styled from "styled-components";
import { colors } from "@/constants/colors";

export const Button = styled.button<{ dimensions: string }>`
  width: ${(props) => props.dimensions || "32px"};
  height: ${(props) => props.dimensions || "32px"};
  min-height: 32px;
  appearance: none;
  background: ${colors.WHITE};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  text-decoration: none;
  padding: 0;

  :hover {
    background: ${colors.GREEN_BRIGHT};
  }
`;
