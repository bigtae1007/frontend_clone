import React from "react";
import styled, { css } from "styled-components";

export default function SNSButton({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  ${({ url }) => {
    switch (url) {
      case "naver":
        return naver;
      case "kakao":
        return kakao;
      case "google":
        return google;
      case "apple":
        return apple;
      case "facebook":
        return facebook;
      default:
        break;
    }
  }}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--grey);
  background-color: var(--white);
`;

export const naver = css`
  background-image: url(https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside);
  background-size: contain;
`;
export const kakao = css`
  background-image: url(https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg);
  background-size: contain;
`;
export const apple = css`
  background-image: url(https://i.pinimg.com/474x/14/d8/7a/14d87a3887139e044ed629ae32107c1e.jpg);
  background-size: contain;
`;
export const facebook = css`
  background-image: url(https://blog.kakaocdn.net/dn/UGS0q/btree5Viurw/l07AH1VgWJHm4stsAHLdL0/img.png);
  background-size: contain;
`;
export const google = css`
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BxIFDiqRSADS_dryOjRxIdflIGgt8vianZy7fPOHmGz8HsBUi-lggRTn5-raiCOnF0Q&usqp=CAU);
  background-size: contain;
`;
