import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/LayOuts/Navbar";
import Footer from "../components/LayOuts/Footer";

const Main = () => {
  return (
    <div>
      <div className="w-7xl mx-auto flex flex-col h-screen">
        <Navbar></Navbar>
        <div className="grow">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
