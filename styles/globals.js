import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body,
  *, 
  html{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
  }

  body > iframe{
    display: none;
  }
`;
