import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import userimg from "../../images/userimage.png";
import Comment from "./Comment";
import CommentLogin from "./CommentLogin";

const Content = () => {
  return (
    <>
      <Flex>
        <div>
          <ContentImg src="https://cdn.wadiz.kr/wwwwadiz/green001/sns_profile_pics/20220320224907662_23473161.jpg/wadiz/thumbnail/36/format/jpg/quality/95/optimize/" />
        </div>
        <FlexRight>
          <Username>
            ninkname<Text> · 6시간 전</Text>
          </Username>
          <ContentText></ContentText>
          <Button>답글</Button>
          <CommentWrap>
            <CommentImg src={userimg} />
            {/* 로그인안된 경우 */}
            <CommentLogin />
            {/* 로그인된 경우 */}
            {/* <Comment /> */}
          </CommentWrap>
        </FlexRight>
      </Flex>
    </>
  );
};

export default Content;
const Flex = styled.div`
  display: flex;
  gap: 15px;
`;
const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const CommentWrap = styled.div`
  background: #f5f7fa;
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
