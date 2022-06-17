import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
//컴포넌트
import Button from "../elem/Button";
import Input from "../elem/Input";
//모듈
import { __overlapEmail, __signUp } from "../redux/modules/user";
import { emailCheck, nickCheck } from "../shared/regExp";

const SignUpForm = () => {
  const dispatch = useDispatch();
  // 이메일 중복확인 상태값
  const overlapEmail = useSelector((state) => state.user.checkEmail);
  const [signUpData, setSignUpData] = React.useState({
    nick: "",
    email: "",
    pw: "",
    pwCheck: "",
  });

  const [submitState, setSubmitState] = React.useState(true);
  const [emailCheckState, setEmailCheckState] = React.useState(false);
  const [nickCheckState, setnickCheckState] = React.useState(true);
  const [pwCheckState, setpwCheckState] = React.useState(false);

  //input 값 변경
  const changeInput = (e) => {
    const { id, value } = e.target;
    setSignUpData({ ...signUpData, [id]: value });
  };

  // 상태 잠금
  React.useEffect(() => {
    if (emailCheck(signUpData.email)) {
      setEmailCheckState(true);
    } else {
      setEmailCheckState(false);
    }
    // if (nickCheck(signUpData.nick) && signUpData.nick > 2) {
    //   setnickCheckState(true);
    // } else {
    //   setnickCheckState(false);
    // }
    if (signUpData.pw === signUpData.pwCheck && signUpData.pw !== "") {
      setpwCheckState(true);
    } else {
      setpwCheckState(false);
    }
  }, [signUpData]);
  // 버튼 잠금
  React.useEffect(() => {
    if (nickCheckState && emailCheckState && pwCheckState) {
      setSubmitState(true);
    }
  }, [emailCheckState, nickCheckState, pwCheckState]);
  // 중복 확인
  const overlapEmailEvent = () => {
    dispatch(__overlapEmail(signUpData.email));
  };

  // 회원가입 이벤트
  const signUp = (e) => {
    e.preventDefault();
    if (submitState) {
      dispatch(__signUp(signUpData));
    }
  };
  return (
    <WrapSignUpForm>
      <h2>회원가입</h2>
      <p>최소한의 정보를 받고있습니다</p>
      <WrapForm onSubmit={signUp}>
        <div>
          <label htmlFor="nick">이름</label>
          <WrapInput>
            <Input
              type="text"
              id="nick"
              placeholder="이름 입력"
              onChange={changeInput}
            />
          </WrapInput>
          {nickCheckState ? null : (
            <WarnningSpan>이름을 입력해주세요</WarnningSpan>
          )}
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <WrapInput>
            <Input
              type="email"
              id="email"
              placeholder="이메일 계정"
              onChange={changeInput}
            />
            <button disabled={!emailCheckState} onClick={overlapEmailEvent}>
              중복확인
            </button>
          </WrapInput>
          {emailCheckState ? (
            !overlapEmail ? (
              <WarnningSpan>중복확인 해주세요</WarnningSpan>
            ) : null
          ) : (
            <WarnningSpan>아이디(이메일 계정)를 입력해주세요</WarnningSpan>
          )}
        </div>
        <div>
          <label htmlFor="pw">비밀번호</label>
          <WrapInput>
            <Input
              type="password"
              id="pw"
              placeholder="비밀번호"
              disabled={!overlapEmail}
              onChange={changeInput}
            />
          </WrapInput>
          <WrapInput>
            <Input
              type="password"
              id="pwCheck"
              placeholder="비밀번호 확인"
              disabled={!overlapEmail}
              onChange={changeInput}
            />
          </WrapInput>
        </div>
        <Button
          size="size1"
          color="white"
          type="submit"
          disabled={!submitState}
        >
          완료
        </Button>
      </WrapForm>
    </WrapSignUpForm>
  );
};

export default SignUpForm;

const WrapSignUpForm = styled.div`
  margin: 100px auto;
  width: 400px;
  > h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  > p {
    margin-bottom: 40px;
    font-size: 0.9rem;
    color: var(--black);
  }
`;

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  > button:disabled {
    background-color: var(--aqua);
  }
`;
const WrapInput = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid var(--grey);
  > button {
    margin: 3px;
    width: 80px;
    border: none;
    background-color: var(--aquaD);
    color: var(--white);
    :disabled {
      background-color: var(--aqua);
      cursor: not-allowed;
    }
  }
`;

const WarnningSpan = styled.span`
  font-size: 0.5rem;
  color: red;
`;
