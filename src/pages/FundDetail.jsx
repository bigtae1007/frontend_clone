import React from "react";
import DetailMain from "../components/fundDetail/DetailMain";
import Header from "../components/Headers/Header";
import { useMediaQuery } from "react-responsive";

const FundDetail = () => {
  const middleMedia = useMediaQuery({
    query: "(min-width : 1330px)",
  });
  return (
    <div>
      {middleMedia && <Header />}

      <DetailMain />
    </div>
  );
};

export default FundDetail;
