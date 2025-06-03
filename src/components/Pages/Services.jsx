import React from "react";
import cloud from "../../assets/icon1.webp";
import { CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

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

      <div className="grid grid-cols-3 gap-16">
        {services.map((service) => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
