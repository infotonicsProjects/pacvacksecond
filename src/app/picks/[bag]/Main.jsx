import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";

const Main = ({ data }) => {
  return (
    <Grid item xs={12} md={9} className="border-start">
      <div className=" mx-4  pb-2">
        <h1 className="heading-product mb-4">

          <a
            style={{ fontSize: "14px", paddingLeft: "25px", fontWeight: "500" }}
            href="/Pacvackprint-picks"
            className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-2"
          ></a>
        </h1>
        <div className="d-flex flex-wrap ">
          {data?.map((item) => (
            <Item item={item} key={item} />
          ))}
        </div>
      </div>
    </Grid>
  );
};

export default Main;
