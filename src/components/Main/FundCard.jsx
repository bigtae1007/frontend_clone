import React from "react";
import styled from "styled-components";
// 커스텀
import useSlicePrice from "../../custom/slicePrice";
const FundCard = ({ fundData }) => {
  const newPrice = useSlicePrice(fundData.currentFund);
  const successPercent = (fundData.currentFund / fundData.fundingGoal) * 100;
  return (
    <WrapCard>
      <img src={fundData.imageURL} alt="메인사진" />
      <div>
        <h3>{fundData.title}</h3>
        <p>
          {fundData.category} <span>{fundData.supporters}</span>
        </p>
      </div>
      <SuccessBar>
        <div></div>
      </SuccessBar>
      <div>
        <div>
          <span>{successPercent}%</span>
          <span>{newPrice}원</span>
        </div>
        <span>{fundData.expDate}남음</span>
      </div>
    </WrapCard>
  );
};

export default FundCard;
const WrapCard = styled.div`
  min-width: 210px;
  min-height: auto;
  max-width: 310px;
  border: 1px solid #000;
  img {
    width: 100%;
  }
`;

const SuccessBar = styled.div`
  margin-bottom: 10px;
  height: 3px;
  background-color: var(--grey);
  overflow: hidden;
  div {
    height: 3px;
    background-color: var(--aquaD);
    width: 1000%;
  }
`;
