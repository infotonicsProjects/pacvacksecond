"use client";
import { Box, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import { GetData } from "../../utlis/ClientApi";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
const Mycart = () => {
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;
  const user = useSelector((state) => state.userData);
  useEffect(() => {
    const getData = async () => {
      const res = await GetData("shopping_cart_table", setLoading, signal);
      if (res) {
        setCartData(res);

        sessionStorage.setItem("cart", JSON.stringify(res));
      }
    };
    getData();
    return () => controller.abort();
  }, [loading]);
  useEffect(() => {
    if (user.id === 0) {
      redirect("/auth/login");
    }
  }, []);
  return (
    <Box className="mt-5 resposive-padding">
      <Grid
        container
        spacing={{ xs: 5, md: 3, sm: 10 }}
        columns={{ xs: 4, sm: 10, md: 11 }}
        className="flex-column-responsive  justify-content-center responsive-width-100"
      >
        <Grid item xs={10} md={5} sm={10} className="p-5 ml-10 responsive-p-0">
          <Box className="border-bottom d-flex align-items-center mt-3">
            <Typography as="h1" component={"h4"} className="fw-bold fs-1 me-3">
              My Cart
            </Typography>
            <Typography
              as="p"
              component={"p"}
              className="fs-6 bg-primary rounded-circle text-center text-white "
              style={{ width: "20px", height: "20px" }}
            >
              {cartData?.length ?? "0"}
            </Typography>
          </Box>
          {/* image and edit btn */}
          {cartData?.map((item, i) => (
            <CartItem
              key={i}
              item={item}
              setLoading={setLoading}
              loading={loading}
            />
          ))}
        </Grid>
        <OrderSummary data={cartData} />
      </Grid>
    </Box>
  );
};

export default Mycart;
