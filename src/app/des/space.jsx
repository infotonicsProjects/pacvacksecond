"use client";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function template() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="px-4">
      <Typography style={{ fontWeight: "700" }} variant="h3">
        Product Specs & Templates
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Box my={3} className="p-5" style={{ background: "#f5f5f5" }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6}>
                <img src="./img/preview1.jpeg" alt="" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography variant="body2">Full Bleed Size</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body2">
                      3.62" x 2.12" 91.9 x 53.8 mm
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">Document Trim Size</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body2">
                      3.5" x 2" 88.9 x 50.8 mm
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">Safety Area</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body2">
                      3.38" x 1.88" 85.9 x 47.8 mm
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box>
            <TextField
              style={{ width: "100%" }}
              name="cls"
              select
              value={selectedValue}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Quantity</InputAdornment>
                ),
              }}
            >
              <MenuItem value="Item 1">Item 1</MenuItem>
              <MenuItem value="Item 2">Item 2</MenuItem>
              <MenuItem value="Item 3">Item 3</MenuItem>
            </TextField>
          </Box>
          <Box pt={2}>
            <Typography variant="body1">
              To avoid white edges, extend your design to the full bleed size –
              but keep text and images within the safety area. Remember to
              remove all die lines from your template to avoid them being
              printed alongside your design.
            </Typography>
          </Box>
          <Box pt={1}>
            <Typography variant="body2">
              Create your print-ready file. Download the template.
            </Typography>
          </Box>
          <Box pt={1}>
            <Typography variant="body2">PDF | SVG</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
