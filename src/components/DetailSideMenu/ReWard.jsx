import React from "react";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import RewardCard from "./RewardCard";

const ReWard = () => {
  const rewardList = useSelector((state) => state.reward.reward);
  console.log(rewardList);
  return (
    <WrapRewardCard>
      <p>리워드 선택</p>
      <div>
        {rewardList.map((v, l) => {
          return <RewardCard key={l} rewardData={v} />;
        })}
      </div>
    </WrapRewardCard>
  );
};

export default ReWard;

const WrapRewardCard = styled.div`
  > p {
    margin: 20px 0 10px;
    font-size: 14px;
    font-weight: 600;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
