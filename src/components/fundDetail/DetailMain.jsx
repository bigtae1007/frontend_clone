import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";
import DetailMenu from "./DetailMenu";
import DetailSideMenu from "../DetailSideMenu";

const DetailMain = () => {
  const fundDetailData = useSelector((state) => state.funding.fundDetail);
  return (
    <div>
      <DetailHeader
        title={fundDetailData.title}
        category={fundDetailData.category}
        img={fundDetailData.imageURL}
      />
      <DetailMenu supportersCount={fundDetailData.supportersCount} />
      <WrapContent>
        <DetailContent
          content={fundDetailData.content}
          img={fundDetailData.imageURL}
          goal={fundDetailData.fundingGoal}
          expDate={fundDetailData.expDate}
        />
        <DetailSideMenu
          goal={fundDetailData.fundingGoal}
          currentFund={fundDetailData.currentFund}
          expDate={fundDetailData.expDate}
          supportersCount={fundDetailData.supportersCount}
          supporters={fundDetailData.supporters}
          likeCheck={fundDetailData.likeCheck}
          likeCount={fundDetailData.likeCount}
        />
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
