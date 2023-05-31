import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 1024px) {
    padding: 0 25px 0 25px;
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
  cursor: pointer;
  padding-bottom: 5px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileLogoWrapper = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
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
