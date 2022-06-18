import React from "react";
import styled from "styled-components";
// 컴포넌트
import Button from "../elem/Button";
// 훅
import useSlicePrice from "../custom/slicePrice";
import ReWard from "./DetailSideMenu/ReWard";
// 이미지
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import point from "../images/point.png";
import partner from "../images/partner.png";

const DetailSideMenu = ({
  goal,
  currentFund,
  expDate,
  supportersCount,
  supporters,
  likeCheck,
  likeCount,
}) => {
  const successPercent = parseInt((currentFund / goal) * 100);
  const slicePrice = useSlicePrice(currentFund);

  return (
    <WrapSlideMenu>
      <h2>{expDate}</h2>
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
          {supportersCount} <span> 명의 서포터</span>
        </h3>
      </WrapText>
      <Button size="size1" color="white">
        펀딩하기
      </Button>
      <WrapBtn>
        <button>
          <span>하트</span>
          {likeCount}
        </button>
        <button>문의</button>
        <button>공유하기</button>
      </WrapBtn>
      <ImgVeiw src={banner1} alt="#" />
      <ImgVeiw src={banner2} alt="#" />
      <ImgVeiw src={point} alt="#" />
      <ImgVeiw style={{ margin: "30px 0" }} src={partner} alt="#" />

      <MakerInfo>
        <p>메이커 정보</p>
        <div>
          <div>
            <img
              src="https://hanghae99.spartacodingclub.kr/static/images/logo.svg"
              alt="회사 로고"
            />
            <h3>{supporters}</h3>
          </div>
          <DetailInfo>
            <div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiMwMEM0QzQiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04IDhjLTEuNjUzLS4wMS0zLTEuMy0zLTMuMDQyQzUgMy4zNDMgNi4zNDcgMiA4IDJzMyAxLjM0MyAzIDIuOTU4QzExIDYuNjk5IDkuNjUzIDguMDEgOCA4ek0xMy4zMTIgMTRIMi42ODhDMi4yMTQgMTQgMiAxMy42OTggMiAxMy4yNzQgMiAxMi4wMjMgMy45MTcgOC43NSA4IDguNzVzNiAzLjI3MyA2IDQuNTI0YzAgLjQyNC0uMjE0LjcyNi0uNjg4LjcyNnoiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgPC9nPgo8L3N2Zz4K"
                  alt="사람이미지 로고"
                />
                <span>서포터 {supportersCount} 명</span>
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
      <ReWard />
    </WrapSlideMenu>
  );
};

export default DetailSideMenu;
const WrapSlideMenu = styled.div`
  width: 100%;
  max-width: 284px;

  h2 {
    font-size: 24px;
  }
`;

const SuccessBar = styled.div`
  margin: 20px 0;
  height: 3px;
  background-color: var(--grey);
  overflow: hidden;
  div {
    height: 3px;
    background-color: var(--aquaD);
    width: ${({ percent }) => `${percent}%`};
  }
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    > span {
      font-size: 14px;
    }
  }
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 20px;
  button {
    width: 100%;
    height: 45px;
    background-color: var(--white);
    border: 1px solid var(--grey);
    border-radius: 5px;
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
  margin: 20px 0 10px;
  margin-right: 20px;
  width: 50%;
  height: 40px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 10px;
`;
const ImgVeiw = styled.img`
  margin: 10px 0;
  width: 100%;
`;
