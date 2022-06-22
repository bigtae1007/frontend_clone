import React from "react";
import styled from "styled-components";

const FundListHeader = () => {
  return (
    <WrapHead>
      <SearchForm>
        <label htmlFor="asd">
          <input type="text" />
        </label>
        <button></button>
      </SearchForm>
      <Select>
        <option value="all">전체</option>
        <option value="all">진행중</option>
        <option value="all">종료된</option>
      </Select>
      <Select>
        <option value="all">추천순</option>
        <option value="all">인기순</option>
        <option value="all">펀딩액순</option>
        <option value="all">마감임박순</option>
        <option value="all">최신순</option>
        <option value="all">응원참여자수</option>
      </Select>
    </WrapHead>
  );
};

export default FundListHeader;

const WrapHead = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--grey);
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 70px;
  font-family: inherit;
  border: none;
  border-radius: 0px;
  outline: none;
  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
`;

const SearchForm = styled.form`
  display: inline-block;
  margin-right: -5px;
  border-right: 0;
  width: auto;
  vertical-align: bottom;
  input {
    border: none;
    outline: none;
  }
  button {
    width: 18px;
    height: 18px;
    border: none;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaPK5uanvHZ1V_eL-rIZ9wLCleJvoa55h7A&usqp=CAU);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
