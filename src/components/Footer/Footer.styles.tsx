import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  margin-top: 12.8%;

  @media screen and (max-width: 1024px) {
    padding: 0 25px 0 25px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5%;
  }
`;

export const LinkButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Copyrights = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: #8f9094;
  margin: 0;
`;
