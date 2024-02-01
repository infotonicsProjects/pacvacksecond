import React from "react";

const Sidesection = () => {
  return (
    <div className="p-relaive">
      <div className="border-bottom">
        <input
          className="form-control"
          type="text"
          placeholder="Search with this category"
        />
      </div>
      ""
      <div className="">
        <p className=""> No minimum quantity</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Sidesection;
