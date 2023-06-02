import { colors } from "@/constants/colors";
import styled from "styled-components";

export const SideNavWrapper = styled.div<{ open: boolean }>`
  height: 100%;
  width: ${(props) => (props.open ? "100%" : 0)};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: ${colors.BLACK_BRIGHT};
  overflow-x: hidden;
  transition: 0.5s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkText = styled.h1<{ open: boolean }>`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${colors.WHITE};
  cursor: pointer;
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

export const Copyrights = styled.h1<{ open: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${colors.GREY_NORMAL};
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

export const CloseBtn = styled.div<{ open: boolean }>`
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 30px;
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

export const MobileLogoWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  left: 17.5px;
  top: 24px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const BottomWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  bottom: 32px;
  justify-content: center;
  align-items: center;
`;

export const LinkButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
