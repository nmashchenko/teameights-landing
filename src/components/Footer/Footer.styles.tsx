import { colors } from "@/constants/colors";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  margin-top: 160px;

  @media screen and (max-width: 1024px) {
    padding: 0 25px 0 25px;
    margin-top: 80px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 32px;
    justify-content: space-around;
  }
`;

export const LinkButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Copyrights = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.GREY_NORMAL};
  margin: 0;
`;
