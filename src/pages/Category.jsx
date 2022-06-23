import React from "react";
import styled from "styled-components";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const Category = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      slidesPerGroup={10}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper2"
      breakpoints={{
        600: {
          slidesPerView: 6,
        },
        700: {
          slidesPerView: 7,
        },
        1160: {
          slidesPerView: 10,
        },
      }}
    >
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://www.wadiz.kr/ft/images/green001/2022/0617/20220617190551566_null.jpg" />
          </CategoryImgWrap>
          <CategoryText>반려동물</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_287.jpg" />
          </CategoryImgWrap>
          <CategoryText>테크·가전</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_288.jpg" />
          </CategoryImgWrap>
          <CategoryText>패션·잡화</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_311.jpg" />
          </CategoryImgWrap>
          <CategoryText>뷰티</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_289.jpg" />
          </CategoryImgWrap>
          <CategoryText>푸드</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_310.jpg" />
          </CategoryImgWrap>
          <CategoryText>홈·리빙</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_296.jpg" />
          </CategoryImgWrap>
          <CategoryText>여행·레저</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_297.jpg" />
          </CategoryImgWrap>
          <CategoryText>스포츠·모빌리티</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_character.jpg" />
          </CategoryImgWrap>
          <CategoryText>캐릭터·굿즈</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_309.jpg" />
          </CategoryImgWrap>
          <CategoryText>베이비·키즈</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_308.jpg" />
          </CategoryImgWrap>
          <CategoryText>반려동물</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_292.jpg" />
          </CategoryImgWrap>
          <CategoryText>게임·취미</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_294.jpg" />
          </CategoryImgWrap>
          <CategoryText>컬쳐·아티스트</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_316.jpg" />
          </CategoryImgWrap>
          <CategoryText>클래스·컨설팅</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_293.jpg" />
          </CategoryImgWrap>
          <CategoryText>출판</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_295.jpg" />
          </CategoryImgWrap>
          <CategoryText>소셜·캠페인</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_312.jpg" />
          </CategoryImgWrap>
          <CategoryText>기부·후원</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
      <SwiperSlide>
        <CategoryFlex>
          <CategoryImgWrap>
            <CategoryImg src="https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_313.jpg" />
          </CategoryImgWrap>
          <CategoryText>모임</CategoryText>
        </CategoryFlex>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
const CategoryImgWrap = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  overflow: hidden;
`;
const CategoryImg = styled.img`
  width: 100%;
`;
const CategoryText = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;
const CategoryFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
