import styled from "styled-components";

export const SectionWrapper = styled.div<{ marginTop?: string }>`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "160px")};
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "80px")};
  }

  @media screen and (max-width: 767px) {
    max-width: 328px;
  }
`;

export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin-bottom: 36px;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 510px;
  }

  @media screen and (max-width: 767px) {
    max-width: 328px;
  }
`;
