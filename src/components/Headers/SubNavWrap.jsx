import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const SubNavWrap = () => {
  return (
    <SubNavList>
      <NavLink to="/">
        <li>
          <Home>펀딩홈</Home>
        </li>
      </NavLink>
      <NavLink to="/">
        <li>
          <span>카테고리</span>
        </li>
      </NavLink>

      <NavLink to="/">
        <li>
          <span>글로벌·앵콜</span>
        </li>
      </NavLink>
    </SubNavList>
  );
};

export default SubNavWrap;

const SubNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-size: 17px;
  font-weight: bold;
  color: #1d2129;
  li {
    line-height: 35px;
    text-align: center;
    span {
      padding: 10px 0;
      color: #000;
      height: 100%;
      display: inline-block;
      color: #60656a;
    }
  }
`;
const Home = styled.span`
  border-bottom: 3px solid #000;
`;
