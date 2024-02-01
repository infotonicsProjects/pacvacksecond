import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { HuePicker } from "react-color";

import { AlphaPicker } from "react-color";
const ColorPickerImage = ({ handleRGBChange, handleChangleAlpha, item }) => {
  const [color, setColor] = useState({
    r: item.red,
    g: item.green,
    b: item.blue,
    a: item.alpha,
  });
  const [alpha, setAlpha] = useState({
    r: item.red,
    g: item.green,
    b: item.blue,
    a: item.alpha,
  });
  const colorPicker = useRef(null);
  return (
    <Box
      className="position-fixed z-3 bg-white rounded-pill px-4 shadow-lg responsive-mobile-positon"
      style={{
        top: "8rem",
        left: "16rem",
        width: "33%",
      }}
    >
      <Grid container>
        <Grid item xs={5} className="me-5 py-3">
          <Box
            className="d-flex align-items-center justify-content-center"
            sx={{ gap: "20px" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "600" }}
            >
              Color
            </Typography>
            <HuePicker
              ref={colorPicker}
              width={"200px"}
              height={"25px"}
              color={color}
              onChange={(color) => {
                setColor(color.rgb), handleRGBChange(color.rgb);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={5} className="me-5 py-3 responsive-mobile-hide">
          <Box
            className="d-flex align-items-center justify-content-center"
            sx={{ gap: "20px" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "600" }}
            >
              Alpha darker
            </Typography>
            <AlphaPicker
              ref={colorPicker}
              color={alpha}
              onChange={(color) => {
                setAlpha(color.rgb), handleChangleAlpha(color.rgb);
              }}
            />
          </Box>
        </Grid>
        {/* <Grid item xs={3.2} className="me-5 py-3 responsive-mobile-hide">
          <Box
            className="d-flex align-items-center justify-content-center"
            sx={{ gap: "20px" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "600" }}
            >
              Saturation
            </Typography>
            <HuePicker
              ref={colorPicker}
              width={"200px"}
              height={"25px"}
              color={color}
            />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ColorPickerImage;
