"use client";
import {
  Box,
  Button,
  Drawer,
  Grid,
  InputAdornment,
  MenuItem,
  Skeleton,
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
  const [value, setValue] = useState(4);
  const [products, setProducts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [selectedcolor, setSelectedColor] = useState("");
  const [dimension, setDimension] = useState([]);
  const [selectedValueSize, setSelectedValueSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [designId, setDesign] = useState([]);
  const [selectedQty, setSelectedQty] = useState(25);
  const [img, setImg] = useState("/");
  const [drawerOpen, setDrawer] = useState(false);
  useEffect(() => {
    const parseProducts = JSON.parse(data.atributes);
    const colorsArr = [];
    const dimensionArr = [];
    const priceArr = [];
    Object.entries(parseProducts).forEach(([key]) => {
      colorsArr.push(key);
    });
    Object.entries(parseProducts[colorsArr[0]].dimensions).forEach((item) => {
      dimensionArr.push(item[0]);
      priceArr.push(item[1]);
    });
    setDesign(parseProducts[colorsArr[0]].designid);
    setColors(colorsArr);
    setSelectedColor(colorsArr[0]);
    setProducts(JSON.parse(data?.atributes));
    setDimension(dimensionArr);
    setSelectedPrice(priceArr);

    setSelectedValueSize(
      Object.entries(parseProducts[colorsArr[0]].dimensions)[0][0],
    );
    setSelectedProduct(parseProducts[colorsArr[0]]);
    setImg(parseProducts[colorsArr[0]].image[0]);
    localStorage.clear();
  }, []);
  const handleColorChange = (color, i) => {
    setSelectedColor(color);
    setSelectedProduct(products[color]);
    const dimensionArr = [];
    const priceArr = [];
    Object.entries(products[color].dimensions).forEach((item) => {
      dimensionArr.push(item[0]);
      console.log(item[1])
      priceArr.push(item[1]);
    });
    setSelectedValueSize(Object.entries(products[color].dimensions)[0][0]);
    setDimension(dimensionArr);
    setSelectedPrice(priceArr);
    setImg(products[color].image[0]);
    setDesign(products[color].designid);
    // setSelectedImages(Object.values(image)[i])
  };
  const getImgProps = (img) => {
    setImg(img);
  };

  const handleDesignView = () => {
    setDrawer(true);
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
              <ImageSlide
                item={selectedProduct?.image}
                getImgProps={getImgProps}
                img={img}
              />
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
                <Box pt={2}>
                  <Typography variant="h6">{data?.names}</Typography>
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
            <Box marginTop={"0.5rem"}>
              <p>Colors</p>
            </Box>
            <Box
              className="d-flex align-items-center my-2"
              sx={{ gap: "20px" }}
            >
              {colors?.map((item, i) => (
                <Box
                  as="div"
                  className="rounded-circle  d-flex justify-content-center  align-items-center"
                  sx={{
                    width: "25px",
                    height: "25px",
                    border: `1px solid ${selectedcolor === item ? "black" : "#eee"
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
                {dimension?.map((item, i) => (
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
                value={selectedQty}
                margin="normal"
                variant="outlined"
                onChange={(e) => setSelectedQty(e.target.value)}
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
                1200 starting at ₹ {selectedPrice[0]?.price * 1200}

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
                onClick={() => {
                  sessionStorage.setItem("productId", id), handleDesignView();
                }}
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
                href={{
                  pathname: `/designpicks/${id}`,
                }}
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
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawer(false)}
      >
        <Box color="black" display={"flex"} justifyContent={"end"}>
          <Button onClick={() => setDrawer(false)}>X</Button>
        </Box>
        <Grid container col={12} width={"40vw"} alignItems={"center"}>
          {designId?.map((item) => (
            <ListDesigns id={item} />
          ))}
        </Grid>
      </Drawer>
    </div>
  );
}
const ImageSlide = ({ item, img, getImgProps }) => {
  return (
    <>
      {item?.map((item) => (
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
import { CustomeHook } from "../../Environment/CustomeHook";
import { useRouter } from "next/navigation";
const ListDesigns = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const data = CustomeHook(`design_templates_table/${id}`, setLoading);
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/design2?designid=${id}`);
  };
  return (
    <>
      {loading ? (
        <Grid
          item
          xs={12}
          md={12}
          margin={2}
          padding={2}
          className="border rounded"
          id={id}
          onClick={() => handleClick(data?.id)}
          sx={{ cursor: "pointer" }}
        >
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={80}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={80}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={80}
            animation="wave"
          />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          md={12}
          margin={2}
          padding={2}
          className=" rounded"
          id={id}
          onClick={() => handleClick(data?.id)}
          sx={{ cursor: "pointer", border: `1px solid ${data?.colors} ` }}
        >
          <Box width="56%">
            <Box>
              <img
                src={data?.design_url}
                width={500}
                height={250}
                alt="design"
                className="border"
              />
            </Box>
            {/* <Box>
            <Box>
              Text color
            </Box>
            <Box as="div" className="rounded-circle  d-flex justify-content-center  align-items-center" sx={{ width: "25px", height: "25px", border: `1px solid ${"black"}` }} >
              <Typography as="p" className="rounded-circle " sx={{ width: "15px", height: "15px", background: data?.colors, cursor: "pointer" }}></Typography>
            </Box>
          </Box> */}
            <Box marginTop={"15px"}>
              <Typography
                component={"h4"}
                textAlign={"center"}
                className="fw-bold"
              >
                {data?.design_name}
              </Typography>
              <Link
                href={{
                  pathname: "/design2",
                  query: { designid: id },
                }}
                className="mt-2 text-dark"
              >
                <Typography
                  component={"h4"}
                  textAlign={"center"}
                  className="fw-medium"
                >
                  Click here to Design
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};
