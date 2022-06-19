import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <CommentLabel>
      <CommentInput
        placeholder="답글을 입력하세요."
        maxlength="2000"
        maxheight="400"
      />
      <CommentButton>등록</CommentButton>
    </CommentLabel>
  );
};

export default Comment;
const CommentLabel = styled.label`
  position: relative;
  width: 90%;
  overflow: hidden;
`;
const CommentInput = styled.textarea`
  width: 100%;
  opacity: 0.45;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 8px 12px 0;
  height: 36px;
  overflow: hidden;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  overflow-y: hidden;
  resize: none;
  &:focus {
    height: 108px;
  }
`;
const CommentButton = styled.button`
  position: absolute;
  right: 100%;
  bottom: 0;
  background-color: #00c4c4;
  color: #fff;
  border: 0;
  padding: 10px 20px;
  ${CommentInput}:focus & {
    right: 0;
  }
`;
