import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../../images/search.png";
import NavLists from "./NavLists";
import SubNavWrap from "../Headers/SubNavWrap";
import { useDispatch, useSelector } from "react-redux";
import { __logOut, __checkLogin } from "../../redux/modules/user";
const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);

  const logOut = () => {
    dispatch(__logOut());
  };
  // 로그인 상태 확인
  useEffect(() => {
    if (localStorage.getItem("id")) {
      dispatch(__checkLogin());
    }
  }, []);
  return (
    <HeaderWrap>
      <HeaderBox>
        <Flex>
          <HeaderTitle>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
                height="25"
                viewBox="0 0 85 25"
              >
                <path
                  fill="#1D2129"
                  fillRule="nonzero"
                  d="M58.49 2.23h2.11v21.29H59a1.73 1.73 0 0 1-1.62-1.16 9 9 0 0 1-10.93-.28 7.48 7.48 0 0 1-2.75-6.29 7.65 7.65 0 0 1 12.79-5.07V4.23a2 2 0 0 1 2-2zm-6.3 18.62a4.36 4.36 0 0 0 4.16-4.52 4.19 4.19 0 1 0-8.35 0 4.36 4.36 0 0 0 4.19 4.52zM42 23.52h-1.52a1.73 1.73 0 0 1-1.64-1.16 9 9 0 0 1-10.93-.28 7.48 7.48 0 0 1-2.75-6.29A7.65 7.65 0 0 1 38 10.72a2 2 0 0 1 1.9-1.79H42v14.59zm-8.41-2.67h.02a4.35 4.35 0 0 0 4.15-4.52 4.35 4.35 0 0 0-4.17-4.51 4.35 4.35 0 0 0-4.17 4.51 4.36 4.36 0 0 0 4.17 4.52zM83.47 8.94v2.11l-7.07 9.06h7.06v3.47h-13v-2.1l7.08-9.07h-6.62v-1.47a2 2 0 0 1 2-2h10.55zM65.86 7.3a2.48 2.48 0 1 1 0-4.96 2.48 2.48 0 0 1 0 4.96zM21.21 8.94h4.14l-4.86 14.59h-4.15l-3.21-9.36-3.21 9.36H5.77L.92 8.94h4.13L8 18l2.5-7.74a2 2 0 0 1 1.86-1.34h2.9l3 9.08 2.95-9.06zm42.65 14.59l-.04-12.59a2 2 0 0 1 2-2h2.11v14.59h-4.07z"
                ></path>
              </svg>
            </Link>
          </HeaderTitle>
          <NavLists />
        </Flex>
        <Flex>
          <div>
            <Form>
              <Input
                type="search"
                placeholder="어떤 프로젝트를 찾고 계신가요?"
              />
              <SearchImg src={search} />
            </Form>
          </div>
          <div>
            {isLogin ? (
              <Button onClick={logOut}>로그아웃</Button>
            ) : (
              <>
                <Link to="/login">
                  <Button>로그인</Button>
                </Link>
                <Link to="/signup/intro">
                  <Button>회원가입</Button>
                </Link>
              </>
            )}
          </div>
          <div>
            <ProjectButton>프로젝트 오픈 신청</ProjectButton>
          </div>
        </Flex>
      </HeaderBox>
      <SubNavWrap />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  max-width: 1440px;
  padding: 0 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--gray);
  border-bottom: 1px solid #f0f2f5;
`;
const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  font-size: 32px;
  line-height: 22px;
  padding: 14px 0 18px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Form = styled.form`
  position: relative;
  min-width: 295px;
  height: 40px;
  border: 1px solid #00c4c4;
  font-size: 14px;
  font-weight: 400;
  padding-right: 40px;
  padding-left: 47px;
  border-radius: 20px;
  line-height: 40px;
`;
const SearchImg = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;
const Input = styled.input`
  border: 0;
  width: 100%;
  outline: none;
`;
const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 6px 8px;
  color: #60656a;
  font-size: 15px;
  line-height: 56px;
  font-weight: 400;
`;

const ProjectButton = styled.button`
  height: 36px;
  line-height: 34px;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid #00c4c4;
  font-weight: 700;
  color: #00c4c4;
  padding: 0 16px;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background-color: #00c4c4;
  }
`;
