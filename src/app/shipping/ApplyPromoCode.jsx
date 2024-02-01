"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ApplyPromoCode = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <div className="d-flex align-items-center">
        <h5
          className="d-inline-block mb-0"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          Have a code?
        </h5>
        {open ? (
          <Image
            src="/img/upperarrow.svg"
            height={20}
            width={25}
            alt="downarrow"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Image
            src="/img/downarrow.svg"
            height={20}
            width={25}
            alt="downarrow"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && (
        <Box className="d-flex mt-2">
          <input
            className="form-control rounded"
            type="text"
            style={{ height: "40px" }}
          />
          <buton className="btn  rounded-pill border ms-3 px-3">Apply</buton>
        </Box>
      )}
    </Box>
  );
};

export default ApplyPromoCode;
