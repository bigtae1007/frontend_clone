import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import ReplyCard from "./ReplyCard";
const CommentList = ({ replyId }) => {
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
