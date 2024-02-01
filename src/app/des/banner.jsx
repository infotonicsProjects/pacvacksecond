import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function banner() {
  return (
    <Box style={{ margin: "35px" }}>
      <Box
        style={{
          background: "url('./img/banner.webp')",
          height: "auto",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ padding: "40px 58px" }}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={7}>
              <Typography variant="h3" style={{ color: "#fff" }}>
                95% of the paper we print on is FSC® certified.
              </Typography>
              <Box mt={2}>
                <Typography style={{ color: "#fff" }} variant="h6">
                  Sourced from responsibly managed forests, our paper products
                  are designed to help you reduce your environmental impact.
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography style={{ color: "#fff" }} variant="body1">
                  Learn more
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
