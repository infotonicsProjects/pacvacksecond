import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const AlignText = ({ handleAlign, item }) => {
  return (
    <Box
      className="position-fixed z-3  bg-white rounded-pill px-2 shadow-lg arrange-rotate "
      style={{
        top: "8rem",
        left: "65rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} className="me-4 py-2">
          <Box className="d-flex">
            <button
              className={
                item.align === "left"
                  ? "btn btn-sm text-white btn-dark mx-2 fw-medium rounded-pill"
                  : "btn btn-sm text-dark mx-2 fw-medium rounded-pill"
              }
              onClick={() => handleAlign("left")}
            >
              {SVG.left} Left
            </button>
            <button
              className={
                item.align === "center"
                  ? "btn btn-sm text-white btn-dark mx-2 fw-medium rounded-pill"
                  : "btn  btn-sm  mx-2 fw-medium rounded-pill"
              }
              onClick={() => handleAlign("center")}
            >
              {SVG.left} Center
            </button>
            <button
              className={
                item.align === "right"
                  ? "btn btn-sm text-white btn-dark mx-2 fw-medium rounded-pill"
                  : "btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
              }
              onClick={() => handleAlign("right")}
            >
              {SVG.right} Right
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlignText;
const SVG = {
  left: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 10H2V11.3333H10V10ZM10 4.66667H2V6H10V4.66667ZM2 8.66667H14V7.33333H2V8.66667ZM2 14H14V12.6667H2V14ZM2 2V3.33333H14V2H2Z"
        fill="currentColor"
      />
    </svg>
  ),
  center: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.66667 10V11.3333H11.3333V10H4.66667ZM2 14H14V12.6667H2V14ZM2 8.66667H14V7.33333H2V8.66667ZM4.66667 4.66667V6H11.3333V4.66667H4.66667ZM2 2V3.33333H14V2H2Z"
        fill="currentColor"
      />
    </svg>
  ),
  right: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 10H14V11.3333H6V10ZM6 4.66667H14V6H6V4.66667ZM14 8.66667H2V7.33333H14V8.66667ZM14 14H2V12.6667H14V14ZM14 2V3.33333H2V2H14Z"
        fill="currentColor"
      />
    </svg>
  ),
};
