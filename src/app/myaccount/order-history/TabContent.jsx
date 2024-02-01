"use client";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GetData } from "../../../utlis/ClientApi";
import { useSelector } from "react-redux";
import { urlImage } from "../../../Environment";
import Image from "next/image";

const TabContent = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  const { children, value, index, ...other } = props;

  const user = useSelector((state) => state.userData);
  const getOrdersData = async () => {
    if (user?.id) {
      const res = await GetData("showByUserId/" + user?.id, setLoading, signal);
      if (res) {
        setOrders([...res]);
      }
    }
  };
  useEffect(() => {
    getOrdersData();
    return () => controller.abort();
  }, []);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={orders?.length !== 0 ? "m-auto" : "m-auto h-400"}
    >
      {value === index && (
        <Box
          sx={{ p: 3 }}
          className={
            !0 === value
              ? "h-100 d-flex justify-content-center align-items-center m-4 bg-body-tertiary"
              : "m"
          }
        >
          {!0 === value ? (
            <Typography className="fw-semibold">{children}</Typography>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className="line-height-60">
                  <Typography className="border-end pe-3 d-inline ">
                    {user?.email ? user?.email : " Username@gmail.com"}
                  </Typography>
                  <Link
                    href="#"
                    className="text-dark ps-2 text-decoration-underline fw-light fs-6"
                  >
                    {user?.name ? user?.name : "Not Name?"}
                  </Link>
                  <Box
                    className="form-search border-0 d-flex align-items-center w-70
    justify-content-end"
                  >
                    <TextField
                      id="outlined-basic"
                      label="search for order number"
                      variant="outlined"
                      className="float-end w-35"
                    />
                    <button
                      className="ms-4 button serach-btn"
                      title="Search"
                      type="submit"
                    >
                      <span>
                        <span>Search</span>
                      </span>
                    </button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {orders.length === 0 ? (
                  <Box className="text-center">
                    <h1 className="fs-4 mb-3">
                      You don't have any orders yet.
                    </h1>
                    <Typography className="mb-3">
                      When you &asop;ve placed your first order, you &asop; ll
                      see it here.
                    </Typography>
                    <Typography>
                      Looking for an order you placed as a guest? Search by
                      order number to add it to your account.
                    </Typography>
                  </Box>
                ) : (
                  <div
                    className="text-left d-flex flex-wrap"
                    style={{ gap: "25px" }}
                  >
                    {orders?.map((order) => (
                      <div
                        key={order?.id}
                        className="d-flex pr-4 p-4 my-2 bg-light rounded"
                      >
                        <ImageCompoent table={order} />
                        <div className="ps-2 d-flex flex-column justify-content-end  ">
                          <h6>{order?.names}</h6>
                          <h6>Rs : {order?.t_amount}</h6>
                          <p className="font-italic">Qty : {order?.qty}</p>
                          <p
                            className={
                              order?.order_table_status === "Processing"
                                ? "text-warning font-italic"
                                : "font-italic"
                            }
                          >
                            Status :{order?.order_table_status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <button className="btn rounded-pill px-4 btn-dark mt-4 py-2 text-white">
                  <Link href="/bags?catid=1" className="text-white">
                    Continue Shopping
                  </Link>
                </button>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </div>
  );
};

const ImageCompoent = ({ table }) => {
  if (table?.images[0] === "[") {
    const parseData = JSON.parse(table?.images);
    var image = parseData[0];
  } else {
    var image =
      table?.images.slice(0, 4) === "http"
        ? table.images
        : table?.images.slice(0, 4) === "data"
          ? table?.images
          : urlImage + table?.images?.slice(6);
  }
  return (
    <img
      src={image}
      alt="orders-image"
      height={100}
      width={100}
      className="rounded"
    />
  );
};
export default TabContent;
