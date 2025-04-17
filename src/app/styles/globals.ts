import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: pink;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;