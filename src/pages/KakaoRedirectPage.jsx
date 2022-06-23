import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//모듈
import { __kakaoLogin } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
const KakaoRedirectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 코드 보내기
  let code = new URL(window.location.href).searchParams.get("code");
  const isLogin = useSelector((state) => state.user.isLogin);
  const loginError = useSelector((state) => state.user.error);
  React.useEffect(() => {
    dispatch(__kakaoLogin(code));
  }, []);
  React.useEffect(() => {
    if (loginError) {
      alert("오류가 발생했습니다. 다시 시도해주세요");
      navigate("/");
    }
    if (isLogin) {
      alert("로그인 완료");
      navigate("/");
    }
  }, [isLogin, loginError]);
  return (
    <WrapRedirect>
      <HeaderTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="25"
          viewBox="0 0 85 25"
        >
          <path
            fill="#1D2129"
            fillRule="nonzero"
            d="M58.49 2.23h2.11v21.29H59a1.73 1.73 0 0 1-1.62-1.16 9 9 0 0 1-10.93-.28 7.48 7.48 0 0 1-2.75-6.29 7.65 7.65 0 0 1 12.79-5.07V4.23a2 2 0 0 1 2-2zm-6.3 18.62a4.36 4.36 0 0 0 4.16-4.52 4.19 4.19 0 1 0-8.35 0 4.36 4.36 0 0 0 4.19 4.52zM42 23.52h-1.52a1.73 1.73 0 0 1-1.64-1.16 9 9 0 0 1-10.93-.28 7.48 7.48 0 0 1-2.75-6.29A7.65 7.65 0 0 1 38 10.72a2 2 0 0 1 1.9-1.79H42v14.59zm-8.41-2.67h.02a4.35 4.35 0 0 0 4.15-4.52 4.35 4.35 0 0 0-4.17-4.51 4.35 4.35 0 0 0-4.17 4.51 4.36 4.36 0 0 0 4.17 4.52zM83.47 8.94v2.11l-7.07 9.06h7.06v3.47h-13v-2.1l7.08-9.07h-6.62v-1.47a2 2 0 0 1 2-2h10.55zM65.86 7.3a2.48 2.48 0 1 1 0-4.96 2.48 2.48 0 0 1 0 4.96zM21.21 8.94h4.14l-4.86 14.59h-4.15l-3.21-9.36-3.21 9.36H5.77L.92 8.94h4.13L8 18l2.5-7.74a2 2 0 0 1 1.86-1.34h2.9l3 9.08 2.95-9.06zm42.65 14.59l-.04-12.59a2 2 0 0 1 2-2h2.11v14.59h-4.07z"
          ></path>
        </svg>
      </HeaderTitle>
      <div>로그인 중입니다. 잠시만 기달려 주세요...</div>
    </WrapRedirect>
  );
};

export default KakaoRedirectPage;

const WrapRedirect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`;
const HeaderTitle = styled.h1`
  font-size: 32px;
  line-height: 22px;
  padding: 14px 0 18px;
`;
