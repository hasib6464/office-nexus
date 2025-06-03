import React from "react";
import sapceImg from "../../assets/common space.jpg";

const WorkSpace = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-12 my-20">
        <div className="lg:col-span-4 z-10 w-[600px] h-[330px] justify-center  mt-24">
          <div className="     py-16 px-12 rounded bg-slate-100">
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
        <div className="relative lg:col-span-8 ">
          <img className=" rounded" src={sapceImg}></img>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
