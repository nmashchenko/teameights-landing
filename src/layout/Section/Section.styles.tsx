import styled from "styled-components";

export const SectionWrapper = styled.div<{ marginTop?: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "160px")};

  @media screen and (max-width: 1024px) {
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "80px")};
  }
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
