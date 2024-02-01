"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./Item";

const NewGear = ({ data }) => {
  return (
    <div className="pt-5 mx-5">
      <h1 className="heading-product mb-4">Top-rated signs & banners</h1>
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
