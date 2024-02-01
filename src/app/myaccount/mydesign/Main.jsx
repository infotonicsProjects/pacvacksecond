import Link from "next/link";
import React from "react";

const Design = () => {
  return (
    <div
      className="m-5 px-5 mt-0 pt-0"
      style={{ marginLeft: "10rem !important" }}
    >
      <div className="p-4 pt-0">
        <div className="m-5 mb-2">
          <h1 className="m-auto fs-3 fw-400">My Design Services</h1>
        </div>
        <div className="m-5 mt-4 mb-4">
          <h1 className="fs-3">You currently have no projects.</h1>
        </div>
        <div className="m-5 mt-3">
          <button className="btn btn-dark rounded-pill px-4 fs-6 text-white py-3">
            <Link href={"/design1"} className="text-white">
              Start a New Project
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design;
