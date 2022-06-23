import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//컴포넌트
import FundingContent from "../components/funding/FundingContent";
import FundingHead from "../components/funding/FundingHead";
import FundingForm from "../components/funding/FundingForm";
import { __getLoadRewardList } from "../redux/modules/reward";
const Funding = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // 해당 fund 제목 가져오기
  const fundTitle = useSelector((state) => state.funding.fundDetail.title);
  // 해당 fund reward 목록 가져오기
  const fundReward = useSelector((state) => state.reward.reward);

  useEffect(() => {
    dispatch(__getLoadRewardList(id));
  }, []);
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
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`;
