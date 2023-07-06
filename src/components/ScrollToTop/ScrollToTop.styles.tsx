import styled from "styled-components";

export const ScrollWrapper = styled.div<{ display: string }>`
  position: fixed;
  right: 32px;
  bottom: 36px;
  cursor: pointer;
  display: ${(props) => props.display || "none"};
`;

export const ScrollContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #46a11b;
`;
