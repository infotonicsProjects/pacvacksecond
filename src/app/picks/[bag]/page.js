import React, { Fragment } from "react";
import Main from "./Main";
import TwoImage from "./TwoImages";
import BreadCrumps from '../../../Home/BreadCrumps'
import { getUserData } from "../../../utlis/Home";
import { Box, Grid } from "@mui/material";
import Filter from './Filter'
import Sidebar from './Sidebar'
export default async function PicksComponent({ params, }) {
  const categoryData = await getUserData("category");
  const data = await getUserData("products_table");
  const filterData = data?.data?.filter(
    (a) => a.categ_id == params?.bag,
  );
  const page = categoryData?.data?.find((a) => a.categ_id == params?.bag);
  const title = [
    {
      name: `bags/?catid=${params?.bag}`,
      id: 1,
      page: page?.title,
    },
    {
      name: `picks/bag=${params?.bag}`,
      id: 3,
      page: "Designes",
    },
  ];
  return (
    <Fragment>
      <BreadCrumps title={title} />
      <Box className="px-4 px-md--1">
        <TwoImage page={page} />
        <Filter categoryData={categoryData?.data} pageID={params?.bag} />
        <Grid container spacing={2} marginTop={2}>
          <Sidebar categoryData={categoryData?.data} pageID={params?.bag} />
          <Main data={filterData} />
        </Grid>
      </Box>
    </Fragment>

  );
}
