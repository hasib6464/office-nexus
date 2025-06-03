import React from "react";
import office from "../../assets/officeRoom.jpg";

const AllLocation = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center py-10 mb-5 shadow space-y-5 bg-base-200">
        <h1 className="text-5xl font-bold">All Locations</h1>
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

      {/* location cart */}

      <div className="">
        <div className="w-[560px] h-[347px] ">
          <img className="rounded-xl" src={office}></img>
        </div>
        <div className="w-[512px] h-[164px] relative p-7 mx-6 bottom-4 shadow bg-white rounded">
          <h2 className="text-2xl font-bold">TechTown</h2>
          <p className="text-md py-3">
            123 Main Street, Suite 180, New York, NY 12345
          </p>
          <h4 className="text-lg text-blue-700 font-semibold">Learn More</h4>
        </div>
      </div>
    </div>
  );
};

export default AllLocation;
