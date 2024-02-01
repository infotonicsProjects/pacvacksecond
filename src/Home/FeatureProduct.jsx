"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./Item";

const FeatureProduct = ({ data }) => {
  const filterData = data?.filter((a) => a.popular === 1);
  return (
    <React.Fragment>
      <div className="pt-5 mx-4 ">
        <h1 className="heading-product mb-4">
          PacvackPrint Picks: Popular products. Unbeatable value.
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
          show={6}
          slide={10}
          swiping={true}
          transition={0.5}
          responsive={true}
        >
          {filterData?.map((item) => (
            <Item item={item} key={item} />
          ))}
        </ScrollingCarousel>
      </div>
    </React.Fragment>
  );
};

export default FeatureProduct;
