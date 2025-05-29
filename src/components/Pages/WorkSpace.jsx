import React from "react";
import sapceImg from "../../assets/common space.jpg";

const WorkSpace = () => {
  return (
    <div>
      <div className="flex absolute mt-10">
        <div className="flex flex-col justify-center">
          <div className=" w-[600px] z-10  h-[400px] border  py-16 px-12 rounded bg-white">
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
        <div className="relative right-44 ">
          <img className="w-[850px] h-[549px] rounded" src={sapceImg}></img>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
