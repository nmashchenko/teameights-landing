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
  padding: 0px 1.5rem;
  gap: 0.375rem;

  width: ${(props) => props.width || "170px"};
  height: ${(props) => props.height || "48px"};

  /* White Outline Secondary Button */

  background-color: transparent;
  border-radius: 25px;
  color: ${(props) => props.color || "white"};
  font-size: 1.25rem;
  font-weight: 400;
  border: none;
  outline: 1px solid white;
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

  @media screen and (max-width: 768px) {
    width: 340px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;
