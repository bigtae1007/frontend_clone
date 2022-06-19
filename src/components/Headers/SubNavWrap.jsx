import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubNavWrap = () => {
  return (
    <SubNavList>
      <SubNav>
        <Link to="">
          <SubNavBorder>펀딩홈</SubNavBorder>
        </Link>
      </SubNav>
      <SubNav>
        <Link to="">
          <SubText>카테고리</SubText>
        </Link>
      </SubNav>
      <SubNav>
        <Link to="">
          <SubText>글로벌·앵콜</SubText>
        </Link>
      </SubNav>
    </SubNavList>
  );
};

export default SubNavWrap;

const SubNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 17px;
  font-weight: bold;
  color: #1d2129;
`;
const SubNav = styled.li`
  width: 120px;
  height: 35px;
  text-align: center;
`;
const SubText = styled.span`
  height: 100%;
  display: inline-block;
  color: #60656a;

  border-bottom: 3px solid transparent;
`;
const SubNavBorder = styled.span`
  height: 100%;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  border-bottom: 3px solid #1d2129;
`;
