import React from "react";
import img1 from "../../assets/art.png";
import img2 from "../../assets/straum.png";
import img3 from "../../assets/opal.png";
import img4 from "../../assets/spident.png";
import img5 from "../../assets/bioh.png";
import img6 from "../../assets/invisalign.png";

const Companies = () => {
  return (
    <div className="flex flex-col items-center space-y-16 pb-16 my-10">
      <h1 className="text-4xl font-bold">Trusted by Leading Companies</h1>
      <div className="grid grid-cols-3 gap-14 it">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
      </div>
    </div>
  );
};

export default Companies;
