import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate, useParams } from "react-router-dom";
//컴포넌트
import DetailHeader from "../components/fundDetail/DetailHeader";
import DetailMenu from "../components/fundDetail/DetailMenu";
import DetailSideMenu from "../components/DetailSideMenu";
import Post from "../components/CummuunityDetail/Post";
import Header from "../components/Headers/Header";
import DetailMediaHead from "../components/fundDetail/DetailMediaHead";
import Button from "../elem/Button";

const Cummunity = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isLogin = useSelector((state) => state.user.isLogin);
  const fundDetailData = useSelector((state) => state.funding.fundDetail);
  const middleMedia = useMediaQuery({
    query: "(min-width : 1360px)",
  });
  const checkLogin = () => {
    if (isLogin) {
      navigate(`/fund/funding/${id}`);
    } else {
      alert("로그인 후 이용해 주세요");
    }
  };
  return (
    <div>
      {middleMedia && <Header />}
      <DetailMediaHead title={fundDetailData.title} />
      <DetailHeader
        title={fundDetailData.title}
        category={fundDetailData.category}
        img={fundDetailData.imageURL}
      />
      <DetailMenu supportersCount={fundDetailData.supportersCount} menu={4} />
      <WrapContent>
        <Post />
        <WrapSideMenu>
          <DetailSideMenu
            goal={fundDetailData.fundingGoal}
            currentFund={fundDetailData.currentFund}
            expDate={fundDetailData.expDate}
            supportersCount={fundDetailData.supportersCount}
            supporters={fundDetailData.supporters}
            likeCheck={fundDetailData.likeCheck}
            likeCount={fundDetailData.likeCount}
          />
        </WrapSideMenu>
        <WrapBtn>
          <Button size="size1" color="white" onClick={checkLogin}>
            펀딩하기
          </Button>
        </WrapBtn>
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

const WrapSideMenu = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const WrapBtn = styled.div`
  @media screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
