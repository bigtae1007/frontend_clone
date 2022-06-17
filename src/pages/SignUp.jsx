import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//컴포넌트
import SNSButton from "../elem/SNSButton";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <WrapAll>
      <WrapSignUp>
        <SignUpSelect>
          <h2>회원가입</h2>
          <p>
            와디즈 신규회원 가입하고
            <br />
            다양한 혜택을 받아보세요.
          </p>
          <WrapFlex>
            <WrapSNSSignUp>
              <SNSButton url="kakao"></SNSButton>
              <SNSButton url="naver"></SNSButton>
              <SNSButton url="google"></SNSButton>
              <SNSButton url="apple"></SNSButton>
              <SNSButton url="facebook"></SNSButton>
            </WrapSNSSignUp>
            <OrDiv>또는</OrDiv>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              이메일로 가입
            </button>
            <OrDiv>
              <span>법인 회원가입</span>
              <span>투자조합 가입</span>
            </OrDiv>
            <p>
              이미 와디즈 계정이 있나요?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </span>
            </p>
          </WrapFlex>
        </SignUpSelect>
      </WrapSignUp>
      <Img></Img>
    </WrapAll>
  );
};

export default SignUp;
const WrapAll = styled.div`
  display: flex;
  margin: 100px auto;
  width: 1000px;
`;

const WrapSignUp = styled.div`
  width: 500px;
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const SignUpSelect = styled.div`
  padding: 25px 16px 96px;
  width: 400px;
  height: 533px;
`;
const WrapFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    margin-bottom: 20px;
    width: 100%;
    height: 48px;
    border: 0.5px solid var(--grey);
    background-color: var(--white);
  }
  p {
    margin-top: 20px;
    font-size: 0.8rem;
    > span {
      color: var(--aquaD);
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
const WrapSNSSignUp = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0 0;
  width: 100%;
`;
const OrDiv = styled.div`
  display: flex;
  gap: 15px;
  flex-basis: 100%;
  align-items: center;
  margin: 20px 0px;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
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
const Img = styled.div`
  width: 500px;
  height: 535px;
  background-image: url(https://static.wadiz.kr/account/media/regist-intro-benefit.3c9ef4a1.jpeg);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 10px;
`;
