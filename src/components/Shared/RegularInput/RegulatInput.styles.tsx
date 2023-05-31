import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Input = styled.input`
  padding: 0px;
  gap: 8px;

  width: 370px;
  height: 48px;
  background: none;
  border: 1px solid ${colors.GREY_NORMAL};
  border-radius: 10px;
  padding: 16px 10px;
  color: ${colors.GREY_NORMAL};
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    width: 340px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;
