import { Box, Modal } from "@mui/material";
import React from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
const MoveModal = ({ open, setOpen, handleMove }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        height: "0%",
        bottom: "14%",
        top: "unset",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",

          p: 3,
        }}
      >
        <ModalClose
          variant="plain"
          sx={{ m: 1 }}
          onClick={() => setOpen(false)}
        />
        <Box>
          <Box className="mb-3">
            <Typography as="h4" component={"h1"} className="text-dark fw-bold">
              Move
            </Typography>
          </Box>
          <Box className="d-flex align-items-center justify-content-center ">
            <ul
              className="d-flex flex-row text-dark p-0 fw-bold list-style-none"
              style={{ gap: "50px", listStyle: "none" }}
            >
              <li>
                <button
                  className="btn btn-md rounded-circle border"
                  name="left"
                  onClick={handleMove}
                  onPress={handleMove}
                >
                  {"<"}
                </button>
              </li>
              <li>
                <button
                  className="btn btn-md rounded-circle border"
                  name="right"
                  onClick={handleMove}
                  onPress={handleMove}
                >
                  {">"}
                </button>
              </li>
            </ul>
            <ul
              className="d-flex flex-column text-dark p-0 fw-bold position-relative"
              style={{ gap: "35px", right: "4.7rem", listStyle: "none" }}
            >
              <li>
                <button
                  className="btn btn-md rounded-circle border"
                  style={{ transform: "rotate(90deg)" }}
                  name="up"
                  onClick={handleMove}
                  onPress={handleMove}
                >
                  {"<"}
                </button>
              </li>
              <li>
                <button
                  className="btn btn-md rounded-circle border"
                  style={{ transform: "rotate(90deg)" }}
                  name="down"
                  onClick={handleMove}
                  onPress={handleMove}
                >
                  {">"}
                </button>
              </li>
            </ul>
          </Box>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default MoveModal;
