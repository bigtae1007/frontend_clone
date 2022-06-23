import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
// 컴포넌트
import Button from "../elem/Button";
import ReWard from "./DetailSideMenu/ReWard";
// 훅
import useSlicePrice from "../custom/slicePrice";
// 이미지
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import point from "../images/point.png";
import partner from "../images/partner.png";
// 모듈
import { __getLoadRewardList } from "../redux/modules/reward";

const DetailSideMenu = ({
  goal,
  currentFund,
  expDate,
  supportersCount,
  supporters,
  likeCheck,
  likeCount,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isLogin = useSelector((state) => state.user.isLogin);
  const successPercent = parseInt((currentFund / goal) * 100);
  const slicePrice = useSlicePrice(String(currentFund));

  // 반응형을 위한 react-responsive 변수
  const middleMedia = useMediaQuery({
    query: "(max-width : 700px)",
  });

  useEffect(() => {
    dispatch(__getLoadRewardList(id));
  }, []);

  const checkLogin = () => {
    if (isLogin) {
      navigate(`/fund/funding/${id}`);
    } else {
      alert("로그인 후 이용해 주세요");
    }
  };
  return (
    <WrapSlideMenu>
      {middleMedia ? (
        <>
          <MediaGoalDiv>
            <h2>16일 남음</h2>
            <h3>
              {successPercent} <span> % 달성</span>
            </h3>
          </MediaGoalDiv>
          <SuccessBar percent={successPercent}>
            <div></div>
          </SuccessBar>
          <WrapText>
            <h3>
              {slicePrice} <span> 원 펀딩</span>
            </h3>
            <h3>
              {supportersCount} <span> 명의 서포터</span>
            </h3>
          </WrapText>
        </>
      ) : (
        <>
          <h2>16일 남음</h2>
          <SuccessBar percent={successPercent}>
            <div></div>
          </SuccessBar>
          <WrapText>
            <h3>
              {successPercent} <span> % 달성</span>
            </h3>
            <h3>
              {slicePrice} <span> 원 펀딩</span>
            </h3>
            <h3>
              {supportersCount} <span> 100 명의 서포터</span>
            </h3>
          </WrapText>
        </>
      )}
      <Button size="size1" color="white" onClick={checkLogin}>
        펀딩하기
      </Button>
      <WrapBtn>
        <button>
          <Heart state={true}>♥</Heart>
          <span>100</span>
          {likeCount}
        </button>
        <button>문의</button>
        <button>공유하기</button>
      </WrapBtn>
      <MediaImgDiv>
        <ImgVeiw src={banner1} alt="#" />
        <ImgVeiw src={banner2} alt="#" />
        <ImgVeiw src={point} alt="#" />
      </MediaImgDiv>
      {!middleMedia && (
        <ImgVeiw style={{ margin: "30px 0" }} src={partner} alt="#" />
      )}
      <MakerInfo>
        <p>메이커 정보</p>
        <div>
          <div>
            <img
              src="https://hanghae99.spartacodingclub.kr/static/images/logo.svg"
              alt="회사 로고"
            />
            <h3>스파르타 코딩 클럽</h3>
          </div>
          <DetailInfo>
            <div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiMwMEM0QzQiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04IDhjLTEuNjUzLS4wMS0zLTEuMy0zLTMuMDQyQzUgMy4zNDMgNi4zNDcgMiA4IDJzMyAxLjM0MyAzIDIuOTU4QzExIDYuNjk5IDkuNjUzIDguMDEgOCA4ek0xMy4zMTIgMTRIMi42ODhDMi4yMTQgMTQgMiAxMy42OTggMiAxMy4yNzQgMiAxMi4wMjMgMy45MTcgOC43NSA4IDguNzVzNiAzLjI3MyA2IDQuNTI0YzAgLjQyNC0uMjE0LjcyNi0uNjg4LjcyNnoiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgPC9nPgo8L3N2Zz4K"
                  alt="사람이미지 로고"
                />
                <span>서포터 100 명</span>
              </div>
              <div>
                <p>펀딩.스토어 합산</p>
                <QuestionIcon></QuestionIcon>
              </div>
            </div>
          </DetailInfo>
          <PercentDiv>
            <div>
              <p>평판</p>
              <div></div>
            </div>
            <div>
              <p>소통</p>
              <div></div>
            </div>
            <div>
              <p>인기</p>
              <div></div>
            </div>
          </PercentDiv>
          <div>
            <InfoQuestion>문의하기</InfoQuestion>
            <Button size="size2" color="white">
              + 팔로우
            </Button>
          </div>
        </div>
      </MakerInfo>
      {!middleMedia && <ReWard />}
    </WrapSlideMenu>
  );
};

export default DetailSideMenu;
const WrapSlideMenu = styled.div`
  width: 284px;
  @media screen and (max-width: 700px) {
    *:not(Button) {
      display: none;
    }
    > Button {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const SuccessBar = styled.div`
  width: 284px;
  margin: 20px 0;
  height: 3px;
  background-color: var(--grey);
  overflow: hidden;
  div {
    height: 3px;
    background-color: var(--aquaD);
    width: ${({ percent }) => `${percent}%`};
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Heart = styled.span`
  color: ${({ state }) => (state ? "var(--red)" : "var(--grey)")};
`;

const WrapText = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  h3 {
    font-size: 16px;
    font-weight: 600;
    > span {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 20px;
  width: 284px;
  button {
    width: 100%;
    height: 45px;
    background-color: var(--white);
    border: 1px solid var(--grey);
    border-radius: 5px;
    :hover {
      background-color: var(--grey);
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const MakerInfo = styled.div`
  > p {
    margin: 20px 0;
    font-size: 12px;
  }
  > div {
    padding: 10px;
    border: 1px solid var(--grey);
    border-radius: 5px;
    > div {
      display: flex;
      align-items: center;
      > img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      > h3 {
        padding-left: 20px;
      }
    }
  }
`;
const DetailInfo = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    margin: 10px 0;
    div {
      display: flex;
      p {
        font-size: 10px;
        color: var(--dGrey);
      }
    }
  }
`;

const QuestionIcon = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid var(--grey);
  border-radius: 50%;
  background-image: url(https://c7.hotpng.com/preview/765/504/13/question-mark-white-computer-icons-clip-art-question-mark.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const PercentDiv = styled.div`
  display: flex;
  gap: 30px;
  > div {
    width: 100%;
    p {
      margin-bottom: 8px;
      font-size: 14px;
    }
    div {
      height: 2px;
      border: 2px solid var(--grey);
      border-radius: 3px;
    }
  }
`;

const InfoQuestion = styled.button`
  margin: 20px 0;
  margin-right: 20px;
  width: 50%;
  height: 40px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 10px;
  :hover {
    background-color: var(--grey);
  }
`;
const ImgVeiw = styled.img`
  margin: 10px 0;
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 400px;
    margin: 0 auto;
    height: 50px;
  }
`;

// 반응형 추가 부분

const MediaGoalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--dGrey);
  margin-top: 20px;
  h2,
  h3 {
    font-size: 16px;
  }
`;

const MediaImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
