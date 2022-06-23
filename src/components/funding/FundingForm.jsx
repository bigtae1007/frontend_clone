import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FundingRewardCard from "./FundingRewardCard";
import Button from "../../elem/Button";
// 이미지
import checkState1 from "../../images/checkState1.png";
import checkState2 from "../../images/checkState2.png";
import { useDispatch } from "react-redux";
//모듈
import { __funding } from "../../redux/modules/reward";

const FundingForm = ({ fundReward, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  //
  const [patronState, setPatronState] = useState({});
  // 비공개 선택 사항 상태
  const [checkHidden, setCheckHidden] = useState({
    isNameHidden: false,
    isPriceHidden: false,
  });
  const [patronPrice, setPatronPrice] = useState({});
  const [totalPatron, setTotalPatron] = useState(0);
  const [plusPatron, setPlusPatron] = useState(0);
  // 펀딩하기
  const sendFunding = async () => {
    const payload = {
      orderedRewards: [],
      patron: Number(Number(totalPatron) + Number(plusPatron)),
      isNameHidden: checkHidden.isNameHidden,
      isPriceHidden: checkHidden.isPriceHidden,
    };
    // 반복하여 각 리워드와 수량 추가하기
    for (let key in patronState) {
      if (patronState[key]) {
        payload.orderedRewards.push({
          rewardId: key,
          quantity: Number(patronState[key]),
        });
      }
    }
    const res = await dispatch(__funding({ payload, id: id }));
    // 펀딩 성공 시 alert 후 상세페이지로 이동
    if (res) {
      alert("회원님의 펀딩에 감사합니다!");
      navigate(-1);
    }
  };
  //비공개 변경하기
  const changeHidden = (e) => {
    setCheckHidden({ ...checkHidden, [e.target.id]: e.target.checked });
  };

  // 추가 후원금액 변경
  const changePlusPatron = (e) => {
    if (e.target.value >= 0) {
      setPlusPatron(e.target.value);
    } else {
      alert("0 보다 작은 숫자는 입력할 수 없습니다.");
      setPlusPatron(0);
      e.target.value = 0;
    }
  };

  // 펀딩금액 합치기 (reward 항목)
  useEffect(() => {
    let total = 0;
    for (const key in patronPrice) {
      total += patronPrice[key];
    }
    setTotalPatron(total);
  }, [patronPrice]);
  return (
    <div>
      <WrapRewardCard>
        {fundReward.map((v, l) => {
          return (
            <FundingRewardCard
              key={v.rewardId}
              reward={v}
              patronState={patronState}
              setPatronState={setPatronState}
              patronPrice={patronPrice}
              setPatronPrice={setPatronPrice}
            />
          );
        })}
      </WrapRewardCard>
      <WrapSelectText>
        <h3>후원금 더하기 (선택)</h3>
        <div>
          <p>
            후원금을 더하여 펀딩할 수 있습니다. 추가 후원금을 입력하시겠습니까?
          </p>
          <div>
            <input type="number" placeholder="0" onChange={changePlusPatron} />
            <p>원을 추가로 후원합니다.</p>
          </div>
        </div>
      </WrapSelectText>
      <WrapSelectText>
        <h3>공개여부 (선택)</h3>
        <div>
          <p>
            서포터 목록에 서포터 이름과 펀딩 금액이 공개됩니다. 조용히 펀딩하고
            싶으시다면, 비공개로 선택해주세요.
          </p>
          <span>
            커뮤니티, 새소식 댓글 작성 시에는 비공개 여부와 상관없이 퍼딩 참여자
            표시가 노출됩니다.
          </span>
        </div>
      </WrapSelectText>
      <WrapSelectDisclosure>
        <SelectDisclosure>
          <div>
            <HideInput
              id="isNameHidden"
              type="checkbox"
              onChange={changeHidden}
            />
            <CheckLabel htmlFor="isNameHidden">
              <p>이름 비공개</p>
            </CheckLabel>
          </div>
          <div>
            <HideInput
              id="isPriceHidden"
              type="checkbox"
              onChange={changeHidden}
            />
            <CheckLabel htmlFor="isPriceHidden">
              <p>펀딩금액 비공개</p>
            </CheckLabel>
          </div>
        </SelectDisclosure>
        <SelectDisclosureImg>
          <img src={checkState1} alt="" />
          <img src={checkState2} alt="" />
        </SelectDisclosureImg>
      </WrapSelectDisclosure>
      <PriceTotal>
        <p>
          {title}에 <span>{Number(totalPatron) + Number(plusPatron)}</span> 원을
          펀딩합니다.
        </p>
        <Button size="size3" color="white" onClick={sendFunding}>
          펀딩 하기
        </Button>
      </PriceTotal>
    </div>
  );
};

export default FundingForm;

const WrapRewardCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const WrapSelectText = styled.div`
  display: flex;
  margin: 40px 0;
  p,
  span {
    font-size: 0.75rem;
  }
  p {
    margin-bottom: 5px;
  }
  span {
    color: var(--dGrey);
  }
  > h3 {
    font-size: 1rem;
    width: 200px;
  }
  div > div {
    display: flex;
    align-items: center;
    input {
      margin: 0 10px 0 0;
      width: 200px;
      height: 30px;
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
const WrapSelectDisclosure = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const SelectDisclosure = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px dotted var(--black);
  div {
    width: 230px;
  }
`;

const SelectDisclosureImg = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  > img {
    width: 100%;
  }
`;

const PriceTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 50px 0 20px;
    span {
      color: var(--aquaD);
      text-decoration: underline;
      padding: 0 3px;
      font-weight: 600;
    }
  }
  button {
    margin-bottom: 100px;
  }
`;

const CheckLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  & > p {
    margin-left: 10px;
  }
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
