import React from "react";
import styled from "styled-components";
import useSlicePrice from "../../custom/slicePrice";

const RewardCard = ({ rewardData }) => {
  const slicePrice = useSlicePrice(String(rewardData.price));
  const slicedeliver = useSlicePrice(String(rewardData.deliveryFee));
  const newContent = rewardData.rewardContent.split("/n");
  console.log(newContent);
  return (
    <WrapReWard>
      <h3 style={{ marginBottom: "10px" }}>{slicePrice}원 펀딩</h3>
      <p style={{ marginBottom: "10px" }}>{rewardData.rewardTitle}</p>
      {newContent.map((v, l) => {
        return (
          <pre key={l} style={{ marginBottom: "20px" }}>
            {v}
          </pre>
        );
      })}
      <span style={{ marginBottom: "5px" }}>배송비</span>
      <p style={{ marginBottom: "10px" }}>{slicedeliver}원</p>

      <span style={{ marginBottom: "5px" }}>리워드 발송 시작일</span>
      <p style={{ marginBottom: "15px" }}>2022년 08월 말 (21~30) 예정</p>

      <div>
        <span>제한수량 {rewardData.quantityLimit}개</span>
        <span>
          현재 {rewardData.quantityLimit - rewardData.quantity}개 남음!
        </span>
      </div>
      <span>총 {rewardData.quantity}개 펀딩 완료</span>
    </WrapReWard>
  );
};

export default RewardCard;
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
  > div {
    display: flex;
    gap: 10px;
    span {
      font-weight: 600;
      color: var(--aquaD);
    }
    span:last-child {
      padding: 1px 3px;
      background-color: var(--aqua);
    }
  }
`;
