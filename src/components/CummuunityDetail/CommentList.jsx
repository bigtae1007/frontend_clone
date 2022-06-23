import React from "react";

import ReplyCard from "./ReplyCard";
const CommentList = ({ replyResponseDto }) => {
  return replyResponseDto.map((value, index) => {
    return <ReplyCard key={index} value={value} />;
  });
};

export default CommentList;
