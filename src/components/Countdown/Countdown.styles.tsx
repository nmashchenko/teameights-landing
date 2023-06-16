import styled from "styled-components";

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 160px;

  @media screen and (max-width: 1024px) {
    margin-top: 80px;
  }
`;

export const CountdownBox = styled.div`
  width: 100%;
  max-width: 1170px;
  border-radius: 10px;
  border: 2px solid #2f3239;
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;

  @media screen and (max-width: 1280px) {
    max-width: 970px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 776px;
  }

  @media screen and (max-width: 768px) {
    max-width: 720px;
  }

  @media screen and (max-width: 468px) {
    max-width: 328px;
    padding: 15px 0;
  }
`;

export const FlexWrapper = styled.div<{
  gap?: string;
  marginTop?: string;
  flexDirection?: string;
  alignItems?: string;
}>`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || "17px"};
  margin-top: ${(props) => props.marginTop || "18px"};
`;

export const TimerText = styled.h1`
  font-weight: 500;
  font-size: 40px;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const LabelText = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #8f9094;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
