import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { PrettoSlider } from "./BottomSection";

const Rotation = ({ handleRotation }) => {
  const [rotation, setRotation] = useState(0);
  return (
    <Box
      className="position-fixed z-3 w-25 bg-white rounded-pill px-4 shadow-lg arrange-rotate "
      style={{
        top: "8rem",
        left: "45rem",
      }}
    >
      <Grid container>
        <Grid item xs={9} className="me-4">
          <PrettoSlider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={-180}
            max={180}
            value={rotation}
            onChange={(e) => {
              setRotation(e.target.value), handleRotation(e);
            }}
          />
        </Grid>
        <Grid xs={1.2} className="p-1">
          <TextField
            id="standard-size-small"
            size="small"
            variant="standard"
            value={rotation}
            onChange={(e) => {
              setRotation(e.target.value), handleRotation(e);
            }}
            className="text-center"
          />
        </Grid>
        <Grid item xs={0.2}>
          <Typography className="fw-bold fs-5 ">°</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rotation;
