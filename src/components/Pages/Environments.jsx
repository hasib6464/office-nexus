import React from "react";
import environment from "../../assets/environment.png";
import { FaCheck } from "react-icons/fa6";

const Environments = () => {
  return (
    <div>
      <div className="lg:flex justify-between my-20 ">
        <div className="">
          <img src={environment}></img>
        </div>
        <div className="flex flex-col justify-center w-[472px] space-y-8 ">
          <h2 className="text-4xl font-bold">
            Unlock the Potential of Flexible Environments
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
                Equipped with the latest in digital technologies, our offices
                are ready for the next wave of innovation.
              </p>
            </div>
          </div>
          <div>
            <button className="text-blue-700 font-bold text-lg">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environments;
