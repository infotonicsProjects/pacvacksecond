"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const SelectInput = dynamic(() => import("./SelectInput"), { ssr: false });
import SelectOption from "./SelectOption";
import { urlImage } from "../../Environment";
import { DeleteData, PutData } from "../../utlis/ClientApi";
import Link from "next/link";
import { ToastColor } from "../../utlis/Toast";
const CartItem = ({ item, setLoading }) => {
  const [value, setValue] = useState(item?.qty);

  const controller = new AbortController();
  const signal = controller.signal;
  const handleChange = async (e) => {
    const data = {
      qty: parseInt(e.target.value),
    };
    const response = await PutData(
      `shopping_cart_table/${item.id}`,
      setLoading,
      signal,
      data,
    );

    if (response) {
      setValue(response?.qty);
    }
  };
  const handleDelete = async () => {
    ToastColor("Deleting");

    const response = await DeleteData(
      `shopping_cart_table/${item.id}`,
      setLoading,
      signal,
    );

    if (response) {
      setValue(response?.qty);
    }
  };
  return (
    <>
      {item?.qty !== 0 && (
        <Box className="mt-4 d-flex" sx={{ gap: "60px" }}>
          <Box
            className="d-flex flex-column align-items-center"
            sx={{ gap: "10px" }}
          >
            <ImageComponetn item={item} />
            <Image
              src={"/img/zoom-in.svg"}
              height={30}
              width={30}
              alt="zoom in"
            />
            <Link
              className="btn btn-link text-dark text-decoration-underline "
              href={{
                pathname: "/design2",
                query: { designid: item?.designid },
              }}
              onClick={() =>
                localStorage.setItem("cartredirect", item?.designid)
              }
            >
              Edit
            </Link>
          </Box>
          {/* quantity */}
          <Box className="w-100 ">
            <Typography as={"h2"} component={"h5"} className="fs-5 fw-bold">
              {item?.names}
            </Typography>
            <div className="d-flex align-items-baseline justify-content-between border-bottom py-2  pb-3">
              <div className="d-flex align-items-center mt-4">
                <Typography
                  as={"h2"}
                  component={"h5"}
                  className=" fw-medium fs-5"
                >
                  Quantity
                </Typography>
                <SelectInput handleChange={handleChange} value={value} />
              </div>
              <button
                className="btn btn-link text-dark float-right"
                onClick={handleDelete}
              >
                Remove
              </button>
            </div>
            <SelectOption />
            <Box className="py-3 d-flex justify-content-between">
              <Typography as="p" className="fs-5">
                Item Total
              </Typography>
              <Price item={item} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CartItem;
const Price = ({ item }) => {
  if (item.price && item?.price[0] === "[") {
    const imagesData = JSON.parse(item?.images);
    var elementPrice = imagesData[0];
  } else if (item.images) {
    var elementPrice = item?.price;
  } else if (item.atributes) {
    var elementPrice;
    const attribute = JSON.parse(item.atributes);
    Object.entries(attribute).forEach(([key, value]) => {
      elementPrice = Object.values(value?.dimensions)[0].price;

    });
  }
  // if (item?.price[0] === '[') {
  //   const parseData = JSON.parse(item?.price)
  //   var elementPrice = parseData[0]
  // } else {
  //   var elementPrice = item?.price
  // }
  return (
    <Typography as="p" className="fw-bold">
      Rs {elementPrice * item?.qty}
    </Typography>
  );
};
const ImageComponetn = ({ item }) => {
  if (item.images && item?.images[0] === "[") {
    const imagesData = JSON.parse(item?.images);
    var image = imagesData[0];
  } else if (item.images) {
    var image =
      item?.images.slice(0, 4) === "http"
        ? item.images
        : urlImage + "/" + item?.images?.slice(7);
  } else if (item.atributes) {
    var image;
    const attribute = JSON.parse(item.atributes);
    Object.entries(attribute).forEach(([key, value]) => {
      image = value.image[0];
    });
  }
  return <img src={image} alt="bag image" height={250} width={250} />;
};
