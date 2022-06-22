import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
// 컴포넌트
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";
import DetailMenu from "./DetailMenu";
import DetailSideMenu from "../DetailSideMenu";
import { __getLoadDetailFund } from "../../redux/modules/funding";
import DetailMediaHead from "./DetailMediaHead";

const DetailMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // 세부정보 호출
  useEffect(() => {
    dispatch(__getLoadDetailFund(id));
  }, []);
  const fundDetailData = useSelector((state) => state.funding.fundDetail);
  return (
    <div>
      <DetailMediaHead title={fundDetailData.title} />
      <DetailHeader
        title={fundDetailData.title}
        category={fundDetailData.category}
        img={fundDetailData.imageURL}
      />
      <DetailMenu supportersCount={fundDetailData.supportersCount} menu="1" />
      <WrapContent>
        <DetailContent
          title={fundDetailData.title}
          content={fundDetailData.content}
          img={fundDetailData.imageURL}
          goal={fundDetailData.fundingGoal}
          expDate={fundDetailData.expDate}
          currentFund={fundDetailData.currentFund}
          supportersCount={fundDetailData.supportersCount}
          supporters={fundDetailData.supporters}
          likeCheck={fundDetailData.likeCheck}
          likeCount={fundDetailData.likeCount}
        />
        <MediaDiv>
          <DetailSideMenu
            goal={fundDetailData.fundingGoal}
            currentFund={fundDetailData.currentFund}
            expDate={fundDetailData.expDate}
            supportersCount={fundDetailData.supportersCount}
            supporters={fundDetailData.supporters}
            likeCheck={fundDetailData.likeCheck}
            likeCount={fundDetailData.likeCount}
          />
        </MediaDiv>
      </WrapContent>
    </div>
  );
};

export default DetailMain;

const WrapContent = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  gap: 2%;
  width: 100%;
`;

const MediaDiv = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
