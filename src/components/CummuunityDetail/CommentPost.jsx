import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { __addComment } from "./../../redux/modules/post";

const CommentPost = ({ id }) => {
  console.log(id);
  const commentRef = useRef();
  const dispatch = useDispatch();
  const addComment = () => {
    dispatch(
      __addComment({
        replyContent: commentRef.current.value,
        id: id,
      })
    );
  };
  return (
    <CommentLabel>
      <CommentInput
        placeholder="답글을 입력하세요."
        maxlength="2000"
        maxheight="400"
        ref={commentRef}
      />
      <CommentButton onClick={addComment}>등록</CommentButton>
    </CommentLabel>
  );
};

export default CommentPost;
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
  height: 108px;

  overflow: hidden;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  overflow-y: hidden;
  resize: none;
  &:focus {
    height: 108px;
    outline-color: #00c4c4;
  }
`;
const CommentButton = styled.button`
  position: absolute;
  right: 0;
  top: 70px;
  background-color: #00c4c4;
  color: #fff;
  border: 0;
  padding: 10px 20px;
  border-radius: 3px;
  z-index: 99;
`;
