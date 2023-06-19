import { colors } from "@/constants/colors";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const _fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const FeatureLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  max-width: 1170px;

  animation: ${_fadeIn} 0.3s ease-in;
  -webkit-animation: ${_fadeIn} 0.3s ease-in;
  -moz-animation: ${_fadeIn} 0.3s ease-in;
  -o-animation: ${_fadeIn} 0.3s ease-in;
  -ms-animation: ${_fadeIn} 0.3s ease-in;

  @media screen and (max-width: 1280px) {
    max-width: 970px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 720px;
  }

  @media screen and (max-width: 767px) {
    max-width: 328px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  width: auto;
  height: auto;

  border: 2px solid ${colors.GREY_BORDER};
  border-radius: 10px;

  max-width: 570px;

  @media screen and (max-width: 1280px) {
    max-width: 470px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 376px;
  }

  @media screen and (max-width: 767px) {
    max-width: 558px;
  }
`;

export const Description = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
  line-height: 140%;
  margin: 0;
`;

export const MainImage = styled(Image)`
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: bottom;
  border: 2px solid ${colors.GREY_BORDER};
  border-radius: 10px;
`;

export const SubImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;
