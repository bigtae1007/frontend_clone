import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration : none;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
  body{
  }
  :root {
    --aquaD : #00c2ca;
    --aqua : #87e6e2;
    --black : #333333;
    --white: #ffffff;
    --grey : #dddddd;
    --green : #00B98D;
    --red :#F85151; 
    --blue : #0085FF;
    --dGrey : #aaa;
    --gray:rgba(33,37,41,.86);
  }
`;

export default GlobalStyle;
