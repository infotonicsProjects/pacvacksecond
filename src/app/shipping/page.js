import React from "react";
import Address from "./TabsAddress";
import { Grid } from "@mui/material";
import OrderSummary from "./OrderSummary";
const page = () => {
  return (
    <Grid
      container
      spacing={{ xs: 5, md: 3, sm: 10 }}
      columns={{ xs: 4, sm: 10, md: 11 }}
      className="flex-column-responsive  justify-content-center w-100 ms-0"
    >
      <Grid item xs={12} md={5} sm={12} className="p-5 ml-10">
        <div className="fs-3">Shipping</div>
        <Address />
      </Grid>

      <OrderSummary />
    </Grid>
  );
};

export default page;
