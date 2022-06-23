// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음

const CLIENT_ID = "c59093f9d7de311ae961d6cb6a2522c5";
const REDIRECT_URI =
  "http://btae.shop.s3-website.ap-northeast-2.amazonaws.com/user/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
