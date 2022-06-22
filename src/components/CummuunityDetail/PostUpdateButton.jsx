import React, { useState } from "react";
import styled from "styled-components";
import PostUpdateModal from "./PostUpdateModal";
import { useDispatch } from "react-redux/es/exports";
import { __deletePost } from "../../redux/modules/post";
import { useParams } from "react-router-dom";

const PostUpdateButton = (props) => {
  const { commentId } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(
      __deletePost({
        id: commentId,
      })
    );
  };
  const [showButton, setshowButton] = useState(false);
  const onClick2 = () => setshowButton(!showButton);

  const [showUpdate, setshowUpdate] = useState(false);
  const openUpdateModal = () => {
    setshowUpdate(true);
  };
  const closeUpdateModal = () => {
    setshowUpdate(false);
  };
  return (
    <div>
      <Button onClick={onClick2}>
        <Flex>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </Flex>
        {showButton === true ? (
          <ButtonList>
            <li>
              <Button
                onClick={() => {
                  setshowUpdate(true);
                }}
              >
                수정
              </Button>
            </li>
            <li>
              <Button onClick={deletePost}>삭제</Button>
            </li>
          </ButtonList>
        ) : null}
      </Button>

      {showUpdate === true ? (
        <PostUpdateModal
          open={openUpdateModal}
          close={closeUpdateModal}
          commentId={commentId}
        />
      ) : null}
    </div>
  );
};

export default PostUpdateButton;
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
