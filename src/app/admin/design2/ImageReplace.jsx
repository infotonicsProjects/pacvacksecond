import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
// import { PostData } from "../../../utlis/ClientApi";

const ImageReplace = ({ openReplacer, setOpenReplace, handleReplace }) => {
  const [image, setImage] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 5,
    pl: 8,
    pt: 8,
    height: 700,
  };
  const handleUpload = async (e) => {
    handleReplace(urlImage + uploadImage?.imagepath?.pop());
    // handleReplace(URL.createObjectURL(e.target.files[0]));
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Modal
      open={openReplacer}
      onClose={() => setOpenReplace(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="rounded border-none mobile-width-modal">
        <Typography
          component={"h1"}
          className="fs-5 fw-meduim float-end position-relative"
          sx={{ bottom: "50px", left: "10px", cursor: "pointer" }}
          onClick={() => setOpenReplace(false)}
        >
          x
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="fs-2 fw-bold"
        >
          Replace Image
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ fontSize: "0.9rem" }}
          className="fw-medium"
        >
          Please make sure that your image resolution is at least 300 dots per
          inch and uses an accepted format:
        </Typography>
        <Typography sx={{ fontSize: "0.789rem", color: "grey" }}>
          .jpg, .jpeg, .jfif, .bmp, .png, .gif, .heic, .pdf, .psd, .ai, .eps,
          .ait, .ppt, .pptx, .tif, .tiff
        </Typography>
        <input
          type="file"
          className="d-none"
          id="input"
          onChange={handleUpload}
        />
        <label
          htmlFor="input"
          className="btn btn-dark btn-lg rounded-pill mt-5 fs-6 py-3"
          style={{ width: "98%" }}
        >
          Upload logo or image
        </label>
        {image ? (
          <Box className="border-top mt-3">
            <Typography
              sx={{ fontSize: "0.9rem", color: "#5c5c5c" }}
              className="mt-4"
            >
              {" "}
              Recent upload
            </Typography>
            <img
              src={image}
              style={{ width: "120px", height: "120px" }}
              className="rounded  mt-2 border"
            />
          </Box>
        ) : (
          <Typography className="mt-3 fs-5">No Images Found</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ImageReplace;
