import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PutData } from "../../../utlis/ClientApi";
import { useParams } from "next/navigation";
import { ToastColor } from "../../../utlis/Toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1550,
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "12px",
};
const Preview = ({ setPreviewOpen, previewOpen, design }) => {
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const imageRef = useRef();
  const controller = new AbortController()
  const signal = controller.signal
  const handleDownload = (e) => {
    const nameOfDownload = "Image.png";
    const anchorElement = document.createElement("a");
    anchorElement.href = e;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };
  const products = useSelector((state) => state.products)
  const handleAddProduct = async (e) => {
    const saveItem = {};
    const designId = JSON.parse(localStorage.getItem('designId'))
    const designIdsForsend = []
    const designIdold = Object.entries(products)[0][1].designid
    designIdsForsend.push(designIdold)
    Object.entries(products).forEach(([key, value]) => {

      saveItem[value.color] = {
        color: value.color,
        image: value?.image,
        designid: [...value?.designid, designId.id],
        dimensions: value?.dimensions,
      };
    });
    const data = {
      atributes: saveItem
    }
    const resposne = await PutData(`products_table/${params.productid}`, setLoading, signal, data)
    if (resposne) {
      ToastColor("Saved Successfuly")
      router.push('')
    }

  }
  return (
    <Modal
      open={previewOpen}
      onClose={() => setPreviewOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid
          className="justify-content-center align-items-center d-flex mt-2 flex-column"
          gap="10px"
        >
          {[design]?.map((item) => (
            <Fragment>
              <Button
                id={item}
                className="btn btn-light rounded-pill fs-6 text-center btn-lg border px-5"
                onClick={() => handleDownload(item)}
              >
                Download PNG
              </Button>
            </Fragment>
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
          className="justify-content-center align-items-center d-flex mt-2 flex-column "
          gap="10px"
        >
          <img
            src={design}
            width={410}
            height={1000}
            alt="preview bag image"
            ref={imageRef}
            className="border rounded p-3"
          />


          {params?.productid && <button className="btn btn-dark rounded-pill  text-center btn-sm border px-5 " onClick={handleAddProduct}>
            Add Design
          </button>}

          <Link href="/admin">
            <button className="btn btn-light rounded-pill  text-center btn-sm border px-5 ">
              Go to home{" "}
            </button>
          </Link>

        </Box>
      </Box>
    </Modal>
  );
};

export default Preview;
