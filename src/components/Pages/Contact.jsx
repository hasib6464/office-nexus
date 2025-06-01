import React from "react";
import { GoMail } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const Contact = () => {
  return (
    <div className="">
      {/* title */}
      <div className="w-[596px] mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">Let's get in touch!</h1>
        <p className="text-lg ">
          Whether you're in the heart of Silicon Valley or New York City, find
          the perfect backdrop for your business to thrive.
        </p>
      </div>

      {/* submit  */}
      <div
        className="w-[800px] relative z-10 top-20  mx-auto bg-slate-100
       shadow px-12 py-16 space-y-3 rounded"
      >
        <div className="grid grid-cols-2">
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-[340px] h-[56px] px-4 "
              placeholder="Type your name"
            />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input w-[340px] h-[56px] px-4 "
              placeholder="Type your email"
            />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Phone Number</legend>
            <input
              type="number"
              className="input w-[340px] h-[56px] px-4 "
              placeholder="Type your number"
            />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Subject</legend>
            <input
              type="text"
              className="input w-[340px] h-[56px] px-4 "
              placeholder=""
            />
          </fieldset>
        </div>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend">Message</legend>
          <textarea className="textarea h-52 w-full" placeholder=""></textarea>
        </fieldset>
        <button className="btn  bg-indigo-900 text-[18px] text-white  py-7 mr-4">
          Submit Message
        </button>
      </div>

      {/* phone/email/live chat */}
      <div className="bg-gray-900 grid grid-cols-3 p-30 mb-20">
        <div className="text-white border-r  p-8 space-y-4">
          <span className="text-4xl">
            <IoIosCall />
          </span>
          <h4 className="text-xl font-bold">Phone</h4>
          <p>Give us a call to speak directly with our team.</p>
          <h3 className="text-2xl text-blue-800 font-bold">(123) 456 - 7891</h3>
        </div>
        <div className="text-white border-r p-5 space-y-4">
          <span className="text-4xl">
            <MdMessage />
          </span>
          <h4 className="text-xl font-bold">Message</h4>
          <p>Shoot us an email for prompt, detailed responses.</p>
          <h3 className="text-2xl text-blue-800 font-bold">
            email@example.com
          </h3>
        </div>
        <div className="text-white  p-5 space-y-4">
          <span className="text-4xl">
            <GoMail className="text-white" />
          </span>
          <h4 className="text-xl font-bold">Live Chat</h4>
          <p>Need instant answers? Use the live for real-time support.</p>
          <h3 className="text-2xl text-blue-800 font-bold">Chat with us</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
