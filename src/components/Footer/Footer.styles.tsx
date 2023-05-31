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
  }
`;

export const LinkButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

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
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileCopyrightsWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const Copyrights = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: #8f9094;
  margin: 0;
`;

export const RowWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
