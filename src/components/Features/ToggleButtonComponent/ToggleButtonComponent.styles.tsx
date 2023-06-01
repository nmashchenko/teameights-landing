import { colors } from "@/constants/colors";
import styled from "styled-components";

export const ToggleButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const ToggleButton = styled.button<{
  name: string;
  active: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  color: ${colors.WHITE};
  background: none;
  outline: none;
  border: ${(props) =>
    props.active
      ? `1px solid ${colors.GREEN_BRIGHT}`
      : `1px solid ${colors.GREY_NORMAL}`};
  border-radius: 100px;
  padding: 8px 16px;
  gap: 13px;
  cursor: pointer;
  height: 44px;

  svg {
    path {
      stroke: ${(props) =>
        props.active && props.name === "Teams" && colors.GREEN_BRIGHT};
      fill: ${(props) =>
        props.active && props.name !== "Teams" && colors.GREEN_BRIGHT};
    }
  }

  /* @media screen and (max-width: 568px) {
    text-indent: -9000px;
    text-transform: capitalize;
  } */
`;
