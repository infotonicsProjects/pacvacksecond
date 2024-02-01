import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddressForm from "../../shipping/AddressForm";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Modals = ({ layout, setLayout }) => {
  return (
    <div>
      {/* <Button onClick={()=>setLayout(false)}>Open modal</Button> */}
      <Modal
        open={layout}
        onClose={() => setLayout(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div>
            <AddressForm setLayout={setLayout} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "38%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  width: "1002px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  height: "80vh",
};

export default Modals;
