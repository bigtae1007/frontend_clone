import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CommentUpdateButton from "./CommentUpdateButton";
import userimg from "../../images/userimage.png";
import { __loadPosts } from "../../redux/modules/post";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { __updateComment } from "../../redux/modules/comment";
const CommentList = (props) => {
  const { fundId, replyId } = props;
  const [toggleBtn, setToggleBtn] = useState(true);
  const dispatch = useDispatch();
  const CommentMap = useSelector((state) => state.comment.list);
  useEffect(() => {
    dispatch(__loadPosts(fundId));
  }, [dispatch]);

  const commentRef = useRef();
  const updateComment = () => {
    dispatch(
      __updateComment({
        replyContent: commentRef.current.value,
        id: replyId,
      })
    );
    setToggleBtn(true);
  };
  const openUpdateForm = () => {
    setToggleBtn(true);
  };
  const closeUpdateForm = () => {
    setToggleBtn(false);
  };
  return CommentMap.map((value, index) => {
    return (
      <Flex key={index}>
        <div>
          <ContentImg src={userimg} />
        </div>
        <FlexRight>
          <FlexTop>
            <Username>
              Username
              <Text>5초전</Text>
            </Username>
            <CommentUpdateButton
              open={openUpdateForm}
              close={closeUpdateForm}
              commentId={value.commentId}
            />
          </FlexTop>

          <ContentText>{value.replyContent}</ContentText>

          <CommentLabel>
            <CommentInput maxlength="2000" maxheight="400" ref={commentRef}>
              {value.replyContent}
            </CommentInput>
            <CommentButton
              onClick={() =>
                updateComment({
                  replyId: value.replyId,
                })
              }
            >
              등록
            </CommentButton>
          </CommentLabel>
        </FlexRight>
      </Flex>
    );
  });
};

export default CommentList;

const Flex = styled.div`
  display: flex;
  gap: 15px;
  padding: 16px;
`;
const FlexRight = styled.div`
  width: 100%;
`;
const FlexTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Text = styled.span`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin-left: 5px;
`;
const ContentText = styled.p`
  padding: 10px 0;
  color: #44484b;
`;

const ContentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;
const Username = styled.p`
  margin-left: 0;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.84);
  font-size: 15px;
  font-weight: 700;
`;
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
  overflow: hidden;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  overflow-y: hidden;
  resize: none;
  height: 108px;
  outline-color: #00c4c4;
`;
const CommentButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 4px;
  background-color: #00c4c4;
  color: #fff;
  border: 0;
  padding: 10px 20px;
`;
