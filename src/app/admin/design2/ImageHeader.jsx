import { Box, Grid, InputBase, MenuItem, Select, styled } from "@mui/material";
import React, { useState } from "react";
import Rotation from "./Rotation";
import { v4 as uuidv4 } from "uuid";
import ImageReplace from "./ImageReplace";
import ArrangeForwardbackWard from "./ArrangeForwardbackWard";
import ColorPickerImage from "./ColorChaangeImage";

const ImageHeader = ({
  selectedId,
  selectShape,
  setImages,
  images,
  setOpen,
}) => {
  const [enableRotation, setEnableRotaion] = useState(false);
  const [openReplacer, setOpenReplace] = useState(false);
  const [openArrange, setOpenArrange] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  var item;
  var foundIndex = images.findIndex((x) => x.id === selectedId);
  item = images[foundIndex];

  const handleRotation = (e) => {
    item.rotation = e.target.value;
    setImages([...images]);
  };
  const handleDelete = () => {
    const deleteItem = images.filter((x) => x.id !== selectedId);
    setImages(deleteItem);
    selectShape(null);
  };
  const handleReplace = (imageUrl) => {
    const deleteItem = images.filter((x) => x.id !== selectedId);

    setImages([...deleteItem, { ...item, url: imageUrl }]);
    setOpenReplace(false);
  };
  const handleDuplicate = () => {
    setImages([...images, { ...item, id: uuidv4() }]);
  };
  const handleLock = () => {
    item.draggable = !item.draggable;
    setImages([...images]);
  };
  const handleIndexChangebY1 = (e, id) => {
    if (e.target.name === "plus") {
      item.zIndex = item.zIndex + 1;
      setImages([...images]);
    } else if (e.target.name === "minus") {
      item.zIndex = item.zIndex - 1;
      setImages([...images]);
    } else if (id === 1) {
      item.zIndex = images.length * 3;
      setImages([...images]);
    } else if (id === 0) {
      item.zIndex = 1;
      setImages([...images]);
    }
  };
  const handleRGBChange = (colorcode) => {
    item.red = colorcode.r;
    item.green = colorcode.g;
    item.blue = colorcode.b;
    setImages([...images]);
  };
  const handleChangleAlpha = (colorcode) => {
    item.alpha = colorcode.a;
    setImages([...images]);
  };
  return (
    <React.Fragment>
      <Grid container className="justify-content-around ">
        <Grid item className="d-flex mobile-scroll">
          {" "}
          <Box className="my-auto selected-image">
            <button
              className="btn  btn-sm text-dark mx-2 fw-medium "
              onClick={handleDelete}
            >
              {SVG[2]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Delete
              </span>
            </button>

            <button
              className="btn  btn-sm text-dark mx-2 fw-medium "
              onClick={() => setEnableRotaion(!enableRotation)}
            >
              {SVG[1]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Rotate
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark mx-2 fw-medium"
              onClick={() => setOpenColorPicker(!openColorPicker)}
            >
              {SVG[3]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Color
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
              onClick={() => setOpenReplace(true)}
            >
              {SVG[6]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Replace Image
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark btn-light mx-2 fw-medium mobile-display-none"
              disabled
            >
              {SVG[8]}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Remove Background
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
              onClick={() => setOpenArrange(!openArrange)}
            >
              {SVG[4]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Arrange
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
              onClick={handleDuplicate}
            >
              {SVG[5]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Duplicate
              </span>
            </button>
            <button
              className="btn btn-light btn-sm text-dark  mx-2 fw-medium mobile-display-none"
              disabled
            >
              {SVG[7]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Sharpen
              </span>
            </button>
            <button className="btn btn-light btn-sm text-dark  mx-2 fw-medium ">
              <span
                style={{ verticalAlign: "middle", marginTop: "5px" }}
                onClick={() => setOpen(true)}
              >
                Move
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium  rounded-pill"
              onClick={handleLock}
            >
              {SVG[0]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                {item?.draggable ? "Lock" : "Unlock"}
              </span>
            </button>
          </Box>
        </Grid>
      </Grid>
      {enableRotation && <Rotation handleRotation={handleRotation} />}
      <ImageReplace
        openReplacer={openReplacer}
        setOpenReplace={setOpenReplace}
        handleReplace={handleReplace}
      />
      {openArrange && (
        <ArrangeForwardbackWard
          handleIndexChangebY1={handleIndexChangebY1}
          length={images.length}
          item={item}
        />
      )}
      {openColorPicker && (
        <ColorPickerImage
          handleRGBChange={handleRGBChange}
          handleChangleAlpha={handleChangleAlpha}
          item={item}
        />
      )}
    </React.Fragment>
  );
};

export default ImageHeader;

const SVG = [
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <rect width={16} height={16} />
    <rect
      width={10}
      height={8}
      rx={1}
      transform="matrix(-1 0 0 1 13 6)"
      stroke="black"
      strokeWidth="1.5"
    />
    <path
      d="M5 6V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V6"
      stroke="black"
      strokeWidth="1.5"
    />
    <rect x={7} y={8} width={2} height={2} rx={1} fill="black" />
    <path d="M8 9L8 11" stroke="black" strokeLinecap="round" />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 5px 0px" }}
    viewBox="0 0 14 15"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="2.5"
      y="7.51514"
      width={8}
      height="7.09091"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 3.57576C10 3.57576 14 3.57576 14 7.51515M8.5 2L6.5 3.57576L8.5 5.15152"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.4 14L3.65372 14.0746C3.69206 14.458 4.01469 14.75 4.4 14.75L4.4 14ZM11.6 14L11.6 14.75C11.9853 14.75 12.3079 14.458 12.3463 14.0746L11.6 14ZM2.75372 5.07463L3.65372 14.0746L5.14628 13.9254L4.24628 4.92537L2.75372 5.07463ZM4.4 14.75L11.6 14.75L11.6 13.25L4.4 13.25L4.4 14.75ZM12.3463 14.0746L13.2463 5.07463L11.7537 4.92537L10.8537 13.9254L12.3463 14.0746Z"
      fill="currentColor"
    />
    <path
      d="M2 5H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 4V2.94297C5 2.42218 5.42218 2 5.94297 2H10.057C10.5778 2 11 2.42218 11 2.94297V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>,
  <svg
    viewBox="0 0 16 16"
    height="16px"
    width="16px"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15 13.6667C15 14.403 14.3284 15 13.5 15C12.6716 15 12 14.403 12 13.6667C12 12.9303 13.5 11 13.5 11C13.5 11 15 12.9303 15 13.6667Z"
      fill="currentColor"
      className="color-drop"
    />
    <path
      d="M5.99995 1.5L7.49995 3L12.2929 7.65737C12.693 8.04616 12.6976 8.68716 12.3031 9.08166L8.07078 13.3141C7.68026 13.7046 7.04709 13.7046 6.65657 13.3141L2.61516 9.27267C2.22464 8.88215 2.22464 8.24898 2.61516 7.85846L7.32496 3.14866"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="rect-color"
    />
    <path
      className="triangle"
      d="M13 8H3.00751H2L7.5 13.5L13 8Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <g clipPath="url(#clipArrange)">
      <rect width={16} height={16} />
      <path
        d="M2.12426 5.22361C1.94 5.13148 1.94 4.86852 2.12426 4.77639L7.8882 1.89443C7.95858 1.85924 8.04142 1.85924 8.1118 1.89443L13.8757 4.77639C14.06 4.86852 14.06 5.13148 13.8757 5.22361L8.1118 8.10557C8.04142 8.14076 7.95858 8.14076 7.8882 8.10557L2.12426 5.22361Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 8.5L7.55279 11.2764C7.83431 11.4172 8.16569 11.4172 8.44721 11.2764L14 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 11.5L7.55279 14.2764C7.83431 14.4172 8.16569 14.4172 8.44721 14.2764L14 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clipArrange">
        <rect width={16} height={16} />
      </clipPath>
    </defs>
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <rect width={16} height={16} fill="white" />
    <rect
      width={9}
      height={9}
      rx={1}
      transform="matrix(-1 0 0 1 11 5)"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      width={9}
      height={9}
      rx={1}
      transform="matrix(-1 0 0 1 14 2)"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.5 5L9.5 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 6.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <rect width={16} height={16} />
    <path
      d="M2 11L4 13L6 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 5L12 3L10 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 13V4H7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 4V13H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <rect width={16} height={16} />
    <path
      d="M7.1221 3.60947C7.50112 2.91461 8.49888 2.91461 8.87789 3.60948L13.1934 11.5211C13.5568 12.1875 13.0745 13 12.3155 13H3.68454C2.92548 13 2.44317 12.1875 2.80665 11.5211L7.1221 3.60947Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    width="24px"
    height="24px"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path fill="#fff" d="M0 .499h32v32H0z" />
    <path
      d="M1 2.499a1 1 0 011-1h1.8v2.8H1v-1.8zM1 7.1h2.8v2.8H1zM1 12.7h2.8v2.8H2a1 1 0 01-1-1v-1.8zM3.8 4.299h2.8v2.8H3.8zM3.8 9.899h2.8v2.8H3.8zM6.6 1.499h2.8v2.8H6.6zM6.6 7.1h2.8v2.8H6.6zM6.6 12.699h2.8v2.8H6.6zM9.4 4.299h2.8v2.8H9.4zM9.4 9.899h2.8v2.8H9.4zM12.2 1.499H14a1 1 0 011 1v1.8h-2.8v-2.8zM12.2 7.1H15v2.8h-2.8zM12.2 12.7H15v1.8a1 1 0 01-1 1h-1.8v-2.8z"
      fill="currentColor"
    />
  </svg>,
];
