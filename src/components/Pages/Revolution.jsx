import React from "react";
import chair from "../../assets/chair.png";

const Revolution = () => {
  return (
    <div className="bg-slate-900 lg:flex justify-between w-full lg:h-[462px] items-center lg:px-16 rounded lg:my-20">
      <div className="text-white lg:w-[452px] space-y-8 ">
        <h1 className="text-4xl font-bold">
          Ready to Revolutionize Your Workspace?
        </h1>
        <p className="text-xl font-medium">
          Request a quote or schedule a tour today!
        </p>
        <button className="btn bg-indigo-900 text-base text-white w-[138px] px-4 py-6">
          Enquire Now
        </button>
      </div>
      <div>
        <img src={chair}></img>
      </div>
    </div>
  );
};

export default Revolution;
