import React from "react";

const TwoImage = () => {
  return (
    <div className="d-flex pb-5 main-two-image flex-row-reverse">
      <div className="first-div flex-0-1-50" id="two-image">
        <div className="wrapper-content" id="wrapper-content">
          <div className="content-div content-div2" id="content-div">
            <h1 className="text-dark font-w-3">
              Create a statement piece that&apos;s truly yours.
            </h1>
            <p className="text-dark fs-5">
              With multiple design options, bring your team, club or brand
              colors to life.
            </p>
            <button className="btn p-5 bg-white text-dark fw-bold p-5 btn-paddign py-5">
              Shop Full Custome Bag
            </button>
          </div>
        </div>
        <div className="bg-first-image h-100"></div>
      </div>
      <div className="flex-0-1-50" id="two-image">
        <img src="/img/imga2.jpg" className="w-100" />
      </div>
    </div>
  );
};

export default TwoImage;
