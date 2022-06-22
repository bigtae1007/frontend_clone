import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { __loadPosts } from "../../redux/modules/post";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { __updateComment } from "../../redux/modules/comment";
import ReplyCard from "./ReplyCard";
const CommentList = ({ replyId }) => {
  console.log(replyId);
  const CommentMap = useSelector((state) => state.comment.list);

  // useEffect(() => {
  // dispatch(__loadPosts(fundId));
  // }, [dispatch]);

  const commentRef = useRef();

  return replyId.map((value, index) => {
    return <ReplyCard key={index} value={value} />;
  });
};

export default CommentList;
