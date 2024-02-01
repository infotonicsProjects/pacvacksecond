import React from "react";
import { Box, Typography } from "@mui/material";

const Main = () => {
  return (
    <div className="m-4 ps-5 ms-5 ">
      <div className="m-5">
        <div>
          <h1 className="fs-3 ms-4">Mailing Lists</h1>
        </div>
        <Box
          sx={{ p: 3 }}
          className="h-300px w-70vw border d-flex justify-content-center align-items-center m-4 bg-body-tertiary p-5 flex-column"
        >
          <Box>
            {" "}
            <Typography className="fw-semibold fs-4">
              You don&apos;t currently have any mailing lists.
            </Typography>
            <Typography className="fw-semibold text-center">
              Order a Mailing Services Postcard to upload your first one now.
            </Typography>
          </Box>
          <Box>
            <button className="btn btn-dark px-4 py-3 rounded-pill mt-4">
              {" "}
              Start Mailing Services PostCard
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Main;
