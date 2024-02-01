import React from "react";
import "../../../Home/twoimage.css";
import { Rating, Typography } from "@mui/material";
const TwoImage = ({ page }) => {

  return (
    <div className="d-flex p-4 ps-0 border-bottom " >

      <div className="ps-4" >
        <h1 className="text-dark fs-5 text-capitalize " style={style.heading}>
          {page}
        </h1>
        <div className="d-flex" style={{ gap: "10px" }}>
          <Rating
            name="simple-controlled"
            value={4}
          />
          <Typography component={"span"}>4</Typography>
          <Typography component={"span"} sx={{ textDecoration: "underline" }}>1139 Reviews</Typography>
        </div>
      </div>
    </div>
  );
};

export default TwoImage;

const style = {
  heading: {
    fontSize: "2rem !important",
  },
};
