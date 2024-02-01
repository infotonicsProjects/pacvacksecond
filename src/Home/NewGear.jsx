"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./Item";

const NewGear = ({ data }) => {
  const filterData = data?.filter((a) => a.user_design === 1);
  return (
    <div className=" mx-4">
      <h1 className="heading-product mb-4">
        If you celebrate it, we print it ,Design by User
        <a
          style={{ fontSize: "14px", paddingLeft: "25px", fontWeight: "500" }}
          href="#"
          className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-2"
        >
          See all
          {"\u00A0"}
          {"\u00A0"}
          <span>&#10132;</span>
        </a>
      </h1>
      <ScrollingCarousel
        show={4}
        slide={7}
        swiping={true}
        transition={0.5}
        responsive={true}
      >
        {data?.map((item) => (
          <Item item={item} key={item} />
        ))}
      </ScrollingCarousel>
    </div>
  );
};

export default NewGear;
