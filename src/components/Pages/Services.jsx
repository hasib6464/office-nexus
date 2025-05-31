import React from "react";
import cloud from "../../assets/icon1.webp";
import { CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router";

const Services = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center py-10 mb-5 shadow space-y-5 bg-base-200">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="w-1/2 text-center">
          Explore our Services page to discover a range of cutting-edge work
          environments designed to meet every professional need.
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

      {/* services cart */}
      <div className="w-[381px] h-[692px] shadow space-y-3 border border-blue-200 px-6 py-4">
        <div className="flex justify-between">
          <img src={cloud}></img>

          <div className="flex  items-center border px-2 h-[30px] rounded">
            <CiUser />

            <p>1</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Virtual Office</h2>
        <p className="text-lg text-[#5C6B8d]">
          Virtual Office service is expertly crafted for entrepreneurs,
          freelancers
        </p>
        <div className="my-8">
          <h5>Starting at</h5>
          <p className="text-xl text-blue-700 font-bold">$ 200 per month</p>
        </div>
        <div className="py-8  bg-gray-100 space-y-3">
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
              Designed to evolve with your business, our workspaces offer
              modular designs and adaptable .
            </p>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-blue-700 size-8 mr-5" />
            <p className=" text-lg">
              Designed to evolve with your business, our workspaces offer
              modular designs and adaptable .
            </p>
          </div>
        </div>
        <Link className=" ">
          <span className="text-xl text-blue-700 font-semibold">
            View Service
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Services;
