import { Typography } from "@mui/material";
import React from "react";
import Faqdata from "./faqdata";
export default function faq({ data }) {
  return (
    <div>
      <Typography style={{ fontWeight: "600" }} variant="h3">
        Frequently asked questions
      </Typography>
      <Faqdata data={data} />
    </div>
  );
}
