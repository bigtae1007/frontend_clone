import React from "react";
import styled from "styled-components";
//이미지
import fundingtext from "../../images/fundingtext.JPG";
import fundingBanner from "../../images/fundingBanner.png";

const FundingContent = () => {
  return (
    <div>
      <WrapHeadText>
        <div>
          <h3>리워드 선택</h3>
          <span>
            펀딩해주시는 금액에 따라 감사의 의미로 라워드를 제공해 드립니다.
          </span>
        </div>
        <img src={fundingtext} alt="" />
      </WrapHeadText>
      <img style={{ width: "100%" }} src={fundingBanner} alt="" />
    </div>
  );
};

export default FundingContent;

const WrapHeadText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  div {
    display: flex;
    align-items: flex-end;
  }
  h3 {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
