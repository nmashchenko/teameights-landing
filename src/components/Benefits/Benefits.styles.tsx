import styled from "styled-components";

export const BenefitsSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 7.625rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    max-width: 328px;
    margin-top: 6.25rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 970px;
  gap: 24px;
  @media screen and (min-width: 1920px) {
    max-width: 1170px;
  }

  @media screen and (min-width: 1281px) and (max-width: 1919px) {
    max-width: 970px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    max-width: 776px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 526px;
  }

  @media screen and (max-width: 768px) {
    max-width: 328px;
  }
`;

export const BenefitsItem = styled.div`
  display: flex;
  padding: 32px;
  gap: 24px;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid #2f3239;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }
`;

export const BenefitsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 468px) {
  }
`;

// TEXT STYLING
export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin-bottom: 36px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const SupportingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--default-white, #fff);
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const MediumGradientText = styled.h1`
  font-weight: 600;
  font-size: 24px;
  user-select: none;
  text-align: left;
  margin: 0;

  background: linear-gradient(
    0deg,
    rgba(70, 161, 27, 1) 0%,
    rgba(121, 242, 66, 1) 87%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 468px) {
  }
`;
// TEXT STYLING
