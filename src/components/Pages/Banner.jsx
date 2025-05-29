import React from "react";
import sapceImg from "../../assets/common space.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex relative mt-10">
        <div className="flex flex-col z-10 mt-1/2 justify-center w-[700px]  h-[400px] ">
          <div className="   border  py-16 px-12 rounded bg-white right-36">
            <h1 className="text-5xl font-bold">
              Craft Your Workspace with Office Nexus
            </h1>
            <p className="text-2xl py-6">
              Equipping Professionals with Cutting-Edge Work Environments.
            </p>
            <div>
              <button className="btn  bg-indigo-900 text-[15px] text-white w-[138px] py-6 mr-4">
                Get a Quote
              </button>
              <button className="btn btn-outline btn-primary text-[15px] w-[138px] py-6">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="w-[796px] h-[549px] border absolute inset-y-0 right-0 ">
          <img className=" rounded" src={sapceImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
