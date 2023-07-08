import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Button = styled.button<{
  color?: string;
  background?: string;
  width?: string;
  height?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 6px;

  width: ${(props) => props.width || "170px"};
  height: ${(props) => props.height || "48px"};

  /* Green/Normal */

  background: ${(props) => props.background || colors.GREEN_NORMAL};
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, outline 0.1s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 200%;
    padding-top: 200%;
    border-radius: 50%;
    background-color: rgba(13, 119, 13, 0.75);
    transition: transform 0.5s ease-out;
    z-index: -1;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  @media screen and (max-width: 767px) {
    width: 328px;
    font-size: 16px;
  }
`;
