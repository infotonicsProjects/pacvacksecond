"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./Item";
const rigthArr = () => {
  return (
    <button
      className="slick-arrow slick-prev"
      aria-labelledby="auto-id-dunm5in4e-10"
      style={{ display: "block" }}
    >
      <span className="swan-visually-hidden" id="auto-id-dunm5in4e-10">
        Go to previous slide
      </span>
      <img
        alt=""
        src="https://www.Pacvackprint.com/swan/v2/icons/chevron_left.d88a892c3520b91832a66d3eccedc248.svg"
        className="swan-icon swan-icon-size-16p swan-icon-skin-standard swan-icon-type-chevronLeft"
      />
    </button>
  );
};
const Branded = ({ data }) => {
  const filterData = data?.filter((a) => a.branded === 1);
  return (
    <div className=" mx-4 pb-2">
      <h1 className="heading-product mb-4">
        Feature Products items for uniforms, giveaways and more
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

      <br />
      <ScrollingCarousel
        show={6}
        slide={10}
        swiping={true}
        transition={0.5}
        rightArrow={rigthArr}
        leftArrow={rigthArr}
        responsive={true}
        useArrowKeys={true}
      >
        {filterData?.map((item) => (
          <Item item={item} key={item} />
        ))}
      </ScrollingCarousel>
    </div>
  );
};

export default Branded;
