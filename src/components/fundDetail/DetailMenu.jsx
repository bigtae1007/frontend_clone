import React from "react";
import styled from "styled-components";

const DetailMenu = ({ supportersCount }) => {
  return (
    <WrapMenu>
      <div>스토리</div>
      <div>반환 · 정책</div>
      <div>새소식</div>
      <div>커뮤니티</div>
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
