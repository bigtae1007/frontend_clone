import React, { useState } from "react";
import styled from "styled-components";

const LoginModal = () => {
  const [hideLogin, setHideLogin] = useState(true);
  const onClick = () => setHideLogin(false);
  return (
    <div>
      {hideLogin ? (
        <ModalWrap>
          <Modal>
            <ModalTitle>로그인이 필요합니다</ModalTitle>
            <Button onClick={onClick}>X</Button>
            <ButtonFlex>
              <SignUpButton type="submit">회원가입</SignUpButton>
              <LoginButton type="submit">로그인</LoginButton>
            </ButtonFlex>
          </Modal>
        </ModalWrap>
      ) : null}
    </div>
  );
};

export default LoginModal;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
`;
const Modal = styled.div`
  padding: 30px 38px;
  padding-top: 56px;
  height: auto;
  max-width: 400px;
  background-color: #fff;
  margin: 5% auto;
  position: relative;
`;
const ModalTitle = styled.h2`
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #44484b;
  font-size: 22px;
  font-weight: 600;
  margin: 30px 0 10px 0;
`;
const Button = styled.button`
  position: absolute;
  top: 35px;
  left: 38px;
  background-color: transparent;
  border: 0;
  font-size: 22px;
`;
const SignUpButton = styled.button`
  border: 0;
  background-color: #fff;
  color: #00c4c4;
  font-size: 17px;
  font-weight: 400;
  padding: 10px 45px;
  border-radius: 3px;
  margin-top: 20px;
  font-weight: bold;
  border: 1px solid #00c4c4;
`;
const LoginButton = styled.button`
  border: 0;
  background-color: #00c4c4;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  padding: 10px 45px;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 20px;
`;
const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
