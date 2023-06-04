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
  background: transparent;
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
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 200%;
    padding-top: 200%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.4s ease-out;
    z-index: -1;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  svg {
    path {
      stroke: ${(props) =>
        props.active && props.name === "Teams" && colors.GREEN_BRIGHT};
      fill: ${(props) =>
        props.active && props.name !== "Teams" && colors.GREEN_BRIGHT};
    }
  }

  @media screen and (max-width: 468px) {
    &:before {
      background-color: transparent;
    }

    &:hover:before {
      background-color: transparent;
    }
  }

  /* @media screen and (max-width: 568px) {
    text-indent: -9000px;
    text-transform: capitalize;
  } */
`;
