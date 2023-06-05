import Image from "next/image";
import styled from "styled-components";

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

export const MemberImage = styled(Image)`
  width: 510px;
  height: 110px;
  object-fit: contain;

  @media screen and (max-width: 568px) {
    width: 390px;
    height: 90px;
  }

  @media screen and (max-width: 468px) {
    width: 350px;
    height: 80px;
  }
`;

export const ImagesWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    max-width: 325px;
  }

  @media screen and (max-width: 468px) {
    max-width: 350px;
  }
`;
