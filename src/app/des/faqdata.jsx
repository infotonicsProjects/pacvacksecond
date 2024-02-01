import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function faqdata({ data }) {
  try {
    var dataFaq = JSON.parse(data?.faq);
  } catch (err) {
    console.log(err.message);
  }

  return (
    <div className="pt-4">
      {dataFaq?.map((item, i) => (
        <Accordion style={{ padding: "14px" }} key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.ques}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.ans}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
