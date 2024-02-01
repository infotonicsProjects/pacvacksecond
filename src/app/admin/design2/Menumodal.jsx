import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import dynamic from "next/dynamic";
import Link from "next/link";
const DuplicateDesign = dynamic(() => import("./DuplicateDesign"));
const Menumodal = ({
  open,
  setOpen,
  setPreviewOpen,
  design,
  handleSaveDesign,
  saveRef,
}) => {
  const handleDownload = (e) => {
    const nameOfDownload = "Image.png";
    const anchorElement = document.createElement("a");
    anchorElement.href = e;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };
  const [duplicateOpen, setDuplicateOpen] = useState(false);
  return (
    <>
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
          bottom: "25%",
          top: "unset",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "100%",

            p: 3,
            boxShadow: "none",
          }}
        >
          <ModalClose
            variant="plain"
            sx={{ m: 1 }}
            onClick={() => setOpen(false)}
          />
          <Box>
            <Box className="mb-3">
              <Typography
                as="h4"
                component={"h1"}
                className="text-dark fw-bold"
              >
                My Standard Kraft Paper Bags design
              </Typography>
              <Typography as="h4" component={"p"} className="mt-2">
                Standard Kraft Paper Bags
              </Typography>
            </Box>
            <ul
              className="d-flex flex-column text-dark p-0 fw-bold"
              style={{ gap: "15px" }}
            >
              <li>
                <button
                  className="btn btn-sm btn- save-btn-id"
                  onClick={handleSaveDesign}
                  ref={saveRef}
                >
                  {SVG.save}Save Changes
                </button>
              </li>
              <li>
                <button
                  className="btn btn-sm btn-"
                  onClick={() => setDuplicateOpen(true)}
                >
                  {SVG.duploicate}Duplicate Design
                </button>
              </li>
              <li>
                <Link href="/myaccount/project" className="btn btn-sm btn-">
                  {SVG.project}My Projects
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-sm btn-"
                  onClick={() => setPreviewOpen(true)}
                >
                  {SVG.prview} Preview
                </button>
              </li>
              <li>
                <button
                  className="btn btn-sm btn-"
                  onClick={() => handleDownload(design)}
                >
                  {SVG.download}Download PNG proof
                </button>
              </li>
              <li>
                <button className="btn btn-sm btn-">{SVG.view}View</button>
              </li>
            </ul>
          </Box>
        </Sheet>
      </Modal>
      <DuplicateDesign
        duplicateOpen={duplicateOpen}
        setDuplicateOpen={setDuplicateOpen}
      />
    </>
  );
};

export default Menumodal;
const SVG = {
  save: (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
    >
      <path
        d="M2 3.47891C2 3.14754 2.26863 2.87891 2.6 2.87891H11.3747C11.5205 2.87891 11.6613 2.93202 11.7709 3.02831L13.7962 4.80908C13.9257 4.92299 14 5.08716 14 5.25967V14.2789C14 14.6103 13.7314 14.8789 13.4 14.8789H2.6C2.26863 14.8789 2 14.6103 2 14.2789V3.47891Z"
        fill="none"
      />
      <path
        d="M5.19006 2.87891V5.82326H10.8077V2.87891M13.7962 4.80908L11.7709 3.02831C11.6613 2.93202 11.5205 2.87891 11.3747 2.87891H2.6C2.26863 2.87891 2 3.14754 2 3.47891V14.2789C2 14.6103 2.26863 14.8789 2.6 14.8789H13.4C13.7314 14.8789 14 14.6103 14 14.2789V5.25967C14 5.08716 13.9257 4.92299 13.7962 4.80908Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <ellipse
        cx="8.0024"
        cy="9.90865"
        rx="1.83834"
        ry="1.83834"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  ),
  duploicate: (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
    >
      <rect
        x="3.5"
        y="3.37891"
        width={7}
        height={9}
        rx="0.5"
        fill="none"
        stroke="currentColor"
      />
      <rect
        x="5.5"
        y="5.37891"
        width={7}
        height={9}
        rx="0.5"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  ),
  project: (
    <svg
      viewBox="0 0 16 11"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
    >
      <path
        d="M13.25 3.682h.293a1 1 0 01.934 1.36l-1.855 4.817a1 1 0 01-.934.641H2.457a1 1 0 01-.934-1.36l1.855-4.817a1 1 0 01.934-.641h8.938zm0 0V2.409a1 1 0 00-1-1H5.8a1 1 0 01-.72-.306L4.795.807A1 1 0 004.075.5H2.437a1 1 0 00-1 1v8.09"
        stroke="currentColor"
      />
    </svg>
  ),
  prview: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
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
  ),
  download: (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
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
    </svg>
  ),
  view: (
    <svg
      viewBox="0 0 12 10"
      fill="none"
      aria-hidden="true"
      style={{ width: "15px", marginRight: "2px" }}
    >
      <path
        d="M7.63 2.95c.6 0 1.09-.37 1.28-.88h1.9c.23 0 .45-.21.45-.48a.46.46 0 0 0-.46-.47H8.92c-.2-.52-.7-.9-1.29-.9-.58 0-1.08.38-1.27.9H.47a.47.47 0 0 0 0 .94h5.9c.19.52.68.9 1.26.9Zm0-.7a.66.66 0 0 1-.65-.66c0-.37.3-.66.65-.66.38 0 .67.29.67.66 0 .37-.29.66-.67.66ZM.45 4.53A.47.47 0 0 0 0 5c0 .26.21.47.45.47H2.4a1.36 1.36 0 0 0 2.55 0h5.83a.47.47 0 1 0 0-.94H4.96a1.36 1.36 0 0 0-2.56 0H.45Zm3.23 1.13A.66.66 0 0 1 3.02 5c0-.37.3-.66.66-.66.37 0 .66.29.66.66 0 .37-.29.66-.66.66Zm3.95 4.11c.6 0 1.1-.37 1.29-.89h1.88c.24 0 .46-.2.46-.47a.47.47 0 0 0-.46-.48H8.91a1.36 1.36 0 0 0-2.55 0H.47a.47.47 0 0 0-.47.48c0 .26.21.47.47.47h5.89c.2.52.7.9 1.27.9Zm0-.7a.66.66 0 0 1-.65-.66c0-.38.3-.66.65-.66.38 0 .67.28.67.66 0 .37-.29.66-.67.66Z"
        fill="currentColor"
      />
    </svg>
  ),
};
