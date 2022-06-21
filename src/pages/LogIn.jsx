import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input";
//컴포넌트
import SNSButton from "../elem/SNSButton";
import { KAKAO_AUTH_URL } from "../SocialLogin/Kakao/Auth";
//모듈
import { __logIn } from "../redux/modules/user";
import { emailCheck } from "../shared/regExp";
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.user.isLogin);
  const [logInData, setLogInData] = useState({ email: "", password: "" });
  const [submitState, setSubmitState] = useState(true);

  const changeInput = (e) => {
    setLogInData({ ...logInData, [e.target.type]: e.target.value });
  };

  const loginEvent = (e) => {
    e.preventDefault();
    if (submitState) {
      dispatch(__logIn(logInData));
    }
  };

  React.useEffect(() => {
    if (emailCheck(logInData.email) && logInData.password.length >= 4) {
      setSubmitState(true);
    } else {
      setSubmitState(false);
    }
  }, [logInData]);

  React.useEffect(() => {
    if (loginState) {
      alert("로그인 완료");
      navigate("/");
    }
  }, [loginState]);
  return (
    <WrapLogin>
      <h2>로그인</h2>
      <WrapForm onSubmit={loginEvent}>
        <WrapInput>
          <Input
            type="email"
            placeholder="이메일 아이디"
            onChange={changeInput}
          />
        </WrapInput>
        {emailCheck(logInData.email) ? null : (
          <WarnningSpan>올바른 이메일 형식이 아닙니다.</WarnningSpan>
        )}
        <WrapInput>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={changeInput}
          />
        </WrapInput>

        <div>
          <div>
            <input type="checkbox" name="autoLogin" id="autoLogin" />
            <label htmlFor="autoLogin">아이디 저장</label>
          </div>
          <p>아이디·비밀번호 찾기</p>
        </div>
        <Button size="size1" type="submit" disabled={!submitState}>
          로그인
        </Button>
      </WrapForm>
      <OrDiv>또는</OrDiv>
      <WrapSNSLogIn>
        <a href={KAKAO_AUTH_URL}>
          <SNSButton url="kakao"></SNSButton>
        </a>
        <SNSButton url="naver"></SNSButton>
        <SNSButton url="google"></SNSButton>
        <SNSButton url="apple"></SNSButton>
        <SNSButton url="facebook"></SNSButton>
      </WrapSNSLogIn>
      <p>
        아직 와디즈 계정이 없나요?{" "}
        <span
          onClick={() => {
            navigate("/signup/intro");
          }}
        >
          회원가입
        </span>
      </p>
    </WrapLogin>
  );
};

export default LogIn;
const WrapLogin = styled.div`
  width: 400px;
  margin: 100px auto;
  > h2 {
    margin-bottom: 20px;
    font-size: 32px;
  }
  > p {
    text-align: center;
    font-size: 0.8rem;
    span {
      color: var(--aquaD);
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 0.9rem;
  }
`;

const WrapSNSLogIn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin: 25px auto 30px;
  width: 200px;
`;
const OrDiv = styled.div`
  display: flex;
  gap: 15px;
  flex-basis: 100%;
  justify-content: center;
  margin: 20px 0px;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  line-height: 0px;
  &:before {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
  &:after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;
const WarnningSpan = styled.span`
  font-size: 0.5rem;
  color: red;
`;
const WrapInput = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid var(--grey);
`;
