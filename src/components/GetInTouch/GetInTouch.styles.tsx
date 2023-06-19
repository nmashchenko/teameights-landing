import Image from "next/image";
import styled from "styled-components";

export const RegularTextWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin-bottom: 36px;

  @media screen and (max-width: 1024px) {
    max-width: 510px;
  }

  @media screen and (max-width: 468px) {
    max-width: 318px;
  }
`;

export const MemberImage = styled(Image)`
  width: 584px;
  height: 110px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    width: 328px;
    height: 80px;
  }
`;

export const ImagesWrapper = styled.div`
  margin-bottom: 36px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    max-width: 325px;
  }

  @media screen and (max-width: 468px) {
    max-width: 300px;
    gap: 8px;
  }
`;
