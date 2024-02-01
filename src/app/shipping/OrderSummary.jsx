import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ApplyPromoCode from "./ApplyPromoCode";
import { getUserData } from "../../utlis/Home";
import { urlImage } from "../../Environment";
import Price from "./Price";
const OrderSummary = async () => {
  const data = await getUserData("shopping_cart_table");
  let price = 0;
  data?.data?.forEach((element) => {
    if (element?.qty !== 0) {
      if (element.price && element?.price[0] === "[") {
        const imagesData = JSON.parse(element?.images);
        var elementPrice = imagesData[0];
      } else if (element.images) {
        var elementPrice = element?.price;
      } else if (element.atributes) {
        var elementPrice;
        const attribute = JSON.parse(element.atributes);
        Object.entries(attribute).forEach(([key, value]) => {
          elementPrice = Object.values(value?.dimensions)[0].price;
        });
      }
      price += elementPrice * element?.qty;
    }
  });
  return (
    <Grid item xs={12} md={4} sm={12} className="p-5">
      <Box className="p-4 " style={{ background: "#F8F8F8" }}>
        <Box>
          <h2>Order Summary</h2>
        </Box>
        <Box className="d-flex justify-content-between ">
          <h5 className="fs-6 mb-0">SubTotal</h5>
          <Price price={price} />
        </Box>
        <Box className="text-success d-flex justify-content-between fw-light">
          <h5 className="text-success fs-6 fw-light text-decoration-underline">
            Saving
          </h5>

          <p>-</p>
        </Box>
        <Box className=" d-flex justify-content-between fw-light">
          <div>
            <h5 className="te fs-6 fw-light text-decoration-underline d-inline-block">
              Shipping
            </h5>
            {/* <span> (calculated at checkout)</span> */}
          </div>

          <p>-</p>
        </Box>
        {/* <Box className=" d-flex justify-content-between fw-light">
          <div>
            <h5 className=" fs-6 fw-light text-decoration-underline d-inline-block">
              Tax
            </h5>
            <span> (calculated at checkout)</span>
          </div>

          <p>-</p>
        </Box> */}
        <Box className=" d-flex justify-content-between fs-5 border-top border-bottom py-3">
          <h5 className="  d-inline-block mb-0">Total</h5>

          <p className="mb-0"> Rs {price}</p>
        </Box>
        <Box className="">
          <div>
            <Image src="/img/paypalP.svg" height={20} width={20} alt="" />
            <Image src="/img/paypalL.svg" height={40} width={47} alt="" />
            <p
              style={{ fontSize: "0.7rem" }}
              className="fw-light d-inline-block ms-2"
            >
              Pay in 4 interest-free payment of $67.57.
            </p>
            <Link
              href="#"
              className="text-decoration-underline ms-1"
              style={{ fontSize: "0.72rem" }}
            >
              Learn more
            </Link>
          </div>
        </Box>
        <ApplyPromoCode />
      </Box>
      <Box className="mt-3">
        <Box>
          <Typography>
            Your order qualifies for free Standard delivery ($100.00 minimum,ex.
            tax)
          </Typography>
        </Box>
        <Box className="d-flex justify-content-between">
          <Typography as="h2" className="fw-bold fs-5">
            Items
          </Typography>
          <Link href="/cart">
            <button className="btn btn-link text-dark">Edit cart</button>
          </Link>
        </Box>
        <Box>
          {data?.data?.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default OrderSummary;

const Item = ({ item }) => {
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
  return (
    <Box className="d-flex align-items-center my-2">
      <Box sx={{ flex: "1 0 12%" }}>
        <Image src={image} height={40} width={40} alt="" />
      </Box>
      <Box className="d-flex flex-column" sx={{ flex: "1 0 75%" }}>
        <Typography as="p"> {item?.names}</Typography>
        <Typography as="p"> Quantity: {item?.qty}</Typography>
      </Box>
      <Box sx={{ flex: "1 0 25%" }}>
        <Typography as="p">Rs {elementPrice * item?.qty}</Typography>
      </Box>
    </Box>
  );
};
