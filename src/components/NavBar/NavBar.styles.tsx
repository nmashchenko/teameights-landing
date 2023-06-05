import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
  background: transparent;
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    padding: 0 24px;
  }
`;

export const LinkButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SectionWrapper = styled.div<{ cursor?: string; gap?: string }>`
  display: flex;
  gap: ${(props) => props.gap || "0px"};
  cursor: ${(props) => props.cursor || "auto"};
  justify-content: center;
  align-items: center;
`;

export const DesktopLogoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* padding-bottom: 5px; */
  display: flex;
  gap: 8px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileLogoWrapper = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: baseline;
    align-items: center;
    gap: 8px;
  }
`;

export const DesktopIconsWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileIconsWrapper = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
