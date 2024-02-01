import React, { Fragment } from "react";
import Main from "./Main";
import TwoImage from "./TwoImages";
import BreadCrumps from '../../../Home/BreadCrumps'
import { getUserData } from "../../../utlis/Home";
import { Box, Grid } from "@mui/material";
import Filter from './Filter'
import Sidebar from './Sidebar'
export default async function PicksComponent({ params, }) {

  const data = await getUserData(`products_table/${params.productid}`);



  return (
    <Fragment>
      <Box className="px-4">
        <TwoImage page={data?.data?.names} />
        <Filter />
        <Grid container spacing={2} marginTop={2}>
          <Sidebar />
          <Main product={data} />
        </Grid>
      </Box>
    </Fragment>

  );
}
