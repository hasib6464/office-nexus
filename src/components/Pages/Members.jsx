import React from "react";
import emmily from "../../assets/emmily.jpg";
import errany from "../../assets/errany.jpg";
import jack from "../../assets/jack.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Members = () => {
  return (
    <div className="my-32 bg-gray-900 ">
      <div className="carousel w-[1200px]">
        <div
          id="slide1"
          className="carousel-item flex flex-col justify-center items-center relative w-[1192px] text-white"
        >
          <div className="w-[800px]  ">
            <h1 className="text-4xl font-bold text-center my-16">
              What our Members Say
            </h1>
            <p className="text-lg mb-10 ">
              Adaptive Horizons has been a game-changer for InnovateTech
              Solutions. As a rapidly growing tech startup, we needed a
              workspace that could grow with us, and Adaptive Horizons
              delivered. Their flexible office solutions and future-proof
              technology have allowed us to scale effortlessly.
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-5 items-center mb-20">
                <div className="avatar">
                  <div className="w-28 rounded-full">
                    <img src={emmily} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Emily Smith</p>
                  <p className="text-lg font-medium">
                    CEO, InnovateTech Solutions
                  </p>
                </div>
              </div>
              <div className=" mt-14 flex justify-between  w-[60px] ">
                <a href="#slide3" className="text-2xl mr-10">
                  <FaArrowLeft />
                </a>
                <a href="#slide2" className="text-2xl">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item flex flex-col justify-center items-center relative w-[1192px] text-white"
        >
          <div className="w-[800px]  ">
            <h1 className="text-4xl font-bold text-center my-16">
              What our Members Say
            </h1>
            <p className="text-lg mb-10 ">
              Unlock the Potential of Flexible Work Environments has transformed
              the way I approach my projects. The ability to book workspace
              on-demand has not only boosted my productivity but also provided a
              creative and inspiring environment to meet and collaborate with
              other professionals.
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-5 items-center mb-20">
                <div className="avatar">
                  <div className="w-28 rounded-full">
                    <img src={errany} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Errany Smith</p>
                  <p className="text-lg font-medium">
                    CEO, InnovateTech Solutions
                  </p>
                </div>
              </div>
              <div className=" mt-14 flex justify-between  w-[60px] ">
                <a href="#slide1" className="text-2xl mr-10">
                  <FaArrowLeft />
                </a>
                <a href="#slide3" className="text-2xl">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item flex flex-col justify-center items-center relative w-[1192px] text-white"
        >
          <div className="w-[800px]  ">
            <h1 className="text-4xl font-bold text-center my-16">
              What our Members Say
            </h1>
            <p className="text-lg mb-10 ">
              Adaptive Horizons has been a game-changer for InnovateTech
              Solutions. As a rapidly growing tech startup, we needed a
              workspace that could grow with us, and Adaptive Horizons
              delivered. Their flexible office solutions and future-proof
              technology have allowed us to scale effortlessly.
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-5 items-center mb-20">
                <div className="avatar">
                  <div className="w-28 rounded-full">
                    <img src={jack} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Jack Mishel</p>
                  <p className="text-lg font-medium">
                    CEO, InnovateTech Solutions
                  </p>
                </div>
              </div>
              <div className=" mt-14 flex justify-between  w-[60px] ">
                <a href="#slide2" className="text-2xl mr-10">
                  <FaArrowLeft />
                </a>
                <a href="#slide1" className="text-2xl">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
