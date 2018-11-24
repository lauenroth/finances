import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    width: 100%;
  }
  html, body {
    background-color: #eee;
    color: #222;
  }
  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    height: 100%;
    line-height: 1.4;
    margin: 0;
    width: 100%;
  }
  #__next {
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
