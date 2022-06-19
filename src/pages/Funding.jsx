import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
//컴포넌트
import FundingContent from "../components/funding/FundingContent";
import FundingHead from "../components/funding/FundingHead";
import FundingForm from "../components/funding/FundingForm";
const Funding = () => {
  // 해당 fund 제목 가져오기
  const fundTitle = useSelector((state) => state.funding.fundDetail.title);
  // 해당 fund reward 목록 가져오기
  const fundReward = useSelector((state) => state.reward.reward);
  return (
    <WrapFunding>
      <FundingHead title={fundTitle} />
      <div>
        <FundingContent />
        <FundingForm title={fundTitle} fundReward={fundReward} />
      </div>
    </WrapFunding>
  );
};

export default Funding;

const WrapFunding = styled.div`
  width: 100%;
  > div:last-child {
    width: 50%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;
