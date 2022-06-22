import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteComment } from "../../redux/modules/comment";

const CommentUpdateButton = (props) => {
  const { open, close, commentId } = props;
  const [showButton, setshowButton] = useState(false);
  const onClick2 = () => setshowButton(!showButton);
  const dispatch = useDispatch();
  const deleteComment = () => {
    dispatch(
      __deleteComment({
        id: commentId,
      })
    );
    console.log("코멘트아이디", commentId);
  };
  return (
    <div>
      <Button onClick={onClick2}>
        <Flex>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </Flex>
        {showButton ? (
          <ButtonList>
            <li>
              <Button onClick={close}>수정</Button>
            </li>
            <li>
              <Button onClick={deleteComment}>삭제</Button>
            </li>
          </ButtonList>
        ) : null}
      </Button>
    </div>
  );
};

export default CommentUpdateButton;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-right: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  border: 0;
  position: relative;
`;
const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.54);
`;
const ButtonList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 2px;
  border: 1px solid #d4d4d4;
  box-shadow: 0 3px 4px rgb(0 0 0 / 30%);
  background: #fff;
  min-width: 60px;
  text-align: center;
  z-index: 9;
  > li {
    padding: 10px;
    color: #676363;
    &:hover {
      background-color: rgb(0 0 0 / 5%);
    }
  }
`;
