import React from "react";
import { Link } from "react-router";
import cloud from "../../assets/icon1.webp";
import { CiUser } from "react-icons/ci";

const OurServices = () => {
  return (
    <div>
      <div className="lg:flex justify-between my-10">
        <h1 className="text-4xl font-bold">Discover Our Services</h1>
        <Link to="/services">
          <button className="btn  bg-indigo-900 text-[15px] text-white w-[138px] py-7 mr-4">
            View Services
          </button>
        </Link>
      </div>

      {/* services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-1 my-12">
        <div className="border px-6  space-y-2 py-8 w-[379px] rounded-lg">
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
          <Link>
            <span className="text-xl text-blue-700 font-semibold">
              View Service
            </span>
          </Link>
        </div>
        <div className="border px-6  space-y-2 py-8 w-[379px] rounded-lg">
          <div className="flex justify-between">
            <img src={cloud}></img>

            <div className="flex  items-center border px-2 h-[30px] rounded">
              <CiUser />
              <p>1</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Field Office</h2>
          <p className="text-lg text-[#5C6B8d]">
            Virtual Office service is expertly crafted for entrepreneurs,
            freelancers
          </p>
          <Link>
            <span className="text-xl text-blue-700 font-semibold">
              View Service
            </span>
          </Link>
        </div>
        <div className="border px-6  space-y-2 py-8 w-[379px] rounded-lg">
          <div className="flex justify-between">
            <img src={cloud}></img>
            <div className="flex  items-center border px-2 h-[30px] rounded">
              <CiUser />

              <p>1</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Remote Office</h2>
          <p className="text-lg text-[#5C6B8d]">
            Virtual Office service is expertly crafted for entrepreneurs,
            freelancers
          </p>
          <Link>
            <span className="text-xl text-blue-700 font-semibold">
              View Service
            </span>
          </Link>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default OurServices;
