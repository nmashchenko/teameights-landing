import { colors } from "@/constants/colors";
import styled from "styled-components";

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12.8%;
`;

export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;

  @media screen and (max-width: 1024px) {
    max-width: 510px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  gap: 53px;
  width: 303.33px;
  height: 320px;

  border: 2px solid ${colors.GREY_BORDER};
  border-radius: 10px;
  align-items: flex-start;
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

  gap: 10px;
  &:hover {
    transform: translateX(10px);
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`;
