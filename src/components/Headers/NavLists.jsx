import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLists = () => {
  return (
    <NavList>
      <li>
        <Link to="">
          <span>펀딩예정</span>
        </Link>
      </li>
      <li>
        <Link to="">
          <Color>펀딩</Color>
        </Link>
      </li>
      <li>
        <LinkWrap to="">
          <span>스토어</span>
          <StoreIcon>편집샵</StoreIcon>
        </LinkWrap>
      </li>
      <li>
        <Link to="">
          <span>투자</span>
        </Link>
      </li>
      <li>
        <div>
          <ArrowButton>
            더보기{" "}
            <Arrow
              viewBox="0 0 40 40"
              focusable="false"
              role="presentation"
              className="withIcon_icon__20lDO GNBDesktop_icon__ZX6B_"
              aria-hidden="true"
            >
              <path d="M28 20L15 33l-1.4-1.4L25.2 20 13.6 8.4 15 7l13 13z"></path>
            </Arrow>{" "}
          </ArrowButton>
        </div>
      </li>
    </NavList>
  );
};

export default NavLists;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 700;
  padding: 14px 16px;
`;
const StoreIcon = styled.span`
  background-color: #00c4c4;
  border-radius: 9px;
  font-size: 10px;
  padding: 2px 6px;
  height: 18px;
  font-weight: bold;
  color: #fff;
  margin-top: 3px;
`;
const LinkWrap = styled(Link)`
  display: flex;
  align-items: flex-start;
`;
const Color = styled.span`
  color: #00c4c4;
`;
const ArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Arrow = styled.svg`
  transform: rotate(90deg);
  width: 1em;
`;
