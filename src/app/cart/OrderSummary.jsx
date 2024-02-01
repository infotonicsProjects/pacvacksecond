import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ApplyPromoCode from "./ApplyPromoCode";

const OrderSummary = ({ data }) => {
  let price = parseInt(0);
  data?.forEach((element) => {
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
      // if (element?.price[0] === '[') {
      //   const parseData = JSON.parse(element?.price)
      //   var elementPrice = parseData[0]
      // } else {
      //   var elementPrice = element?.price
      // }
      price += elementPrice * element?.qty;
    }
  });
  return (
    <Grid item xs={10} md={4} sm={10} className="p-5 responsive-p-0">
      <Box className="p-4 " style={{ background: "#F8F8F8" }}>
        <Box>
          <h2>Order Summary</h2>
        </Box>
        <Box className="d-flex justify-content-between ">
          <h5 className="fs-6 mb-0">SubTotal</h5>
          <p className="mb-1">Rs {price}</p>
        </Box>
        {/* <Box className="text-success d-flex justify-content-between fw-light">
          <h5 className="text-success fs-6 fw-light text-decoration-underline">
            Saving
          </h5>

          <p>-$17.17</p>
        </Box> */}
        <Box className=" d-flex justify-content-between fw-light">
          <div>
            <h5 className="te fs-6 fw-light text-decoration-underline d-inline-block">
              Shipping
            </h5>
            <span> (calculated at checkout)</span>
          </div>

          <p>-</p>
        </Box>
        <Box className=" d-flex justify-content-between fw-light">
          <div>
            <h5 className=" fs-6 fw-light text-decoration-underline d-inline-block">
              Tax
            </h5>
            <span> (calculated at checkout)</span>
          </div>

          <p>-</p>
        </Box>
        <Box className=" d-flex justify-content-between fs-5 border-top border-bottom py-3">
          <h5 className="  d-inline-block mb-0">Total</h5>

          <p className="mb-0">Rs {price}</p>
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
        <Box>
          {data?.length > 0 && (
            <Link href="/shipping">
              <button className="btn btn-lg btn-dark rounded-pill mt-3 w-100">
                Checkout
              </button>
            </Link>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default OrderSummary;
