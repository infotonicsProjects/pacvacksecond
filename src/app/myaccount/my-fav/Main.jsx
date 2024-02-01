import React from "react";

const MyProduct = () => {
  return (
    <div className="m-4 ps-5 ms-5">
      <div className="m-5">
        <div>
          <h1 className="fs-3 ">Favorite Templates</h1>
        </div>
        <div
          className="d-flex justify-content-center align-items-center flex-column m-5 mt-3 ms-5 ps-5 m-auto ml-20rem"
          style={{ marginLeft: "20rem !important" }}
        >
          <div
            className="m-5 d-flex justify-content-center align-items-center flex-column"
            style={{ gap: "20px" }}
          >
            <img
              src="/img/heart-grey.svg"
              alt="hearth"
              style={{ width: "95px" }}
            />

            <h1 className=" fs-5">You haven't saved any Favorites yet.</h1>
            <p className="fw-light fs-5">
              Click the heart icon to save designs to your Favorites and easily
              find them again later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
