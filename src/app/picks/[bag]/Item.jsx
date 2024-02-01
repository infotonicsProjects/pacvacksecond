import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { urlImage } from "../../../Environment";
import Link from "next/link";

const Item = ({ item }) => {
  var colors = []

  if (item?.bag_color && item?.bag_color[0] === '[') {
    colors = JSON.parse(item?.bag_color)
  }
  if (item.price && item?.price[0] === "[") {
    const imagesData = JSON.parse(item?.price);
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
    <div
      className="t-all-product-info mx-3"
      style={{
        maxHeight: "600px",
        paddingBottom: "15px",
        margin: "15px",
        marginBottom: "50px",
        cursor: "pointer",
      }}
      key={item?.id}
      id={item?.id}
    >
      <ImageComponent item={item} />
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
        <div className="d-flex" style={{ gap: "10px" }}>
          <Rating
            name="simple-controlled"
            value={4}
          />
          <Typography component={"p"}>4</Typography>
        </div>
        <p className="fs-6 fw-medium mb-0 text-ellipsis overflow-hidden" style={{ marginTop: "2px", width: "100px ", height: "25px" }}>
          {item?.desc ? item?.desc : item?.names}
        </p>
        <p className="fs-6 fw-light mt-0 text-ellipsis overflow-hidden" style={{ maxWidth: "150px ", textOverflow: "ellipsis" }}>Starting at Rs {elementPrice}</p>
      </div>
    </div>
  );
};
const ImageComponent = ({ item }) => {
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
    })
  }
  return (
    <div className="mt-1">
      <Link href={{
        pathname: '/des',
        query: { bag: item?.id }
      }}>
        <img
          src={image}
          alt={item?.alt_text ?? "bag"}
          width={400}
          height={520}
          style={{ padding: "15%" }}
          className="responsive-height-width bg-body-tertiary"
        />

      </Link>
    </div>
  )
}
export default Item;
