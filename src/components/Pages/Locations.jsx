import React from "react";
import waiting from "../../assets/officeRoom.jpg";
import { SlLocationPin } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Locations = () => {
  return (
    <div className="mt-20">
      {/* title */}
      <div className="flex justify-between my-10">
        <h1 className="text-4xl font-bold">Explore Our Locations</h1>
        <Link to="/allLocation">
          <button className="btn  bg-indigo-900 text-[15px] text-white w-[138px] py-7 mr-4">
            View Locations
          </button>
        </Link>
      </div>
      {/* details */}
      <div className="flex justify-between">
        {/* img */}
        <div className="flex">
          <div className="bg-blue-900 w-[496px] h-[405px] rounded-lg"></div>
          <img
            className="w-[496px] h-[307px] my-12 ml-8 absolute rounded"
            src={waiting}
          ></img>
        </div>
        {/* text */}
        <div className="space-y-2">
          <div className="flex items-center w-[650px] h-[93px] bg-white shadow-lg  pl-6 rounded">
            <FaLocationDot className="text-blue-800" />
            <h2 className="text-2xl font-bold  pl-2">TechTown</h2>
          </div>
          <div className="flex items-center w-[596px] h-[93px]  pl-6 rounded">
            <FaLocationDot className="text-blue-800" />
            <h2 className="text-2xl font-bold  pl-2">Creative Lofts</h2>
          </div>
          <hr className="text-[#3d465b]" />
          <div className="flex items-center w-[596px] h-[93px]   pl-6 rounded">
            <FaLocationDot className="text-blue-800" />
            <h2 className="text-2xl font-bold  pl-2">Capital Gateway</h2>
          </div>
          <hr className="text-[#3b455c]" />
        </div>
      </div>
    </div>
  );
};

export default Locations;
