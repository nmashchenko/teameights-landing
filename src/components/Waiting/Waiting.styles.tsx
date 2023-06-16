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

export const canvasStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};
