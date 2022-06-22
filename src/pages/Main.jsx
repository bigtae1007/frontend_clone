import React from "react";
import Banner from "../components/Headers/Banner";
import Header from "../components/Headers/Header";
import FundList from "../components/Main/FundList";
import Slide from "./Slide";
import Category from "./Category";
import ContentList from "../components/Detail/ContenttList";
import SubNavWrap from "../components/Headers/SubNavWrap";
const Main = () => {
  return (
    <div>
      <Banner />
      <Header />
      <SubNavWrap />
      <Slide />
      <Category />
      <FundList />
      <ContentList />
    </div>
  );
};

export default Main;
