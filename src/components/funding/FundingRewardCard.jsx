import React, { useEffect, useState } from "react";
import styled from "styled-components";
//커스텀
import useSlicePrice from "../../custom/slicePrice";

const FundingRewardCard = ({
  reward,
  patronState,
  setPatronState,
  patronPrice,
  setPatronPrice,
}) => {
  const [countState, setCountState] = useState(false);
  const [count, setCount] = useState(1);

  const slicePrice = useSlicePrice(reward.price);
  const slicedeliver = useSlicePrice(reward.deliveryFee);
  // 체크 상태 확인
  const changeCheck = (e) => {
    if (e.target.checked) {
      setCountState(true);
    } else {
      setCountState(false);
    }
  };
  //수량 체크
  const changeCount = (e) => {
    setCount(e.target.value);
  };
  // 수량 저장
  useEffect(() => {
    if (countState) {
      setPatronState({ ...patronState, [reward.rewardId]: count });
      setPatronPrice({
        ...patronPrice,
        [reward.rewardId]: count * reward.price,
      });
    } else {
      setPatronState({ ...patronState, [reward.rewardId]: null });
      setPatronPrice({
        ...patronPrice,
        [reward.rewardId]: 0,
      });
    }
  }, [count, countState]);

  return (
    <>
      {reward.quantityLimit - reward.quantity !== 0 ? (
        <HideInput
          id={reward.rewardId}
          type="checkbox"
          onChange={changeCheck}
        />
      ) : null}
      <CheckLabel
        htmlFor={reward.rewardId}
        state={reward.quantityLimit - reward.quantity !== 0}
      >
        <h3 style={{ marginBottom: "10px" }}>{slicePrice}원 펀딩합니다.</h3>
        <p style={{ marginBottom: "10px" }}>
          {reward.rewardTitle}{" "}
          {reward.quantityLimit - reward.quantity !== 0 ? (
            <span>({reward.quantityLimit - reward.quantity}개 남음)</span>
          ) : (
            <span style={{ color: "var(--red)", fontWeight: "bolder" }}>
              마감
            </span>
          )}
        </p>
        <pre style={{ marginBottom: "20px" }}>{reward.rewardContent}</pre>
        <span style={{ marginBottom: "5px" }}>
          배송비 {slicedeliver}원 | 리워드 제공 예상일 : 2022년 08월 말 (21~30)
          예정
        </span>
        {countState ? (
          <CountDiv>
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(Number(count) - 1);
                } else {
                  alert("최소 수량은 1개입니다");
                }
              }}
            >
              -
            </button>
            <CountInput type="number" value={count} onChange={changeCount} />
            <button
              onClick={() => {
                if (count < reward.quantityLimit - reward.quantity) {
                  setCount(Number(count) + 1);
                } else {
                  alert("남은 수량을 초과했습니다.");
                }
              }}
            >
              +
            </button>
          </CountDiv>
        ) : null}
      </CheckLabel>
    </>
  );
};

export default FundingRewardCard;

const CheckLabel = styled.label`
  position: relative;
  background-color: ${({ state }) => (state ? "var(--white)" : "var(--grey)")};
  display: flex;
  flex-direction: column;
  user-select: none;
  padding: 20px;
  border: 1px solid var(--grey);

  &:before {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid gainsboro;
    border-radius: 0.35rem;
  }
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid transparent;
    border-radius: 0.35rem;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--aquaD);
  }
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
const HideInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  &:checked + ${CheckLabel} {
    background-color: var(--aqua);
    :after {
      opacity: 1;
    }
  }
  &:focus + ${CheckLabel} {
    &:before {
      outline: 2px solid blue;
    }
  }
  &:focus:not(:focus-visible) + ${CheckLabel} {
    :before {
      outline: none;
    }
  }
`;
const CountDiv = styled.div`
  display: flex;
  gap: 5px;
  height: 30px;
  > button {
    width: 30px;
    font-size: 1.5rem;
    line-height: 0px;
    background-color: var(--white);
    border: 1px solid var(--grey);
  }
`;
const CountInput = styled.input`
  width: 50px;
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
