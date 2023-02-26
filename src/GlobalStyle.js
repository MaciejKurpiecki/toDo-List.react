import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  max-width: 1000px;
  background-color: #ebebeb;
  word-break: break-word;
  padding: 20px;
  block-size: auto;
}
`;