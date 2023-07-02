import styled from "styled-components";

export const BenefitsSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 6.25rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 430px) {
    max-width: 328px;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
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
