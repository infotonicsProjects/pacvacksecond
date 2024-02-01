import React from "react";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="col-lg-3 mb-lg-0 pb-lg-3 mb-4">
        <div className="text-center">
          <h1>Left </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <button className="btn btn-secondary m-2"> Add Text</button>
              <button className="btn btn-secondary m-2"> Add Image</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
