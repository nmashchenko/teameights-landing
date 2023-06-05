import styled from "styled-components";

export const RowWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 22px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;
