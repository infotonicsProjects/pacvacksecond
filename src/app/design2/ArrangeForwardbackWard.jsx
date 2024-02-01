import { Box, Grid } from "@mui/material";
import React from "react";

const ArrangeForwardbackWard = ({ item, handleIndexChangebY1, length }) => {
  return (
    <Box
      className="position-fixed z-3  bg-white rounded-pill px-2 shadow-lg py-1 arrange-left "
      style={{
        top: "8rem",
        left: "50rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} className="me-4 py-2">
          <Box className="d-flex">
            {length * 3 !== item.zIndex ? (
              <button
                className={
                  "btn btn-sm text-dark mx-2 fw-medium rounded-pill fw-bolder"
                }
                onClick={(e) => {
                  handleIndexChangebY1(e, 1);
                }}
              >
                {SVG.frontD} Bring To Front
              </button>
            ) : (
              <button
                className={
                  "btn btn-sm text-dark mx-2 fw-medium rounded-pill btn-light"
                }
                onClick={(e) => {
                  handleIndexChangebY1(e, 1);
                }}
                disabled
              >
                {SVG.frontD} Bring To Front
              </button>
            )}
            {length * 3 !== item.zIndex ? (
              <button
                name="plus"
                className={"btn  btn-sm  mx-2 fw-medium rounded-pill fw-bolder"}
                onClick={(e) => handleIndexChangebY1(e)}
              >
                {SVG.front} Bring Forward
              </button>
            ) : (
              <button
                name="plus"
                className={"btn  btn-sm  mx-2 fw-medium rounded-pill btn-light"}
                onClick={(e) => handleIndexChangebY1(e)}
                disabled
              >
                {SVG.front} Bring Forward
              </button>
            )}
            {item.zIndex !== 1 ? (
              <button
                name="minus"
                className={
                  "btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill fw-bolder"
                }
                onClick={(e) => handleIndexChangebY1(e)}
              >
                {SVG.back} Send Backward
              </button>
            ) : (
              <button
                name="minus"
                className={
                  "btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill btn-light"
                }
                onClick={(e) => handleIndexChangebY1(e)}
                disabled
              >
                {SVG.back} Send Backward
              </button>
            )}
            {item.zIndex !== 1 ? (
              <button
                className={
                  "btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill fw-bolder"
                }
                onClick={(e) => handleIndexChangebY1(e, 0)}
              >
                {SVG.backD} Send To Back
              </button>
            ) : (
              <button
                className={
                  "btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
                }
                onClick={(e) => handleIndexChangebY1(e, 0)}
                disabled
              >
                {SVG.backD} Send To Back
              </button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArrangeForwardbackWard;

const SVG = {
  frontD: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.75 10.8418L8 7.76579C8 7.76579 5.67857 9.66998 4.25 10.8418"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.75 6.2832L8 3.20719C8 3.20719 5.67857 5.11139 4.25 6.2832"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  front: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 9.86328L8 5.96854C8 5.96854 5.52381 8.37957 4 9.86328"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  back: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10C8 10 10.4762 7.52381 12 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  backD: (
    <svg
      style={{ width: "20px" }}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.25 4.375L8 7.75C8 7.75 10.3214 5.66071 11.75 4.375"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 9.375L8 12.75C8 12.75 10.3214 10.6607 11.75 9.375"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
