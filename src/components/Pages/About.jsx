import React from "react";
import about1 from "../../assets/aboutimg.jpg";
import about2 from "../../assets/aboutimg2.jpg";
import about3 from "../../assets/aboutimg3.jpg";
import metting from "../../assets/meeting1.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="">
      {/* title */}
      <div className="lg:w-1/2 w-[300px] lg:mx-auto lg:my-10">
        <div className="lg:flex flex-col lg:justify-center lg:items-center py-10 mb-5 shadow space-y-5 bg-base-200">
          <h1 className="lg:text-5xl lg:text-center font-bold">
            Office Nexus: Modern Workspace Design
          </h1>
          <p className=" lg:text-center text-lg">
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
      <div className="lg:flex my-30  px-3 py-20 bg-slate-100">
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

      {/* mission and vission */}
      <div className="lg:flex justify-between my-20">
        <div className=" w-[457px] h[559px]">
          <img className="rounded-lg" src={metting}></img>
        </div>
        <div className="w-[580px] flex flex-col justify-center space-y-10">
          <h1 className="text-4xl font-bold">
            Mission and Vision: Enabling Empowered Work Environments
          </h1>
          <p className="text-lg font-medium">
            Our mission and vision revolve around the creation of work
            environments that empower and inspire. At the core, we aim to
            transform the traditional workspace into a dynamic, flexible area.
          </p>
        </div>
      </div>

      {/*  Quality commitment*/}
      <div className="lg:flex justify-between my-10">
        <div className="w-[580px] flex flex-col justify-center space-y-10">
          <h1 className="text-4xl font-bold">
            Quality Commitment: Upgrading Your Workspace
          </h1>
          <p className="text-lg font-medium">
            Our commitment to quality is at the forefront of everything we do,
            aiming to elevate every aspect of your workspace experience.
          </p>
          <div className="flex space-x-10">
            <div>
              <p className="text-4xl font-bold text-blue-800">
                <CountUp start={1} duration={4.75} end={10} />+
              </p>
              <p className="text-lg">Years in Operation</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-800">
                <CountUp start={0} duration={4.75} end={6} />+
              </p>
              <p className="text-lg">Locations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-800">
                <CountUp start={1} duration={4.75} end={100} />+
              </p>
              <p className="text-lg">Events Hosted</p>
            </div>
          </div>
        </div>
        <div className=" w-[457px] h[559px]">
          <img className="rounded-lg" src={metting}></img>
        </div>
      </div>

      {/* revolution workspace */}
      <div className="bg-gray-900 py-24 rounded-lg mb-20">
        <div className="w-[300px] lg:w-[572px] lg:text-center text-white mx-auto ">
          <h1 className="lg:text-4xl font-bold">
            {" "}
            Ready to Revolutionize Your Workspace?
          </h1>
          <p className="text-xl font-semibold my-10">
            Request a quote or schedule a tour today!
          </p>
          <button className="btn  bg-indigo-900 text-[16px] text-white w-[138px] py-6 mr-4">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
