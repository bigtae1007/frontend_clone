import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import FundList from "../components/Main/FundList";
import Slide from "./Slide";

const Main = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Slide />
      <FundList />
    </div>
  );
};

export default Main;
