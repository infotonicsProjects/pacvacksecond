import {
  Box,
  Button,
  Grid,
  InputBase,
  MenuItem,
  Modal,
  Select,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import BottomHeader from "./BottomHeader";
import Link from "next/link";
import Preview from "./Preview";
import dynamic from "next/dynamic";
const OCr = dynamic(() => import("../ocr/page"));
const Menumodal = dynamic(() => import("./Menumodal"));
const Header = ({
  selectedIdText,
  text,
  setText,
  colorPickeropen,
  setColorPickerOpen,
  selectShapeText,
  selectedId,
  selectShape,
  setImages,
  images,
  setPreviewOpen,
  previewOpen,
  design,
  handleSaveDesign,
  saveRef,
  loading,
  designName,
}) => {
  const [open, setOpen] = useState(false);
  const [ocrPreview, setOcrPreview] = useState(false);
  return (
    <Fragment>
      <Box>
        <Grid
          container
          columns={{ xs: 4, md: 12, sm: 12 }}
          className="py-2 px-3 position-fixed bg-white top-0 z-3 border-bottom"
        >
          <Grid item xs={3.5} className="my-auto" md={5} sm={6.5}>
            <Image
              src={"/img/menuicon.png"}
              height={15}
              width={15}
              alt="menu icon"
              className="me-5 hide-dekstop"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            />
            <Link href="/admin">
              <Image
                src={"/img/logos/packVack-logo.jpeg"}
                width={150}
                height={35}
                alt="logo"
              />
            </Link>
            <Button className="text-dark bg-body-tertiary-hover text-normal ms-3 rounded-pill responsive-mobile-hide">
              {" "}
              {designName ?? "MY project"}
            </Button>
            <Select
              className="rounded-pill border-0 mobile-display-none"
              input={<BootstrapInput />}
              label="kraf"
              defaultValue={10}
            >
              <MenuItem value={10}>
                <span>
                  <svg
                    style={{ height: "15px" }}
                    viewBox="0 0 16 11"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.25 3.682h.293a1 1 0 01.934 1.36l-1.855 4.817a1 1 0 01-.934.641H2.457a1 1 0 01-.934-1.36l1.855-4.817a1 1 0 01.934-.641h8.938zm0 0V2.409a1 1 0 00-1-1H5.8a1 1 0 01-.72-.306L4.795.807A1 1 0 004.075.5H2.437a1 1 0 00-1 1v8.09"
                      stroke="currentColor"
                    />
                  </svg>{" "}
                  Projects
                </span>
              </MenuItem>
              <MenuItem value={20}>
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M4.0671 12.498L3.90335 9.91183L12.4138 1.40143L14.9999 3.98756L6.48948 12.498L4.0671 12.498Z"
                      stroke="currentColor"
                    />
                    <line
                      x1="9.75346"
                      y1="3.84664"
                      x2="12.4809"
                      y2="6.57413"
                      stroke="currentColor"
                    />
                    <line
                      x1="1.5"
                      y1="16.3203"
                      x2="14.5"
                      y2="16.3203"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(0 0.820312)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                &nbsp;Rename
              </MenuItem>
              <MenuItem value={30}>
                <span>
                  <svg
                    style={{ height: "20px" }}
                    viewBox="0 0 16 17"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.24731 14.8203H14.2473"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.30688 10.5361L8.30819 2.73122"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.58057 8.50586L8.30713 11.4882L11.0337 8.50586"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  Download Proof
                </span>
              </MenuItem>
            </Select>
          </Grid>
          <Grid
            item
            xs={6}
            className="my-auto responsive-mobile-hide"
            md={3}
            sm={2}
          >
            <Box>
              <Typography
                className="border-start ps-3 "
                style={{ fontSize: "0.685rem" }}
              >
                <span
                  className={
                    loading
                      ? "d-inline-block bg-danger rounded-circle"
                      : "d-inline-block bg-success rounded-circle"
                  }
                  style={{ height: "8px", width: "8px" }}
                ></span>{" "}
                {loading ? "Changes are not save" : "All Changes Saved"}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-end align-items-center"
            md={4}
            sm={3.5}
          >
            <button
              className="text-dark btn btn-light rounded-pill mobile-display-none"
              onClick={() => setPreviewOpen(true)}
            >
              <svg
                style={{ height: "15px" }}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 12.2853C5.79658 12.2853 3.29506 10.149 1.96009 8.82941C1.39282 8.26869 1.41226 7.37521 2.00486 6.84132C3.3504 5.62906 5.82097 3.71387 8 3.71387C10.179 3.71387 12.6496 5.62906 13.9951 6.84132C14.5877 7.37522 14.6072 8.26869 14.0399 8.82941C12.7049 10.149 10.2034 12.2853 8 12.2853Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3002 7.99972C10.3002 9.31111 9.26098 10.3569 8.0002 10.3569C6.73942 10.3569 5.7002 9.31111 5.7002 7.99972C5.7002 6.68834 6.73942 5.64258 8.0002 5.64258C9.26098 5.64258 10.3002 6.68834 10.3002 7.99972Z"
                  stroke="currentColor"
                />
              </svg>
              &nbsp;Preview
            </button>
            <button
              className="text-dark btn btn-light rounded-pill  mx-2 h-36px"
              onClick={() => setOcrPreview(true)}
              style={{ width: "100px", maxWidth: "100px" }}
            >
              Ocr
            </button>
            <button
              className="text-white btn btn-dark rounded-pill mx-2 h-36px"
              onClick={() => setPreviewOpen(true)}
              style={{ width: "100px", maxWidth: "100px" }}
            >
              Next
            </button>
          </Grid>
        </Grid>
        <BottomHeader
          selectedIdText={selectedIdText}
          setText={setText}
          text={text}
          setColorPickerOpen={setColorPickerOpen}
          colorPickeropen={colorPickeropen}
          selectShapeText={selectShapeText}
          selectedId={selectedId}
          selectShape={selectShape}
          setImages={setImages}
          images={images}
        />
      </Box>
      <Preview
        setPreviewOpen={setPreviewOpen}
        previewOpen={previewOpen}
        design={design}
        handleSaveDesign={handleSaveDesign}
      />
      <Menumodal
        open={open}
        setOpen={setOpen}
        setPreviewOpen={setPreviewOpen}
        design={design}
        handleSaveDesign={handleSaveDesign}
        saveRef={saveRef}
      />
      <Modal
        open={ocrPreview}
        onClose={() => setOcrPreview(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-auto"
      >
        <Box sx={style}>
          <OCr />
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Header;
const style = {
  position: "absolute",
  top: "76%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "12px",
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #ced4da",
    fontSize: 16,
    padding: "0.5rem",
    margin: "5px",
    borderRadius: "50rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: "50rem",
      borderColor: "#80bdff",
      background: "#eee",
      boxShadow: "0 0 0 0rem rgba(0,123,255,.25)",
    },
    "&:hover": {
      borderRadius: "50rem",
      background: "#f8f8f8",
    },
  },
}));
