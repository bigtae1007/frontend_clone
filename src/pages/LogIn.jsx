import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styled from "styled-components";
import { __logIn } from "../redux/modules/user";
import { emailCheck } from "../shared/regExp";

const LogIn = () => {
  const dispatch = useDispatch();
  const [logInData, setLogInData] = useState({ email: "", password: "" });
  const [submitState, setSubmitState] = useState(false);

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

  return (
    <WrapLogin>
      <h2>로그인</h2>
      <WrapForm onSubmit={loginEvent}>
        <input
          type="email"
          placeholder="이메일 아이디"
          onChange={changeInput}
        />
        {emailCheck(logInData.email) ? null : (
          <WarnningSpan>올바른 이메일 형식이 아닙니다.</WarnningSpan>
        )}
        <span>asdasd</span>
        <input type="password" placeholder="비밀번호" onChange={changeInput} />
        <div>
          <div>
            <input type="checkbox" name="autoLogin" id="autoLogin" />
            <label htmlFor="autoLogin">자동 로그인</label>
          </div>
          <p>아이디.비밀번호 찾기</p>
        </div>
        <button type="submit" disabled={!submitState}>
          로그인
        </button>
      </WrapForm>
      <span>또는</span>
      <WrapSNSLogIn>
        <button>카</button>
        <button>카</button>
        <button>카</button>
        <button>카</button>
        <button>카</button>
      </WrapSNSLogIn>
      <p>
        아직 와디즈 계정이 없나요? <span>회원가입</span>
      </p>
    </WrapLogin>
  );
};

export default LogIn;
const WrapLogin = styled.div`
  width: 400px;
`;

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    height: 50px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const WrapSNSLogIn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin: 25px 0 0;
  width: 200px;
  border: 1px solid #000;
  > button {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
  }
`;
const WarnningSpan = styled.span`
  font-size: 0.5rem;
  color: red;
`;
