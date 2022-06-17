import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  const [showBanner, setshowBanner] = useState(true);
  const onClick = () => setshowBanner(false);

  return (
    <>
      {showBanner ? (
        <LinkWrap>
          <Flex>
            <Link to="">
              [무료 체험단 이벤트]
              <LinkText> 곧 오픈할 펀딩 제품 먼저 체험하기</LinkText>
            </Link>
            <Button onClick={onClick}>X</Button>
          </Flex>
        </LinkWrap>
      ) : null}
    </>
  );
};

export default Banner;

const LinkWrap = styled.div`
  width: 100%;
  height: 55px;
  background-color: #191116;
  color: #2ed5d5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Flex = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkText = styled.span`
  color: #fff;
`;
const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 20px;
  padding: 10px;
`;
