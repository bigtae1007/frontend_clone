import React, { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const Post = () => {
  const [showPost, setshowPost] = useState(false);
  const openPostForm = () => {
    setshowPost(true);
  };
  const closePostForm = () => {
    setshowPost(false);
  };
  return (
    <PostWrap>
      <PostBox>
        <PostTitle>응원·의견·체험리뷰</PostTitle>
        <PostText>펀딩 종료전에 남긴 글입니다.</PostText>
        <Button
          onClick={() => {
            setshowPost(!showPost);
          }}
        >
          글 남기기
        </Button>
      </PostBox>
      {showPost === true ? (
        <div style={{ boxSizing: "content-box" }}>
          {/* 로그인안된 경우 */}
          {/* <LoginModal /> */}
          {/* 로그인된 경우 */}
          <PostForm setshowPost={setshowPost} showPost={showPost} />
        </div>
      ) : null}
      <PostList />
    </PostWrap>
  );
};

export default Post;
const PostWrap = styled.div`
  width: 632px;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 5%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const PostBox = styled.div`
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #90949c;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const PostTitle = styled.h2`
  line-height: 24px;
  color: rgba(0, 0, 0, 0.84);
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 8px;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;
const PostText = styled.p`
  margin-bottom: 24px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 13px;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;
const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  cursor: pointer;
  padding: 0 1.41176em;
  height: 48px;
  vertical-align: middle;
  line-height: 1;
  font-size: 17px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  padding-top: 0.07em;
  border-color: #60656a;
  background-color: #90949c;
  color: #fff;
  width: 343px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;