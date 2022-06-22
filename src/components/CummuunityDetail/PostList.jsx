import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __loadPosts } from "../../redux/modules/post";
import CommentLogin from "./CommentLogin";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";

const PostList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postMap = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(__loadPosts(id));
  }, [dispatch]);
  return postMap.map((value, index) => {
    return <PostCard key={index} value={value} />;
  });
};

export default PostList;
