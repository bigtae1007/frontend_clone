import React from "react";
import styled from "styled-components";
// 이미지
import reward from "../../images/reward.png";
const FundingHead = ({ title }) => {
  return (
    <div>
      <TitleHead>
        <h2>{title}</h2>
      </TitleHead>
      <ImgProgress src={reward} alt="" />
    </div>
  );
};

export default FundingHead;

const TitleHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  background: #a29584;
  h2 {
    font-size: 24px;
    color: var(--white);
  }
`;

const ImgProgress = styled.img`
  display: flex;
  margin: 20px auto;
  width: 20%;
  @media screen and (max-width: 1600px) {
    width: 30%;
    @media screen and (max-width: 1000px) {
      width: 50%;
    }
  }
`;
