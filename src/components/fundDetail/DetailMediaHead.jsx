import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DetailMediaHead = ({ title }) => {
  const navigate = useNavigate();
  return (
    <WrapMediaHead>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        &#5176;
      </button>
      <p>
        {title} <span>I 와디즈 펀딩</span>
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        &#8962;
      </button>
    </WrapMediaHead>
  );
};

export default DetailMediaHead;

const WrapMediaHead = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  p {
    display: -webkit-box;
    width: 100%;
    height: 20px;
    white-space: normal;
    text-align: center;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 600;
  }
  button {
    height: 30px;
    font-size: 20px;
    border: none;
    background-color: var(--white);
  }
  @media screen and (min-width: 1330px) {
    display: none;
  }
`;
