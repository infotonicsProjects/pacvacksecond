import React from "react";

const TwoImage = () => {
  return (
    <div className="d-flex pb-5 main-two-image flex-row-reverse">
      <div className="first-div flex-0-1-50" id="two-image">
        <div className="wrapper-content" id="wrapper-content">
          <div className="content-div content-div2" id="content-div">
            <h1 className="text-dark font-w-3">
              Designing team clothing just got easier.
            </h1>
            <p className="text-dark fs-5">
              Create matching T-shirts, hoodies and more with unique details for
              each person without starting your design from scratch.
            </p>
            <button className="btn p-5 bg-white text-dark fw-bold p-5 btn-paddign">
              Shop Custome Bag
            </button>
          </div>
        </div>
        <div className="bg-first-image h-200"></div>
      </div>
      <div className="flex-0-1-50" id="two-image">
        <img src="/img/twoimage1.webp" className="w-100" />
      </div>
    </div>
  );
};

export default TwoImage;
