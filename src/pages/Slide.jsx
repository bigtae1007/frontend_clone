import React from "react";
import styled from "styled-components";
// 이미지
import slide1 from "../images/slide_1.jfif";
import slide2 from "../images/slide_2.jfif";
import slide3 from "../images/slide_3.jfif";
import slide4 from "../images/slide_4.jfif";
import slide5 from "../images/slide_5.jfif";
import slide6 from "../images/slide_6.jfif";
import slide7 from "../images/slide_7.jfif";

// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slide = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper1"
    >
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide1} />
          <TextBox>
            <SlideTitle>
              ​450마리 강아지가 선택한
              <br />
              그것100% 한우 수제간식
            </SlideTitle>
            <SlideTxt>간 허파 우신 우족 발톱까지 맛있는 간식만 싹</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide2} />
          <TextBox>
            <SlideTitle>
              누가 요즘 튜브타고 노나요
              <br />
              이제 수중스쿠터 타고 슝슝~
            </SlideTitle>
            <SlideTxt>유럽 감성의 짜릿한 여름 휴가를 즐겨보세요</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide3} />
          <TextBox>
            <SlideTitle>
              ​당신이 꿈꾸는 도전을 함께할
              <br />단 하나의 스포츠워치
            </SlideTitle>
            <SlideTxt>깔끔한 오피스룩부터 스포티한 아웃도어룩까지</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide4} />
          <TextBox>
            <SlideTitle>
              우리가족 커플룩 로망이신 분들
              <br />
              어서오세요
            </SlideTitle>
            <SlideTxt>후기로 증명된 패밀리룩 맛집 위드마이엘</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide5} />
          <TextBox>
            <SlideTitle>와디즈 BEST 펀딩</SlideTitle>
            <SlideTxt>와디즈 대표 펀딩 프로젝트만 모았어요</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide6} />
          <TextBox>
            <SlideTitle>와디즈 알림신청 TOP 20</SlideTitle>
            <SlideTxt>와디즈 대표 오픈예정 프로젝트만 모았어요</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImgWrap>
          <SlideImg src={slide7} />
          <TextBox>
            <SlideTitle>
              프렌드 존 이벤트
              <br />
              3,OOO원 기획전 전용 쿠폰 받기
            </SlideTitle>
            <SlideTxt>가족, 친구, 반려동물과 더 행복한 순간 만들기</SlideTxt>
          </TextBox>
        </SlideImgWrap>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;

const SlideImgWrap = styled.div`
  width: 100vw;
  height: 285px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlideImg = styled.img`
  width: 100%;
  filter: brightness(65%);
  @media screen and (max-width: 1080px) {
    width: auto;
    height: 100%;
  }
`;
const TextBox = styled.div`
  position: absolute;
  bottom: 20%;
  left: 210px;
  color: #fff;
  max-width: 1440px;
  @media screen and (max-width: 1270px) {
    bottom: 25%;
  }
  @media screen and (max-width: 900px) {
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    bottom: auto;
    width: 90%;
    text-align: center;
  }
`;
const SlideTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const SlideTxt = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
