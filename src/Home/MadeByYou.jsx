"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./Item";

const NewGear = ({ data }) => {
  const filterData = data?.filter((a) => a.new_design === 1);
  return (
    <div className="pt-3 mx-4">
      <h1 className="heading-product mb-4">
        Made by you, #PackVack
        <p className="subheading-product">
          We love to see your custom creations. Post a photo on social media and
          add @PacvackPrint and #MadeWithPacvack for a chance to be featured
          here.
        </p>
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
