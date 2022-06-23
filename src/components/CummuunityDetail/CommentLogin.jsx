import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const CommentLogin = () => {
  //클릭 시 로그인 모달 창 오픈
  const [showLogin, setshowLogin] = useState(false);
  const onClick = () => setshowLogin(true);

  return (
    <>
      <CommentDiv onClick={onClick}>로그인이 필요합니다.</CommentDiv>
      {showLogin ? <LoginModal /> : null}
    </>
  );
};

export default CommentLogin;

const CommentDiv = styled.div`
  width: 90%;
  opacity: 0.45;
  background-color: #f0f0f0;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 8px 12px;
  font-size: 15px;
`;
