import React from "react";
import styled from "styled-components";
// 커스텀
import useSlicePrice from "../../custom/slicePrice";
const FundCard = ({ fundData }) => {
  const newPrice = useSlicePrice(fundData.currentFund);
  const successPercent = parseInt(
    (fundData.currentFund / fundData.fundingGoal) * 100
  );
  return (
    <WrapCard>
      <img src={fundData.imageURL} alt="메인사진" />
      <WrapText>
        <h3>{fundData.title}</h3>
        <div>
          <span> {fundData.category} </span>
          <span>{fundData.supporters}</span>
        </div>
      </WrapText>
      <SuccessBar percent={successPercent}>
        <div></div>
      </SuccessBar>
      <GoalPrice>
        <div>
          <span>{successPercent}%</span>
        </div>
        <div>
          <span> · {newPrice}원</span>
          <span>{fundData.expDate}남음</span>
        </div>
      </GoalPrice>
    </WrapCard>
  );
};

export default FundCard;
const WrapCard = styled.div`
  min-width: 210px;
  min-height: auto;
  max-width: 310px;
  img {
    width: 100%;
  }
`;

const WrapText = styled.div`
  margin: 10px 0;
  h3 {
    display: -webkit-box;
    width: 100%;
    height: 50px;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div > span {
    padding: 0 5px;
    color: var(--dGrey);
    font-size: 0.9rem;
    font-weight: 600;
  }
  div > span:first-child {
    border-right: 1px solid var(--dGrey);
  }
`;
const SuccessBar = styled.div`
  height: 3px;
  background-color: var(--grey);
  overflow: hidden;
  div {
    height: 3px;
    background-color: var(--aquaD);
    width: ${({ percent }) => `${percent}%`};
  }
`;

const GoalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;

  div:last-child {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dGrey);
  }
  div:first-child > span:first-child {
    margin-right: 5px;
    color: var(--aquaD);
    font-weight: 600;
    font-size: 1.3rem;
  }
`;
