import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Cardsec from "./Cardsec";

const carddata = [
  {
    img: "",
    head: "Standard",
    subhead: "A traditional business card paper.",
  },
  {
    img: "",
    head: "Standard",
    subhead: "A traditional business card paper.",
  },
  {
    img: "",
    head: "Standard",
    subhead: "A traditional business card paper.",
  },
];
export default function option() {
  return (
    <div>
      <Typography style={{ fontWeight: "700" }} variant="h3">
        Options: Rounded Corner Business Cards
      </Typography>

      <Box>
        <Grid container spacing={3}>
          {carddata.map((item) => (
            <Grid item sm={6} md={3}>
              <Cardsec item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
