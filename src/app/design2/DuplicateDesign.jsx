import React from "react";
import { Box, Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
const DuplicateDesign = ({ duplicateOpen, setDuplicateOpen }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={duplicateOpen}
      onClose={() => setDuplicateOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        height: "0%",
        bottom: "50%",
        top: "unset",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          height: "100vh",
          p: 3,
          boxShadow: "none",
        }}
      >
        <ModalClose
          variant="plain"
          sx={{ m: 1 }}
          onClick={() => setDuplicateOpen(false)}
        />
        <Box>
          <Box className="mb-3">
            <Typography
              as="h4"
              component={"h1"}
              className="text-dark fw-bold text-center"
            >
              Name Your Project
            </Typography>
            <Typography as="h4" component={"p"} className="mt-2">
              Name your design nd we'll save it in My Projects.
            </Typography>
            <input className="form-control mt-3" placeholder="Design Name" />
          </Box>
          <ul
            className="d-flex flex-column text-dark p-0 fw-bold"
            style={{ gap: "15px" }}
          ></ul>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default DuplicateDesign;
