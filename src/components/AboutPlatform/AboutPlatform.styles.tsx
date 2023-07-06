import styled from "styled-components";
import { colors } from "@/constants/colors";
import Image from "next/image";

export const AboutPlatformSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 430px) {
    max-width: 328px;
    margin: 2.5rem auto;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  max-width: 1170px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 1919px) {
    max-width: 970px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 776px;
  }

  @media screen and (max-width: 768px) {
    max-width: 526px;
  }
`;

export const FourCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 36px;
  align-self: stretch;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 468px) {
  }
`;

export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex: 1 0 0;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 468px) {
  }
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex: 1 0 0;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 468px) {
  }
`;

export const DoubleCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  align-self: stretch;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 468px) {
  }
`;

export const HackathonCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  align-self: stretch;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 468px) {
  }
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  border: 2px solid ${colors.GREY_BORDER};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 468px) {
  }
`;

export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin-bottom: 36px;

  @media screen and (max-width: 1024px) {
    max-width: 510px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 430px) {
  }
`;

export const MentorshipImage = styled(Image)`
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  max-width: 360px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 430px) {
    max-width: 328px;
    height: auto;
  }
`;

export const TeamImage = styled(Image)`
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  max-width: 360px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 430px) {
    max-width: 328px;
    height: auto;
  }
`;

export const ProjectsImage = styled(Image)`
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  max-width: 340px;
  height: auto;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 430px) {
    max-width: 328px;
    height: auto;
  }
`;

export const HackathonsImage = styled(Image)`
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  max-width: 400px;
  height: auto;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 430px) {
    max-width: 328px;
    height: auto;
  }
`;

export const CodingImage = styled(Image)`
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  max-width: 440px;
  height: auto;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 440px) {
    max-width: 328px;
    height: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${colors.BLACK_BRIGHT};

  align-items: flex-start;

  @media screen and (max-width: 767px) {
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const Description = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
  line-height: 140%;
  margin: 0;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
