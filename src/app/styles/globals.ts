import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: pink;
    font-family: sans-serif;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.main};
  }

  * {
    box-sizing: border-box;
  }
`;