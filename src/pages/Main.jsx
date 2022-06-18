import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import FundList from "../components/Main/FundList";
import Category from "./Category";
import Slide from "./Slide";

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
