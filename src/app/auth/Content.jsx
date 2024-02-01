import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentForLogin from "./ContentForLogin";

const Content = ({ children }) => {
  return (
    <Grid
      container
      spacing={1}
      className="justify-content-center mt-5"
      columns={{ xs: 4, md: 12, sm: 10 }}
    >
      <Grid item xs={4} sm={8} md={5}>
        <div className="ms-4 ps-2">
          <h1 className="fs-3">Three great brands. One account.</h1>
          <div className="me-3">
            <ContentForLogin />
          </div>
          <Box
            className="mt-4  me-4 d-flex flex-column"
            style={{ gap: "15px" }}
          >
            <button className="btn btn-lg btn-outline-secondary px-5 w-100 rounded-pill text-dark fs-5 btn-hover-login">
              <p className="mb-0">
                <Image
                  src={"/img/google.svg"}
                  width={20}
                  height={20}
                  className="me-2 m-atuo"
                />
                <span className="fs-5">Continue with Google</span>
              </p>
            </button>
            <button className="btn btn-lg btn-outline-secondary px-5 w-100 rounded-pill text-dark fs-5 btn-hover-login ">
              <p className="mb-0">
                <Image
                  src={"/img/facebok.png"}
                  width={20}
                  height={20}
                  className="me-2 m-atuo"
                />
                <span className="fs-5">Continue with Facebook</span>
              </p>
            </button>
            <button className="btn btn-lg btn-outline-secondary px-5 w-100 rounded-pill text-dark fs-5 btn-hover-login">
              <p className="mb-0">
                <Image
                  src={"/img/apple.svg"}
                  width={20}
                  height={20}
                  className="me-2 m-atuo"
                />
                <span className="fs-5">Continue with Apple</span>
              </p>
            </button>
          </Box>
        </div>
        {children}
      </Grid>
    </Grid>
  );
};

export default Content;
