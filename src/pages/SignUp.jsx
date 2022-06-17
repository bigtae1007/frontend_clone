import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
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
            <button>카</button>
            <button>카</button>
            <button>카</button>
            <button>카</button>
            <button>카</button>
          </WrapSNSSignUp>
          <OrSpan>또는</OrSpan>
          <button onClick={navigate("/signup/email")}>이메일로 가입</button>
          <div>
            <span>법인 회원가입</span>
            <span>투자조합 가입</span>
          </div>
          <p>
            이미 와디즈 계정이 있나요? <span>로그인</span>
          </p>
        </WrapFlex>
      </SignUpSelect>
    </WrapSignUp>
  );
};

export default SignUp;

const WrapSignUp = styled.div`
  margin: 0 auto;
  width: 500px;
  border: 1px solid #000;
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
`;
const WrapSNSSignUp = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0 0;
  border: 1px solid #000;
  > button {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
  }
`;
const OrSpan = styled.span`
  margin: 0 auto;
`;
