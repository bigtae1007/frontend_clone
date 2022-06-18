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
    --swiper-theme-color: #fff!important;
  }
    .swiper-pagination{
      top: 90%!important;
      left: 120px!important;
      width: 20%!important;
      height: 2px!important;
      border-radius: 30px!important;
    }
    .swiper-pagination-progressbar-fill{
      height: 2px!important;
      border-radius: 30px!important;
    }
    .swiper-button-prev{
      top: 85%;
      left: auto;
      right: 160px;
      width: 40px;
      height: 40px;
      background-color: rgba(0,0,0,.4);
    }
    .swiper-button-prev::after{
      top: 50%;
      left: 50%;
      font-size: 18px;
    }
    .swiper-button-next{
      top: 85%;
      left: auto;
      right: 120px;
      width: 40px;
      height: 40px;
      background-color: rgba(0,0,0,.4);
    }
    .swiper-button-next::after{
      top: 50%;
      left: 50%;
      font-size: 18px;

    }
`;

export default GlobalStyle;
