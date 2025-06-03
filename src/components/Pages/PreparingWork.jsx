import React from "react";
import { FaCheck } from "react-icons/fa6";
import workSpace from "../../assets/worksapace.webp";

const PreparingWork = () => {
  return (
    <div className="lg:flex justify-between my-20 ">
      <div className="flex flex-col justify-center w-[472px] space-y-8 ">
        <h2 className="text-4xl font-bold">
          Preparing Your Workspace for Tomorrow
        </h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <FaCheck className="text-blue-700 size-8 mr-5" />
            <p className=" text-lg">
              Designed to evolve with your business, our workspaces offer
              modular designs and adaptable .
            </p>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-blue-700 size-8 mr-5" />
            <p className=" text-lg">
              Equipped with the latest in digital technologies, our offices are
              ready for the next wave of innovation.
            </p>
          </div>
        </div>
        <div>
          <button className="text-blue-700 font-bold text-lg">
            Reguest a Quote
          </button>
        </div>
      </div>
      <div className="">
        <img src={workSpace}></img>
      </div>
    </div>
  );
};

export default PreparingWork;
