import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";
import { getUserData } from "../../../utlis/Home";

const Main = async ({ product }) => {


  const designs = []
  const colorsArr = []
  const priceArr = []
  if (product?.data?.designid) {
    designs.push(product?.data?.designid)
    if (product?.data?.bag_color[0] === '[') {
      const parseData = JSON.parse(product?.data?.bag_color)

      colorsArr.push(...parseData)
    }
    if (product?.data?.price[0] === '[') {
      const parseData = JSON.parse(product?.data?.price)
      priceArr.push(...parseData)
    } else {

      priceArr.push(product?.data?.price)
    }
  } else if (product?.data?.atributes) {
    const parseProducts = JSON.parse(product?.data?.atributes);
    Object.entries(parseProducts).forEach(([key]) => {
      colorsArr.push(key);
    });
    Object.entries(parseProducts[colorsArr[0]].dimensions).forEach((item) => {

      priceArr.push(item[1]);
    });
    designs.push(...parseProducts[colorsArr[0]].designid)
  }




  return (
    <Grid item xs={12} md={9} className="">
      <div className=" mx-4  pb-2">
        <div className="d-flex flex-wrap ">
          {designs?.map((item) => (
            <Item item={item} key={item} colors={colorsArr} priceArr={priceArr} />
          ))}
        </div>
      </div>
    </Grid>
  );
};

export default Main;
