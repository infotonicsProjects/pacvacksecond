"use client";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Link from "next/link";
import { urlImage } from "../../Environment";
import Image from "next/image";
export default function sliderImg({ data, id }) {
  const image = [data?.images];
  const dimension = data?.dimensions;
  const colorsJson = data?.bag_color;
  const colorsJson2 = data?.colors;
  if (data?.price[0] === '[') {
    const priceParse = JSON.parse(data?.price);
    var price = priceParse[0];

  } else {
    var price = data?.price;

  }
  try {
    const colorsFirst = JSON.parse(colorsJson);
    const colorsSeond = JSON.parse(colorsJson2);
    var colors = [colorsFirst[0], colorsSeond[0]];
  } catch (err) {
    const colorsFirst = colorsJson;
    var colors = [colorsFirst];
  }
  const [value, setValue] = React.useState(4);
  const [selectedImages, setSelectedImages] = useState(image);
  const [selectedcolor, setSelectedcolor] = useState(colors[0]);
  const [img, setImg] = useState("");
  const [dimensionData, setDimension] = useState([0]);
  const [selectedValue, setSelectedValue] = useState(25);
  const [selectedValueSize, setSelectedValueSize] = useState(data?.dimensions);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const getImgProps = (img) => {
    setImg(img);
  };
  useEffect(() => {
    if (dimension[0] === "[") {
      const parseData = JSON.parse(dimension);
      setDimension(parseData);
    } else {
      setDimension([dimension]);
    }
    localStorage.clear();
  }, []);
  const handleColorChange = (color, i) => {
    setSelectedcolor(color);
    // setSelectedImages(Object.values(image)[i])
  };

  return (
    <div className="px-4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="mainimgBox">
            <img
              src={img}
              className="slideImgBox"
              alt={"bag - image"}
              width={400}
              height={600}
            />
          </div>
          <div className="py-4">
            <Grid container spacing={1}>
              {selectedImages?.map((item) => (
                <ImageSlide item={item} getImgProps={getImgProps} img={img} />
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item md={6} className="responsive-width-padding">
          <Box style={{ padding: "20px", background: "#F8F8F8" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Box pt={0}>
                  <Typography variant="h6">{data?.names}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Box px={2}>
                    <Typography className="pl-4" variant="body1">
                      {value}
                    </Typography>
                  </Box>
                  <Typography
                    style={{ textDecoration: "underline" }}
                    className="pl-4"
                    variant="body1"
                  >
                    4108 Review
                  </Typography>
                </Box>
              </Box>
              <Box>
                <img
                  src={img}
                  className="subslideImgBox"
                  alt={"bag - image"}
                  width={50}
                  height={100}
                />
              </Box>
            </Box>
            <Box pt={2}>
              <Typography variant="body1">{data?.desc}</Typography>
            </Box>
            <p className="mb-1 pb-0">Colors{" "}  {selectedcolor}</p>
            <Box
              className="d-flex  align-items-center mb-2"
              sx={{ gap: "20px" }}
            >
              {colors?.map((item, i) => (
                <Box
                  as="div"
                  className="rounded-circle  d-flex justify-content-center  align-items-center"
                  sx={{
                    width: "25px",
                    height: "25px",
                    border: `1px solid ${selectedcolor === item ? "black" : "none"
                      }`,
                  }}
                  key={i}
                  onClick={() => handleColorChange(item, i)}
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
            </Box>
            <Box>
              <TextField
                style={{ width: "100%" }}
                name="cls"
                select
                value={selectedValueSize}
                margin="normal"
                variant="outlined"
                onChange={(e) => setSelectedValueSize(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Size</InputAdornment>
                  ),
                }}
              >
                {dimensionData?.map((item, i) => (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box>
              <TextField
                style={{ width: "100%" }}
                name="cls"
                select
                value={selectedValue}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Quantity</InputAdornment>
                  ),
                }}
              >
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={500}>500</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={2000}>2000</MenuItem>
              </TextField>
            </Box>

            <Box>
              <Typography variant="body1">
                1200 starting at ₹ {price * 1200}
                {console.log(price)}
              </Typography>
            </Box>
            <Box pt={1}>
              <Typography variant="body1">
                Get it as soon as Sep 15th to 02451
              </Typography>
            </Box>

            <Box pt={1} display="flex" alignItems="center">
              <img src="./img/pay.png" width="65px" height="20px" alt="" />
              <Typography variant="body1">
                Pay in 4 interest-free payments
              </Typography>
            </Box>
            <Box>
              <Link
                href={`/designpicks/${id}`}
                onClick={() => sessionStorage.setItem("productId", id)}
              >
                <Box className="btnbox" style={{ background: "#000" }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Box display="flex" alignItems="center">
                        <Box>
                          <Typography
                            className="pl-4"
                            style={{ color: "#fff" }}
                            variant="body1"
                          >
                            Start designs
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="body2" style={{ color: "#fff" }}>
                          Rounded Corner Business Cards
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src="./img/copy.webp" style={{}} alt="" />
                    </Box>
                  </Box>
                </Box>
              </Link>
              <Link
                href={`/designpicks/${id}`}
                onClick={() => sessionStorage.setItem("productId", id)}
              >
                <Box my={1} className="btnbox" style={{ background: "#fff" }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Box display="flex" alignItems="center">
                        <Box>
                          <Typography
                            className="pl-4"
                            style={{ color: "#000" }}
                            variant="body1"
                          >
                            Upload design
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="body2" style={{ color: "#000" }}>
                          Have a design? Upload and edit it
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src="./img/upload.webp" alt="" />
                    </Box>
                  </Box>
                </Box>
              </Link>
              <Box className="align-items-center justify-content-center d-flex pt-2">
                <img src="./img/right.webp" alt="" />
                <Typography>100% satisfaction guaranteed</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
const ImageSlide = ({ item, img, getImgProps }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (item[0] === "[") {
      const parseData = JSON.parse(item);
      setData(parseData);
      getImgProps(parseData[0]);
    } else {
      const image =
        item?.slice(0, 4) === "http" ? item : urlImage + item?.slice(6);
      setData([image]);
      getImgProps(image);
    }
  }, []);
  return (
    <>
      {data?.map((item) => (
        <Grid item>
          <div
            className={
              item === img
                ? "imgBox border border-dark h-auto"
                : "imgBox h-auto"
            }
            onClick={() => getImgProps(item)}
          >
            <img
              src={item}
              className="subslideImgBox"
              alt={"bag - image"}
              width={50}
              height={100}
            />
          </div>
        </Grid>
      ))}
    </>
  );
};
