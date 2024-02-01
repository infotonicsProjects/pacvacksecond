import { Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container spacing={2} className="border-bottom p-4">
      <Grid item xs={12}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="pe-4 border-end  border-dark">
            <img
              src="/img/logos/packVack-logo.jpeg"
              alt="logo"
              style={{ width: "100px" }}
            />
          </div>
          <div
            className="d-flex fs-4 align-items-center ms-4"
            style={{ gap: "10px" }}
          >
            <h1 className=" fs-5 mb-0 fw-bolder">
              PackVack<span className="fw-light">Print</span>
            </h1>
            <h1 className=" fs-5 mb-0 fw-bolder">
              PackVack
              <span className="fw-light">create</span>
            </h1>
            <h1 className=" fs-5 mb-0 fw-bold">99designs</h1>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
