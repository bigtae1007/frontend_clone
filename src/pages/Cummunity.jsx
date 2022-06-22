import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailHeader from "../components/fundDetail/DetailHeader";
import DetailMenu from "../components/fundDetail/DetailMenu";
import DetailSideMenu from "../components/DetailSideMenu";
import Post from "../components/CummuunityDetail/Post";
import Header from "../components/Headers/Header";

const Cummunity = () => {
  const fundDetailData = useSelector((state) => state.funding.fundDetail);
  return (
    <div>
      <Header />
      <DetailHeader
        title={fundDetailData.title}
        category={fundDetailData.category}
        img={fundDetailData.imageURL}
      />
      <DetailMenu supportersCount={fundDetailData.supportersCount} menu={4} />
      <WrapContent>
        <Post />
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

export default Cummunity;
const WrapContent = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  gap: 2%;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin: 0;
    display: block;
  }
`;
