import React from "react";

import ReplyCard from "./ReplyCard";
const CommentList = ({ replyId }) => {
  return replyId.map((value, index) => {
    return <ReplyCard key={index} value={value} />;
  });
};

export default CommentList;
