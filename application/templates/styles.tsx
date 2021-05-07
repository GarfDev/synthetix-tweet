import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 1200px;
    height: 630px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
