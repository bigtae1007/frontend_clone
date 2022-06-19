import React from "react";
import styled from "styled-components";
//커스텀
import useSlicePrice from "../../custom/slicePrice";

const FundingRewardCard = ({ reward, checkState, setCheckState }) => {
  const slicePrice = useSlicePrice(reward.price);
  const slicedeliver = useSlicePrice(reward.deliveryFee);
  return (
    <WrapReWard>
      <h3 style={{ marginBottom: "10px" }}>{slicePrice}원 펀딩합니다.</h3>
      <p style={{ marginBottom: "10px" }}>
        {reward.rewardTitle}{" "}
        <span>({reward.quantityLimit - reward.quantity}개 남음)</span>
      </p>
      <pre style={{ marginBottom: "20px" }}>{reward.rewardContent}</pre>
      <span style={{ marginBottom: "5px" }}>
        배송비 {slicedeliver}원 | 리워드 제공 예상일 : 2022년 08월 말 (21~30)
        예정
      </span>
    </WrapReWard>
  );
};

export default FundingRewardCard;
const WrapReWard = styled.div`
  padding: 20px;
  border: 1px solid var(--grey);
  h3 {
    font-size: 16px;
  }
  pre {
    overflow: auto;
    white-space: pre-wrap;
    font-size: 12px;
    color: #929292;
  }
  > p {
    font-size: 14px;
  }
  span {
    font-size: 12px;
    color: var(--dGrey);
  }
  > span:last-child {
    color: var(--black);
    font-weight: 600;
  }
`;
