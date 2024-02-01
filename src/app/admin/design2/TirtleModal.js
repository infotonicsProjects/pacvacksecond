import { urlImage } from "../../../Environment";
import { PostData, PostDataUplaod } from "../../../utlis/ClientApi";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { useRef } from "react";
import ColorPicker from "react-pick-color";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ToastColor } from "../../../utlis/Toast";
import Select from "react-select";

const NextModal = ({
  previewOpen,
  setPreviewOpen,
  setDesignName,
  designName,
  setBackgroungImg,
  setBackgroundColors,
  backgroundImg,
  backgroundColors,
  bagsImages,
  setBagsImages,
  setColors,
}) => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadFile, setUploadFile] = useState([]);
  const [secondLoading, setSecondLoading] = useState(false);
  const [dimension, setDimension] = useState([
    { id: uuidv4(), height: 1500, width: 1000, price: 1000, qty: 0 },
  ]);
  const [rotoColors, setRotoColors] = useState([
    {
      id: uuidv4(),
      rotoColor: "#00000",
      rotoColorbag: "#300",
      rotoPrice: 2000,
    },
  ]);
  const controller = new AbortController();
  const signal = controller.signal;
  const imageRef = useRef();
  const rotoRef = useRef();

  const handleImageChange = (e, id, index) => {
    const uploadImages = e.target.files;
    if (uploadImages.length > 0) {
      const promises = Array.from(uploadImages).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      });
      Promise.all(promises).then((base64Images) => {
        handleUploadImage(id, [...base64Images]);

        // handleUploadImage(id)
      });
    }
  };
  const handleUploadImage = async (id, uploadFile) => {
    const data = new FormData();
    uploadFile?.forEach((item, i) => {
      data.append(`photos[${i}]`, item);
    });
    const uploadImage = await PostDataUplaod(
      "upload/file_manager",
      setLoading,
      signal,
      data,
    );
    if (uploadImage !== undefined && uploadImage !== null) {
      uploadImage?.file?.map((item) => {
        setBackgrounds((prev) => {
          const newState = [
            ...prev,
            {
              x: 50,
              y: 50,
              width: 550,
              height: 700,
              // urlBlob: uploadFile[0],
              url: urlImage + uploadImage?.path + "/" + item,
              urlback: urlImage + uploadImage?.path + "/" + item,
              id: id,
              back: 0,
            },
          ];
          setBackgroungImg(newState[0]);
          setBackgroundColors(newState);
          return newState;
        });
      });
      const foundIndex = bagsImages.findIndex((x) => x.id == id);
      const item = bagsImages[foundIndex];
      item.images =
        urlImage + uploadImage?.path + "/" + uploadImage?.file?.slice(-1);
      setBagsImages([...bagsImages]);
    }
  };
  const handleDelete = (e, id) => {
    const filterData = bagsImages.filter((a) => a.id !== id);
    setBagsImages([...filterData]);
    setBackgroundColors((prev) => {
      const filterData = prev.filter((a) => a.id !== id);
      return [...filterData];
    });
    setBackgroungImg((prev) => {
      if (prev?.id === id) {
        return {};
      } else {
        return prev;
      }
    });
  };
  const handleAdd = (e) => {
    setBagsImages([
      ...bagsImages,
      { id: uuidv4(), colors: "#300", bag_color: "#eee", images: "" },
    ]);
  };
  const handleAddDimension = (e) => {
    setDimension([
      ...dimension,
      { id: uuidv4(), height: 1500, width: 1000, price: 1000, qty: 0 },
    ]);
  };
  const handleDeleteDimension = (e, id) => {
    const filterData = rotoColors.filter((a) => a.id !== id);
    setDimension([...filterData]);
  };
  const handleAddRoto = (e) => {
    setRotoColors([
      ...rotoColors,
      {
        id: uuidv4(),
        rotoColor: "#00000",
        rotoColorbag: "#300",
        rotoPrice: 2000,
      },
    ]);
  };
  const handleDeleteRoto = (e, id) => {
    const filterData = rotoColors.filter((a) => a.id !== id);
    setRotoColors([...filterData]);
  };
  const handleFormSubmit = async (e) => {
    setSecondLoading(true);
    e.preventDefault();
    localStorage.removeItem("parentId");
    const designId = JSON.parse(localStorage.getItem("designId"));
    const cateId = sessionStorage.getItem("categoryId");

    const images = [];
    const colors = [];
    const bagColors = [];
    const dimensions = [];
    const price = [];
    const qty = [];
    const rotoColor = [];
    const rotoColorBag = [];
    const rotoPrice = [];
    bagsImages.forEach((item) => {
      images.push(item.images);
      colors.push(item.colors);
      bagColors.push(item.bag_color);
    });
    dimension.forEach((item) => {
      dimensions.push(item.width + "x" + item.height);
      qty.push(item.qty);
      price.push(item.price);
    });
    rotoColors?.forEach((item) => {
      rotoColor.push(item.rotoColor);
      rotoColorBag.push(item.rotoColorbag);
      rotoPrice.push(item.rotoPrice);
    });

    const rotoSend = JSON.stringify(rotoColor);
    const colorsSend = JSON.stringify(colors);
    const dimensionS = JSON.stringify(dimensions);
    const qtys = JSON.stringify(qty);
    const imagesSend = JSON.stringify(images);
    const priceSend = JSON.stringify(price);
    // const productData = {
    //   sp_rp: e.target[0].checked ? "sp" : "rp",
    //   categ_id: cateId,
    //   names: designName,
    //   desc: e.target[4].value,
    //   colors: colorsSend,
    //   dimensions: dimensionS,
    //   price: priceSend,
    //   invent_qty: qtys,
    //   bag_color: rotoSend,
    //   css_style: "css_style",
    //   designid: designId.id,
    //   overview_title: "overview_title",
    //   faq: "faq",
    //   specs: "specs",
    //   overview_list: "overview_list",
    //   images: imagesSend,
    //   overview_description: "overview_description",
    //   parent_id: 0,
    // }
    const productData = {
      atributes: {
        red: {
          color: "#ffff",
          image: [
            "public/uploads/12458/Longwear.jpeg",
            "public/uploads/12458/Longwear.jpeg",
          ],
          designid: [100, 100],
          dimensions: {
            "1600x1500": {
              price: 1000,
              invent_qty: 100,
            },
            "100X100": {
              price: 1000,
              invent_qty: 100,
            },
          },
        },
        blue: {
          color: "#ffff",
          image: [
            "public/uploads/12458/Longwear.jpeg",
            "public/uploads/12458/Longwear.jpeg",
          ],
          designid: [100, 100],
          dimensions: {
            "1600x1500": {
              price: 1000,
              invent_qty: 100,
            },
            "100X100": {
              price: 1000,
              invent_qty: 100,
            },
          },
        },
      },
    };
    const updateProduct = await PostData(
      "products_table",
      setSecondLoading,
      signal,
      productData,
    );
    if (updateProduct !== undefined) {
      localStorage.setItem("parentId", updateProduct.id);
      sessionStorage.setItem("parentId", updateProduct.id);
      // resolve({ id: updateProduct.id, status: true, })
      setPreviewOpen(false);
    }

    // if (result.status) {
    //   const allsendToServer = new Promise((resolve,) => {
    //     bagsImages?.slice(1)?.forEach(async (item, i) => {
    //       const colorsSend = JSON.stringify([item.colors, item.rotoColor])
    //       const rotoSend = JSON.stringify([item.bag_color, item.rotoColorbag])
    //       const productData = {
    //         sp_rp: e.target[0].checked ? "sp" : "rp",
    //         // name:name,
    //         categ_id: cateId,
    //         names: designName,
    //         desc: e.target[4].value,
    //         colors: colorsSend,
    //         dimensions: item.width + "x" + item.height,
    //         price: item.price,
    //         invent_qty: item.qty,
    //         bag_color: rotoSend,
    //         css_style: "css_style",
    //         designid: designId.id,
    //         overview_title: "overview_title",
    //         faq: "faq",
    //         specs: "specs",
    //         overview_list: "overview_list",
    //         images: item.images,
    //         overview_description: "overview_description",
    //         parent_id: localStorage.getItem("parentId")
    //       }
    //       const updateProduct = await PostData(
    //         "products_table",
    //         setSecondLoading,
    //         signal,
    //         productData
    //       );
    //       if (updateProduct !== undefined) {
    //         if (i === bagsImages.length - 2) {
    //           ToastColor('Products Created')
    //           resolve({ status: true })
    //         }
    //       }
    //     })
    //   })
    //   const resultSecond = await allsendToServer
    //   if (resultSecond.status) {
    //     setPreviewOpen(false)
    //   }
    // } else if (result.status && result.length === 1) {
    //   setPreviewOpen(false)
    // }
  };
  const handleUpdate = (e, id) => {
    const foundIndex = dimension.findIndex((x) => x.id == id);
    const item = dimension[foundIndex];
    if (e.target.name === "height") {
      item.height = e.target.value;
    } else if (e.target.name === "width") {
      item.width = e.target.value;
    } else if (e.target.name === "price") {
      item.price = e.target.value;
    } else if (e.target.name === "qty") {
      item.qty = e.target.value;
    }
    setDimension([...dimension]);
  };
  const handleUpdateRoto = (e, id) => {
    const foundIndex = rotoColors.findIndex((x) => x.id == id);
    const item = rotoColors[foundIndex];
    if (e.target.name === "rotoprice") {
      item.rotoPrice = e.target.value;
    }
  };
  const handleUpdateColor = (id, value, typeofColor) => {
    if (typeofColor === "bag") {
      setBagsImages((prev) => {
        const foundIndex = prev.findIndex((x) => x.id === id);
        const item = prev[foundIndex];
        item.bag_color = value;
        return [...prev];
      });
    } else if (typeofColor === "printing") {
      setBagsImages((prev) => {
        const foundIndex = prev.findIndex((x) => x.id === id);
        const item = prev[foundIndex];
        item.colors = value;
        return [...prev];
      });
      setColors(value);
    } else if (typeofColor === "rotocolor") {
      setRotoColors((prev) => {
        const foundIndex = prev.findIndex((x) => x.id === id);
        const item = prev[foundIndex];
        item.rotoColor = value;
        return [...prev];
      });
    } else if (typeofColor === "rotocolorbag") {
      setRotoColors((prev) => {
        const foundIndex = prev.findIndex((x) => x.id === id);
        const item = prev[foundIndex];
        item.rotoColorbag = value;
        return [...prev];
      });
    }
  };
  const handleRotoChange = (e) => {
    if (e.target.checked) {
      rotoRef.current.style.display = "block";
    } else {
      rotoRef.current.style.display = "none";
    }
  };

  return (
    <Modal
      open={previewOpen}
      onClose={() => setPreviewOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid className="justify-content-center align-items-center d-flex mt-2">
          <Button
            sx={{
              color: "black",
              position: "relative",
              right: "-50%",
              top: "-27px",
            }}
            onClick={() => setPreviewOpen(false)}
            type="button"
            disabled
          >
            X
          </Button>
        </Grid>
        <h3 className="text-center">Add Products Design </h3>
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{ p: "12px 0px", overflow: "auto", m: "20px 5px", gap: "40px" }}
            className="d-flex mt-2 h-100 overflow-hidden"
          >
            <Grid container md={12} col={12} gap="30px">
              <Grid
                item
                md={6}
                className="border p-3 bg-body-secondary"
                height={"500px"}
              >
                <Box className="bg">
                  <h6 className="text-center mb-3">Preview Image</h6>
                  <Box display={"flex"} gap="20px">
                    <div className="d-flex flex-column">
                      {backgroundColors?.map((item, i) => (
                        <img
                          src={item?.url}
                          height={50}
                          width={50}
                          alt={`bag-image-${i}`}
                          className={
                            backgroundImg?.url === item?.url &&
                            "border border-dark"
                          }
                          onClick={() => setBackgroungImg(backgroundColors[i])}
                        />
                      ))}
                    </div>
                    {backgroundImg.url && (
                      <img
                        src={backgroundImg?.url}
                        width={400}
                        height={600}
                        alt="preview bag image"
                        ref={imageRef}
                      />
                    )}
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={5}
                className="border p-2 bg-info-subtle overflow-auto"
                height={"500px"}
              >
                <div className="" style={{ maxHeight: "500px" }}>
                  <Box>
                    <Box className="d-flex flex-column">
                      <Typography as="h1" className="fs-4 fw-bold">
                        Product/Design Name and Title
                      </Typography>
                      <Box display="flex">
                        <Box>
                          <FormLabel htmlFor="sc-p">Screen printing</FormLabel>
                          <Checkbox
                            {...label}
                            color="default"
                            id="sc-p"
                            defaultChecked
                          />
                        </Box>
                        <Box>
                          <FormLabel htmlFor="ro-p">ROTO printing</FormLabel>
                          <Checkbox
                            {...label}
                            color="default"
                            id="ro-p"
                            onChange={handleRotoChange}
                            defaultChecked
                          />
                        </Box>
                      </Box>
                      <Box className="mt-3">
                        <TextField
                          type="text"
                          className=" me-2 mb-2"
                          placeholder="Design name "
                          onChange={(e) => setDesignName(e.target.value)}
                          value={designName}
                          id="designName"
                          label="Design Name"
                        />

                        <TextField
                          type="text"
                          className=" "
                          // onChange={(e) => setDesignName(e.target.value)}
                          // value={designName}
                          label="Tips and Suggestion"
                          id="designTips"
                        />

                        {bagsImages?.map((item, i) => (
                          <AddProductImages
                            loading={loading}
                            handleImageChange={handleImageChange}
                            handleUploadImage={handleUploadImage}
                            handleDelete={handleDelete}
                            index={i}
                            lenght={bagsImages?.length}
                            handleAdd={handleAdd}
                            item={item}
                            handleUpdateColor={handleUpdateColor}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid container gap="30px">
                <Grid
                  item
                  md={6}
                  className="border p-2 bg-warning-subtle overflow-auto"
                  height={"200px"}
                >
                  <h6 className="text-center">Diemension</h6>
                  <Box>
                    {dimension?.map((item, index) => (
                      <Box
                        display="flex"
                        gap={"20px"}
                        key={index}
                        className="mb-2"
                      >
                        <TextField
                          type="number"
                          name="height"
                          placeholder="height"
                          className=""
                          label="height"
                          value={item.height}
                          onChange={(e) => handleUpdate(e, item.id)}
                        />
                        <TextField
                          type="number"
                          placeholder="width"
                          name="width"
                          className=""
                          label="width"
                          value={item.width}
                          onChange={(e) => handleUpdate(e, item.id)}
                        />
                        <TextField
                          type="number"
                          placeholder="price"
                          name="price"
                          className=""
                          label="price"
                          value={item.price}
                          onChange={(e) => handleUpdate(e, item.id)}
                        />
                        <TextField
                          type="number"
                          name="qty"
                          placeholder="Quantity"
                          className=""
                          label="Quantity"
                          value={item.qty}
                          onChange={(e) => handleUpdate(e, item.id)}
                        />
                        {dimension?.length !== index + 1 &&
                        dimension?.length !== 1 ? (
                          <button
                            className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                            style={{ width: "30px", height: "30px" }}
                            onClick={(e) => handleDeleteDimension(e, item.id)}
                            type="button"
                          >
                            <FaMinus />
                          </button>
                        ) : (
                          <>
                            {dimension?.length > 1 && (
                              <button
                                className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                                style={{ width: "30px", height: "30px" }}
                                onClick={(e) =>
                                  handleDeleteDimension(e, item.id)
                                }
                                type="button"
                              >
                                <FaMinus />
                              </button>
                            )}
                            <button
                              className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                              style={{ width: "30px", height: "30px" }}
                              onClick={(e) => handleAddDimension(e)}
                              type="button"
                            >
                              <FaPlus />
                            </button>
                          </>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  ref={rotoRef}
                  className="border p-2 bg-danger-subtle overflow-auto"
                  height={"200px"}
                >
                  <h6>ROTO</h6>
                  {rotoColors?.map((item, index) => (
                    <Box display={"flex"} gap="20px" alignItems={"center"}>
                      <div>
                        <p>Color</p>
                        <ColorPickerCompontent
                          i={1}
                          item={item}
                          handleUpdateColor={handleUpdateColor}
                          typecolor={"rotocolor"}
                        />
                      </div>
                      <div>
                        <p>Bag Color</p>
                        <ColorPickerCompontent
                          i={2}
                          item={item}
                          handleUpdateColor={handleUpdateColor}
                          typecolor={"rotocolorbag"}
                        />
                      </div>
                      <TextField
                        type="number"
                        placeholder="price"
                        className=""
                        label="price"
                        value={item.rotoPrice}
                        onChange={(e) => handleUpdateRoto(e, item.id)}
                        name="rotoprice"
                      />
                      {rotoColors?.length !== index + 1 &&
                      rotoColors?.length !== 1 ? (
                        <button
                          className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                          style={{ width: "30px", height: "30px" }}
                          onClick={(e) => handleDeleteRoto(e, item.id)}
                          type="button"
                        >
                          <FaMinus />
                        </button>
                      ) : (
                        <>
                          {rotoColors?.length > 1 && (
                            <button
                              className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                              style={{ width: "30px", height: "30px" }}
                              onClick={(e) => handleDeleteRoto(e, item.id)}
                              type="button"
                            >
                              <FaMinus />
                            </button>
                          )}
                          <button
                            className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
                            style={{ width: "30px", height: "30px" }}
                            onClick={(e) => handleAddRoto(e)}
                            type="button"
                          >
                            <FaPlus />
                          </button>
                        </>
                      )}
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="d-flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {secondLoading ? (
              <button
                className="btn-dark text-white btn rounded-pill px-5 mt-3"
                disabled
                type="submit"
              >
                Save
              </button>
            ) : (
              <button
                className="btn-dark text-white btn rounded-pill px-5 mt-3"
                type="submit"
              >
                Save
              </button>
            )}
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default NextModal;

const ColorPickerCompontent = ({ i, item, handleUpdateColor, typecolor }) => {
  const divref = useRef();
  const [open, setOpen] = useState(false);
  const handleChange = (color) => {
    handleUpdateColor(item.id, color.hex, typecolor);
  };
  const handleClose = () => {
    divref.current.style.display = "none";
  };
  const state = {
    bag: item.bag_color,
    printing: item.colors,
    rotocolorbag: item.rotoColorbag,
    rotocolor: item.rotoColor,
  };
  return (
    <Box
      as="div"
      className="rounded-circle  d-flex justify-content-center  align-items-center"
      sx={{
        width: "25px",
        height: "25px",
        border: `1px solid ${"grey"}`,
        zIndex: 10000,
      }}
      key={i}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <Box id={typecolor}>
        <Box
          position={"absolute"}
          left={"75%"}
          top={"20%"}
          id="color-code-div"
          ref={divref}
          style={{ display: open ? "block" : "none" }}
        >
          <Button
            sx={{
              color: "black",
              position: "relative",
              right: "-80%",
            }}
            type="button"
            onClick={() => handleClose()}
          >
            X
          </Button>
          <ColorPicker
            color={state[typecolor]}
            onChange={(color) => handleChange(color)}
          />
        </Box>
      </Box>
      <Typography
        as="p"
        className="rounded-circle "
        sx={{
          width: "15px",
          height: "15px",
          background: state[typecolor],
          cursor: "pointer",
        }}
      ></Typography>
      <input type="text" value={state[typecolor]} className="d-none" />
    </Box>
  );
};
const AddProductImages = ({
  handleImageChange,
  loading,
  handleDelete,
  lenght,
  index,
  handleAdd,
  item,
  handleUpdateColor,
}) => {
  return (
    <div className="my-3 d-flex" style={{ gap: "30px" }}>
      <div
        className="d-flex align-items-baseline"
        style={{ gap: "10px" }}
        id="form-2"
      >
        <div className="d-flex flex-column">
          <input
            type="file"
            className="form-control d-none"
            id={item.id}
            onChange={(e) => handleImageChange(e, item.id, index)}
            style={{ height: "35px" }}
          />

          {loading ? (
            <button className="btn btn-dark rounded-pill text-white" disabled>
              Uploading
            </button>
          ) : (
            <label
              className="btn btn-dark rounded-pill text-white py-2"
              type="button"
              htmlFor={item.id}
            >
              Upload
            </label>
          )}
        </div>
        <h6>Color</h6>
        <ColorPickerCompontent
          i={1}
          item={item}
          handleUpdateColor={handleUpdateColor}
          typecolor={"bag"}
        />
        <h6>Printing color</h6>
        <ColorPickerCompontent
          i={2}
          item={item}
          handleUpdateColor={handleUpdateColor}
          typecolor={"printing"}
        />
      </div>
      {lenght !== index + 1 && lenght !== 1 ? (
        <button
          className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
          style={{ width: "30px", height: "30px" }}
          onClick={(e) => handleDelete(e, item.id)}
          type="button"
        >
          <FaMinus />
        </button>
      ) : (
        <>
          {lenght > 1 && (
            <button
              className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
              style={{ width: "30px", height: "30px" }}
              onClick={(e) => handleDelete(e, item.id)}
              type="button"
            >
              <FaMinus />
            </button>
          )}
          <button
            className="btn btn-sm btn-tericary rounded-circle d-flex justify-content-center"
            style={{ width: "30px", height: "30px" }}
            onClick={(e) => handleAdd(e)}
            type="button"
          >
            <FaPlus />
          </button>
        </>
      )}
    </div>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  overflow: "auto",
  overflowX: "hidden",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };
