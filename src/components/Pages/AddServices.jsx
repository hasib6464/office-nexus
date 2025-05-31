import React from "react";

const AddServices = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    console.log("mama mathai nosto");
  };

  return (
    <div className="flex flex-cols items-center justify-center mt-20">
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-1 md:grid-cols-2 gap-4  w-2/3"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Office name"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Services Details</label>
          <input
            type="text"
            name="details"
            className="input"
            placeholder="details"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label"> Total Cost</label>
          <input
            type="number"
            className="input"
            name="cost"
            placeholder="total cost per month"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Icon Url</label>
          <input
            type="text"
            className="input"
            name="icon"
            placeholder="icon photo"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Employee Number</label>
          <input
            type="text"
            name="employee"
            className="input"
            placeholder="total employee"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="My awesome page"
          />
        </fieldset>
        <button className="btn btn-outline btn-secondary">
          Add To Service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
