import { Box, Typography } from "@mui/material";
import React from "react";

import { getUserData } from "../../../utlis/Home";
import ImageComponent from './ImageComponent'
const Item = async ({ item, colors, priceArr }) => {

  const data = await getUserData(`design_templates_table/${item}`)

  return (
    <div
      className="t-all-product-info mx-3"
      style={{
        maxHeight: "600px",
        paddingBottom: "15px",
        margin: "15px",
        marginBottom: "50px",
        cursor: "pointer",
      }}
    >
      <ImageComponent item={data?.data?.design_url} id={data?.data?.id} data={data?.data} />
      <div className="d-flex" style={{ gap: "10px" }} >
        {colors?.map((item, i) => (
          <Box
            as="div"
            className="mt-3  rounded-circle  d-flex justify-content-center  align-items-center"
            sx={{
              width: "25px",
              height: "25px",
              border: `1px solid black`,
            }}
            key={i}
          >
            <Typography
              as="p"
              className="rounded-circle "
              sx={{
                width: "15px",
                height: "15px",
                background: item,
                cursor: "pointer",
              }}
            ></Typography>
          </Box>
        ))}
      </div>
      <div className="tab-p-info ps-0  pt-1">
        <h2 style={{ fontSize: "14px", fontWeight: "500" }} className="text-capitalize text-decoration-underline fs-5 mb-0">
          {item?.alt_text ? item?.alt_text : item?.names}
        </h2>
        <p className="fs-6 fw-light mt-0">1 from Rs {priceArr[0]}</p>
      </div>
    </div>
  );
};

export default Item;
