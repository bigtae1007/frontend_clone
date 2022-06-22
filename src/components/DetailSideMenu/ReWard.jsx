import React, { useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";
//컴포넌트
import RewardCard from "./RewardCard";
import Button from "../../elem/Button";
//이미지
import together from "../../images/together.png";
import ranking from "../../images/ranking.png";
const ReWard = () => {
  const rewardList = useSelector((state) => state.reward.reward);
  const [scrollEndPoint, setScrollEndPoint] = useState(false);
  const endPoint = useRef();

  const handleScroll = (e) => {
    const scrollTop = document.documentElement.scrollTop;
    console.log(endPoint.current.offsetHeight + endPoint.current.offsetTop);
    console.log(scrollTop);
    if (
      scrollTop > endPoint.current.offsetHeight + endPoint.current.offsetTop &&
      endPoint.current.offsetHeight + endPoint.current.offsetTop !== 0
    ) {
      setScrollEndPoint(true);
    } else {
      setScrollEndPoint(false);
    }
  };
  React.useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <WrapRewardCard ref={endPoint}>
        <p>리워드 선택</p>
        <div>
          {rewardList.map((v, l) => {
            return <RewardCard key={l} rewardData={v} />;
          })}
          {scrollEndPoint ? (
            <WrapEndPoint>
              <Button size="size1" color="white">
                펀딩하기
              </Button>
              <img src={ranking} alt="펀딩 랭킹" />
              <img src={together} alt="펀딩 추천" />
            </WrapEndPoint>
          ) : null}
        </div>
      </WrapRewardCard>
      {!scrollEndPoint ? (
        <>
          <Img src={ranking} alt="펀딩 랭킹" />
          <Img src={together} alt="펀딩 추천" />
        </>
      ) : null}
    </>
  );
};

export default ReWard;

const WrapRewardCard = styled.div`
  position: relative;
  margin-bottom: 40px;
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

const WrapEndPoint = styled.div`
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 284px;
  img {
    border: 1px solid var(--dGrey);
  }
`;

const Img = styled.img`
  margin-bottom: 20px;
  width: 284px;
  border: 1px solid var(--dGrey);
`;
