import React from "react";
import styled from "styled-components";

const DetailContentMain = ({ content }) => {
  return (
    <WrapImg>
      <img src={content} alt="상세 정보 이미지" />;
    </WrapImg>
  );
};

export default DetailContentMain;

const WrapImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
