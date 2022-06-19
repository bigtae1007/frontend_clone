import React, { useEffect, useState } from "react";
import styled from "styled-components";
//컴포넌트
import FundingRewardCard from "./FundingRewardCard";
import Button from "../../elem/Button";
// 이미지
import checkState1 from "../../images/checkState1.png";
import checkState2 from "../../images/checkState2.png";

const FundingForm = ({ fundReward, title }) => {
  const [checkState, setCheckState] = useState([]);
  return (
    <div>
      <WrapRewardCard>
        {fundReward.map((v, l) => {
          return (
            <FundingRewardCard
              key={v.rewardId}
              reward={v}
              checkState={checkState}
              setCheckState={setCheckState}
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
            <input type="text" placeholder="0" />
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
            <input type="checkbox" />
            <label>이름 비공개</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>펀딩금액 비공개</label>
          </div>
        </SelectDisclosure>
        <SelectDisclosureImg>
          <img src={checkState1} alt="" />
          <img src={checkState2} alt="" />
        </SelectDisclosureImg>
      </WrapSelectDisclosure>
      <PriceTotal>
        <p>
          {title}에 <span>0</span> 원을 펀딩합니다.
        </p>
        <Button size="size3" color="white">
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
