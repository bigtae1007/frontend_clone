import React, { useState } from "react";
import styled from "styled-components";
import userimg from "../../images/userimage.png";
import PostUpdateButton from "./PostUpdateButton";
import CommentList from "./CommentList";
import CommentPost from "./CommentPost";
import CommentLogin from "./CommentLogin";
import { useSelector } from "react-redux";

const PostCard = ({ value }) => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const [showComment, setshowComment] = useState(false);

  const toggleComment = () => {
    setshowComment(!showComment);
  };

  return (
    <Flex>
      <div>
        <ContentImg src="https://cdn.wadiz.kr/wwwwadiz/green001/sns_profile_pics/20220320224907662_23473161.jpg/wadiz/thumbnail/36/format/jpg/quality/95/optimize/" />
      </div>
      <FlexRight>
        <FlexTop>
          <Username>
            {value?.nickname}
            <Text>
              {value?.category} · {value?.calculatedTime}
            </Text>
          </Username>
          <PostUpdateButton commentId={value?.commentId} />
        </FlexTop>
        <ContentText>{value?.content}</ContentText>
        <Button onClick={toggleComment}>답글</Button>
        {showComment === true ? (
          <FlexCol>
            <CommentList
              fundId={value?.fundId}
              replyResponseDto={value?.replyResponseDto}
            />
            <CommentWrap>
              <CommentImg src={userimg} />
              {isLogin ? (
                <CommentPost commentId={value?.commentId} />
              ) : (
                <CommentLogin />
              )}
            </CommentWrap>
          </FlexCol>
        ) : null}
      </FlexRight>
    </Flex>
  );
};

export default PostCard;

const Flex = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
`;
const FlexRight = styled.div`
  width: 100%;
`;
const FlexTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
`;
const Text = styled.span`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin-left: 5px;
`;
const ContentText = styled.p`
  padding-top: 10px;
  padding-bottom: 20px;
  color: #44484b;
`;

const ContentImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`;
const Username = styled.p`
  margin-left: 0;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.84);
  font-size: 15px;
  font-weight: 700;
`;
const Button = styled.button`
  background-color: #fff;
  padding: 0 5px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  border-radius: 3px;
  width: 40px;
  margin-bottom: 5px;
`;
const CommentWrap = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;
const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;
