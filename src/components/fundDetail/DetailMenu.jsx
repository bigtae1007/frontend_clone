import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailMenu = ({ supportersCount }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <WrapMenu>
      <div
        onClick={() => {
          navigate(`/fund/detail/story/${id}`);
        }}
      >
        스토리
      </div>
      <div>반환 · 정책</div>
      <div>새소식</div>
      <div
        onClick={() => {
          navigate(`/fund/detail/${id}/cummunity`);
        }}
      >
        커뮤니티
      </div>
      <div>
        서포터 <span>{supportersCount}</span>
      </div>
    </WrapMenu>
  );
};

export default DetailMenu;

const WrapMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  border-bottom: 1px solid var(--grey);
  > div {
    cursor: pointer;
    padding: 10px 0;
    font-size: 14px;
    > span {
      position: relative;
      top: -2px;
      color: #00b2b2;
      font-size: 12px;
    }
  }
  div:first-child {
    border-bottom: 2px solid var(--aquaD);
  }
`;
