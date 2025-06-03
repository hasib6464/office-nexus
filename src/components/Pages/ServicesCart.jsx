import React from "react";
import { CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";

const ServicesCart = ({ service }) => {
  const { name, title, cost, icon, employee } = service;
  return (
    <div>
      <div className="w-[381px] h-[692px] shadow space-y-3 border border-blue-200 px-6 py-4">
        <div className="flex justify-between">
          <img className="w-[40px] h-[40px]" src={icon}></img>

          <div className="flex  items-center border px-2 h-[30px] rounded">
            <CiUser />

            <p>{employee}</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg text-[#5C6B8d]">{title}</p>
        <div className="my-8">
          <h5>Starting at</h5>
          <p className="text-xl text-blue-700 font-bold">$ {cost} per month</p>
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

export default ServicesCart;
