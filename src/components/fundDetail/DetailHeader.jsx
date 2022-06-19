import React from "react";
import styled from "styled-components";

const DetailHeader = ({ title, category, img }) => {
  return (
    // <WrapHead>
    //   <HeadButton></HeadButton>
    //   <div>{title} I 와디즈 펀딩</div>
    //   <HeadButton></HeadButton>
    // </WrapHead>
    <Head>
      <BackgroundHead img={img}></BackgroundHead>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
      </div>
    </Head>
  );
};

export default DetailHeader;

const WrapHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeadButton = styled.button`
  width: 50px;
  height: 50px;
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 222px;
  border: 1px solid #adabab9e;
  > div {
    > p {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 400;
      color: var(--aqua);
    }
    > h2 {
      font-size: 36px;
      color: var(--white);
    }
  }
`;
const BackgroundHead = styled.div`
  position: absolute;
  top: 112px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  width: 100%;
  height: 205px;
  z-index: -1;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: cover;
  filter: blur(10px);
`;