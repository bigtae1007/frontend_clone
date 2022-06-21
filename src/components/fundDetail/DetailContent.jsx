import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//컴포넌트
import DetailSideMenu from "../DetailSideMenu";
import DetailContentMain from "./DetailContentMain";
// 커스텀
import useSlicePrice from "../../custom/slicePrice";
// 이미지
import banner4 from "../../images/banner4.png";
import banner6 from "../../images/banner6.png";

const DetailContent = ({
  content,
  img,
  goal,
  expDate,
  currentFund,
  supportersCount,
  supporters,
  likeCheck,
  likeCount,
  title,
}) => {
  const middleMedia = useMediaQuery({
    query: "(max-width : 700px)",
  });
  const slicePrice = useSlicePrice(String(goal));
  return (
    <WrapContent>
      <WrapMainContent>
        <img src={img} alt="" />
        {middleMedia ? <MediaTitle>{title}</MediaTitle> : null}
        <p>
          당신의 일상을 보다 편리하게 만들어 줄 아웃도어 잇템, 라이프케어
          디바이스 3종을 소개합니다
        </p>
      </WrapMainContent>
      <MediaDiv>
        <DetailSideMenu
          goal={goal}
          currentFund={currentFund}
          expDate={expDate}
          supportersCount={supportersCount}
          supporters={supporters}
          likeCheck={likeCheck}
          likeCount={likeCount}
        />
      </MediaDiv>
      <GoalPriceBox>
        <h4>목표 금액 {slicePrice} 원 </h4>
        <h4>펀딩 기간 2022.06.17 ~ 2022.07.04 </h4>
        <p>
          100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100%
          모이지 않으면 결제가 진행되지 않습니다.
        </p>
      </GoalPriceBox>
      <ImgVeiw src={banner4} alt="#" />
      <HText>프로젝트 스토리</HText>
      <ImgVeiw src={banner6} alt="#" />
      <DetailContentMain content={content} />
    </WrapContent>
  );
};

export default DetailContent;

const WrapContent = styled.div`
  width: 40%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const WrapMainContent = styled.div`
  > img {
    width: 100%;
  }
  > p {
    padding: 5px 10px;
    font-size: 0.9rem;
  }
`;

const GoalPriceBox = styled.div`
  margin: 30px 0;
  padding: 10px;
  background-color: var(--aqua);
  border-radius: 10px;
  font-size: 14px;
  > h4 {
    color: var(--aquaD);
  }
  > p {
    margin-top: 10px;
  }
`;
const ImgVeiw = styled.img`
  width: 100%;
`;

const HText = styled.div`
  margin: 30px 0 20px;
  font-weight: 600;
`;

// 반응형 스타일

const MediaDiv = styled.div`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const MediaTitle = styled.h3`
  padding: 10px;
  font-size: 15px;
  + p {
    font-size: 12px;
  }
`;
