import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Link = styled.a<{
  color?: string;
  background?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 1.5rem;
  gap: 0.375rem;

  width: 164px;
  height: 48px;

  text-decoration: none;

  /* White Outline Secondary Button */

  background-color: transparent;
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  font-size: 1.25rem;
  font-weight: 400;
  border: 2px solid ${colors.GREEN_NORMAL};
  /* outline: 1px solid white; */
  cursor: pointer;
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

  @media screen and (max-width: 468px) {
    max-width: 143px;
  }
`;
