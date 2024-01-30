import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
    text-align: center;
    padding: 2rem;
  }

  h2 {
    padding: 1rem;
  }

  ul {
    list-style: none;
  }
`;
