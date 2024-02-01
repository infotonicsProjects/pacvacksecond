import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "12px",
};
const Preview = ({ setPreviewOpen, previewOpen, design }) => {
  const imageRef = useRef();
  const handleDownload = (e) => {
    const nameOfDownload = "Image.png";
    const anchorElement = document.createElement("a");
    anchorElement.href = e;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
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
          {[design]?.map((item) => (
            <Button
              id={item}
              className="btn btn-light rounded-pill fs-6 text-center btn-lg border px-5"
              onClick={() => handleDownload(item)}
            >
              Download PNG
            </Button>
          ))}
          <Button
            sx={{
              color: "black",
              position: "relative",
              right: "-42%",
              top: "-27px",
            }}
            onClick={() => setPreviewOpen(false)}
          >
            X
          </Button>
        </Grid>
        <Box
          sx={{ p: "12px 0px", overflow: "auto", m: "20px 5px" }}
          className="justify-content-center align-items-center d-flex mt-2"
        >
          <Image
            src={design}
            width={400}
            height={1000}
            alt="preview bag image"
            ref={imageRef}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default Preview;
