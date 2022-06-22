import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// 커스텀
import useSlicePrice from "../../custom/slicePrice";
const FundCard = ({ fundData }) => {
  const newPrice = useSlicePrice(String(fundData.currentFund));
  const successPercent = parseInt(
    (fundData.currentFund / fundData.fundingGoal) * 100
  );
  return (
    <WrapCard>
      <Link to={`/fund/detail/story/${fundData.fundId}`}>
        <img src={fundData.imageURL} alt="메인사진" />
        <div>
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
              <span>16일 남음</span>
            </div>
          </GoalPrice>
        </div>
      </Link>
    </WrapCard>
  );
};

export default FundCard;
const WrapCard = styled.div`
  min-width: 210px;
  width: 100%;
  min-height: auto;
  max-width: 310px;
  img {
    width: 100%;
    height: 60%;
  }
  @media screen and (max-width: 800px) {
    max-width: 100%;
    a {
      display: flex;
      gap: 20px;
      width: 100%;
      > div {
        width: 100%;
      }
    }
    img {
      width: 120px;
      height: 90px;
    }
  }
`;

const WrapText = styled.div`
  margin: 10px 0;
  h3 {
    display: -webkit-box;
    margin-bottom: 10px;
    width: 100%;
    height: 45px;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
  }
  div > span {
    padding: 0 5px;
    color: var(--dGrey);
    font-size: 13px;
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
    font-size: 13px;
    font-weight: 600;
    color: var(--dGrey);
  }
  div:first-child > span:first-child {
    margin-right: 5px;
    color: var(--aquaD);
    font-weight: 600;
    font-size: 17px;
  }
`;
