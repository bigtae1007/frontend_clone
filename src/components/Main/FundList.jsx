import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useSlicePrice from "../../custom/slicePrice";
//컴포넌트
import FundCard from "./FundCard";
import FundListHeader from "./FundListHeader";
//모듈
import { __getLoadFundList } from "../../redux/modules/funding";

const FundList = () => {
  const dispatch = useDispatch();
  const fundList = useSelector((state) => state.funding.fund);

  React.useEffect(() => {
    dispatch(__getLoadFundList());
  }, []);
  return (
    <Wrap>
      <FundListHeader />
      <WrapCardList>
        {fundList.map((v, l) => {
          return <FundCard key={l} fundData={v} />;
        })}
      </WrapCardList>
    </Wrap>
  );
};

export default FundList;

const Wrap = styled.div`
  position: relative;
  margin: 40px auto;
  max-width: 1032px;
  box-sizing: content-box;
`;
const WrapCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33.33333% - 30px));
  grid-row-gap: 40px;
  grid-column-gap: 30px;
`;
