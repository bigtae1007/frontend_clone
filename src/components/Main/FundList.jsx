import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useSlicePrice from "../../custom/slicePrice";
import { __getLoadFundList } from "../../redux/modules/funding";
import FundCard from "./FundCard";

const FundList = () => {
  const dispatch = useDispatch();
  const fundList = useSelector((state) => state.funding.fund);

  React.useEffect(() => {
    // dispatch(__getLoadFundList());
  }, []);
  return (
    <div>
      {fundList.map((v, l) => {
        return <FundCard key={l} fundData={v} />;
      })}
    </div>
  );
};

export default FundList;
