import React from "react";
import Banner from "../components/Headers/Banner";
import Header from "../components/Headers/Header";
import FundList from "../components/Main/FundList";
import Slide from "./Slide";
import Category from "./Category";

const Main = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Slide />
      <Category />
      <FundList />
    </div>
  );
};

export default Main;
