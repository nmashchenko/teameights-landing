import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Input = styled.input<{ clicked: boolean }>`
  padding: 0px;
  gap: 8px;
  width: 370px;
  height: 48px;
  background: none;
  border: 1px solid ${colors.GREY_NORMAL};
  border-radius: 10px;
  padding: 16px 10px;
  color: ${colors.WHITE};
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    width: 340px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }

  :focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid ${colors.WHITE};
  }

  :hover {
    background: ${(props) => (props.clicked ? "none" : "#2f3239")};
  }
`;
