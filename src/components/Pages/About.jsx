import React from "react";
import about1 from "../../assets/aboutimg.jpg";
import about2 from "../../assets/aboutimg2.jpg";
import about3 from "../../assets/aboutimg3.jpg";

const About = () => {
  return (
    <div>
      {/* title */}
      <div className="w-1/2 mx-auto my-10">
        <div className="flex flex-col justify-center items-center py-10 mb-5 shadow space-y-5 bg-base-200">
          <h1 className="text-5xl text-center font-bold">
            Office Nexus: Modern Workspace Design
          </h1>
          <p className=" text-center text-lg">
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
      </div>

      {/* image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="w-[386px] h-[599px]">
          <img className="rounded-lg" src={about1}></img>
        </div>
        <div className="w-[386px] h-[599px] ">
          <img className="rounded-lg" src={about2}></img>
        </div>
        <div className="w-[386px] h-[599px] ">
          <img className="rounded-lg" src={about3}></img>
        </div>
      </div>

      {/* work hub */}
      <div className="flex my-20 border py-20 bg-slate-100">
        <div className="">
          <h1 className="text-4xl font-bold pb-10">
            Our Story: Crafting the WorkHub Experience
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Founded in 2015, Office Nexus began as a visionary startup with a
            simple yet transformative idea: to redefine the modern workspace.
            Initially launching in the bustling heart of Silicon Valley, the
            company aimed to create spaces that not only catered to the
            practical needs of businesses but also fostered innovation.
          </p>
        </div>
        <div className="flex justify-end items-end ml-5 font-medium">
          <p className="text-lg text-gray-700">
            With a focus on flexibility, technology integration, and
            sustainability, Office Nexus quickly distinguished itself from
            traditional office providers. The early adoption of flexible lease
            terms, cutting-edge collaborative technology, and eco-friendly
            design principles resonated with forward-thinking companies and
            freelancers alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
