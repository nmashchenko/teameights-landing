import { colors } from "@/constants/colors";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  gap: 53px;
  width: 303.33px;
  height: 320px;
  background-color: ${colors.BLACK_BRIGHT};
  border: 2px solid ${colors.GREY_BORDER};
  border-radius: 10px;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    width: 328px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`;

export const Description = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
  line-height: 140%;
  margin: 0;
`;

export const LearnButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  color: ${colors.WHITE};
  -webkit-transition: transform 0.2s;
  transition: transform 0.2s;
  padding: 0;

  gap: 10px;
  &:hover svg {
    transform: translateX(5px);
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  align-self: left;
`;

export const DesktopTiltContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileTiltContainer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
