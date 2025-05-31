import React from "react";
import Revolution from "./Revolution";
import Companies from "./Companies";
import WorkSpace from "../Pages/WorkSpace";
import OurServices from "./OurServices";
import Locations from "./Locations";
import PreparingWork from "./PreparingWork";
import Environments from "./Environments";
import Members from "./Members";

const Home = () => {
  return (
    <div>
      <WorkSpace></WorkSpace>
      <OurServices></OurServices>
      <Locations></Locations>
      <PreparingWork></PreparingWork>
      <Environments></Environments>
      <Members></Members>
      <Companies></Companies>
      <Revolution></Revolution>
    </div>
  );
};

export default Home;
