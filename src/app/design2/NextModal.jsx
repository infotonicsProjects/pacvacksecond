import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
import { PostData } from "../../utlis/ClientApi";
import { useRouter } from "next/navigation";

const NextModal = ({ previewOpen, setPreviewOpen, design }) => {
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const router = useRouter();
  const contoller = new AbortController();
  const signal = contoller.signal;
  const product = sessionStorage.getItem("productId");
  const handleUpdateCart = async (e) => {
    const data = {
      product_id: product,
      qty: 500,
    };
    e.preventDefault();
    const response = await PostData(
      "shopping_cart_table",
      setLoading,
      signal,
      data,
    );
    if (response.id) {
      router.push(`/continue-cart/${product}`);
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
          >
            X
          </Button>
        </Grid>
        <Box
          sx={{ p: "12px 0px", overflow: "auto", m: "20px 5px", gap: "20rem" }}
          className="justify-content-center  d-flex mt-2"
        >
          <Image
            src={design}
            width={400}
            height={1000}
            alt="preview bag image"
            ref={imageRef}
          />
          <Box>
            <Box className="d-flex">
              <Typography as="h1" className="fs-1 fw-bold">
                Design Review
              </Typography>
            </Box>
            <Box className="pb-3">
              <Typography className="mt-3 fw-bold fs-5">
                All set? Let's double check:
              </Typography>
              <Typography
                as="ul"
                className="mt-3 d-flex flex-column p-0"
                sx={{ gap: "10px", fontSize: "18px" }}
              >
                <li>
                  <Image
                    src={"/img/right.svg"}
                    alt="right"
                    width={20}
                    height={20}
                    className=""
                  />
                  Text: Is it clear and legible?
                </li>
                <li>
                  <Image
                    src={"/img/right.svg"}
                    alt="right"
                    width={20}
                    height={20}
                    className=""
                  />
                  Margin: Is everything within the space?
                </li>
                <li>
                  <Image
                    src={"/img/right.svg"}
                    alt="right"
                    width={20}
                    height={20}
                    className=""
                  />
                  Info: Everything accurate? Spelled correctly?
                </li>
                <li>
                  <Image
                    src={"/img/right.svg"}
                    alt="right"
                    width={20}
                    height={20}
                    className=""
                  />
                  Images: Is everything clear {"(no blur)"}?
                </li>
              </Typography>
              <Button
                className="text-dark border rounded-pill mt-3"
                sx={{ paddingLeft: "12rem", paddingRight: "12rem" }}
                onClick={() => setPreviewOpen(false)}
              >
                Edit my design
              </Button>
            </Box>
            <Box className="mt-2 border-top pt-3">
              <form onSubmit={handleUpdateCart} autoComplete="off">
                <FormControl>
                  <Box>
                    <Checkbox
                      {...label}
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                      className="d-inline"
                      required
                    />
                    <label className="d-inline-block">
                      I've reviewed and approve my design.
                    </label>
                  </Box>
                  {loading ? (
                    <Button
                      className="btn btn-lg  rounded-pill mt-3 btn-dark d-block bg-black text-white "
                      type={"button"}
                      sx={{
                        paddingLeft: "12rem",
                        paddingRight: "12rem",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        width: "100%",
                      }}
                      disabled
                    >
                      Continue...
                    </Button>
                  ) : (
                    <Button
                      className="btn btn-lg  rounded-pill mt-3 btn-dark d-block bg-black text-white "
                      type={"submit"}
                      sx={{
                        paddingLeft: "12rem",
                        paddingRight: "12rem",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        width: "100%",
                      }}
                    >
                      Continue
                    </Button>
                  )}
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NextModal;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
