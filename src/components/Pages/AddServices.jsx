import React from "react";
import Swal from "sweetalert2";

const AddServices = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const cost = form.cost.value;
    const icon = form.icon.value;
    const employee = form.employee.value;
    const title = form.title.value;
    const allData = { name, details, cost, icon, employee, title };
    // console.log(name, details, cost, icon, employee, title);

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.modifiedCount) {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Your work has been saved",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        // }
        console.log(data);
      });
  };

  return (
    <div className="lg:flex flex-cols items-center justify-center lg:mt-20">
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:w-2/3"
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
