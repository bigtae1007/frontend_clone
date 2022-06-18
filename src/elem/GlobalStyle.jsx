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
    --aqua : #c0f8f5;
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
    .mySwiper1 .swiper-pagination{
      top: 90%!important;
      left: 120px!important;
      width: 20%!important;
      height: 2px!important;
      border-radius: 30px!important;
    }
    .mySwiper1 .swiper-pagination-progressbar-fill{
      height: 2px!important;
      border-radius: 30px!important;
    }
    .mySwiper1 .swiper-button-prev{
      top: 85%;
      left: auto;
      right: 160px;
      width: 40px;
      height: 40px;
      background-color: rgba(0,0,0,.4);
    }
    .mySwiper1 .swiper-button-prev::after{
      top: 50%;
      left: 50%;
      font-size: 18px;
    }
    .mySwiper1 .swiper-button-next{
      top: 85%;
      left: auto;
      right: 120px;
      width: 40px;
      height: 40px;
      background-color: rgba(0,0,0,.4);
    }
    .mySwiper1 .swiper-button-next::after{
      top: 50%;
      left: 50%;
      font-size: 18px;

    }
    .mySwiper2{
      margin: 40px auto;
      max-width: 1032px;
      box-sizing: content-box;
    }
    .mySwiper2 .swiper-button-prev{
      left: -15px;
      width: 40px;
      height: 40px;
    }
    .mySwiper2 .swiper-button-prev::after{
      font-size: 18px;
      color: #000;
    }
    .mySwiper2 .swiper-button-next{
      right: -15px;
      width: 40px;
      height: 40px;
    }
    .mySwiper2 .swiper-button-next::after{
      font-size: 18px;
      color: #000;
    }
    .swiper-button-disabled::after{
      color: transparent;
    }
`;

export default GlobalStyle;
