"use client";
import "./textview.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import React from "react";
import "../../Home/explore.css";
const TextView = () => {
  return (
    <div className="main-conatiner-explore p-5 mx-2 pb-4 mt-5 mr-20">
      <div className="explore-heading w-35" style={{ width: "65%" }}>
        <h1>Promote your business on the go with branded clothing and bags.</h1>
        <p className="fs-5 fw-light mt-4">
          Increase brand recognition with custom clothing and bags. Adding your
          logo to branded apparel like jackets, T-shirts, hoodies, hats and
          totes creates a cohesive and professional look – making it easy to
          spot and remember your brand, team or special occasion.
        </p>
        <p className="fs-5 fw-light">
          Printed clothing is also a great way to stand out at fundraising
          events or social gatherings and makes a good keepsake to bring back
          fond memories – simply add your logo, special message or artwork.
        </p>
        <p className="fs-5 fw-light">
          Explore VistaPrint’s range of custom apparel and bags, including
          designs for specific industries and uses. Whether you’re creating a
          T-shirt for staff uniforms or personalized schoolbags for your kids,
          we’re here to make the process as simple as possible, with expert
          design help ready if you need it.
        </p>
      </div>
      <div className="explore-heading mt-5 pt-5" style={{ width: "35%" }}>
        <h1>Made by you, #MadeWithVista</h1>
        <p className="fs-5 fw-light mt-4">
          We love to see your custom creations. Post a photo on social media and
          add @VistaPrint and #MadeWithVista for a chance to be featured here.
        </p>
        <NewGear />
      </div>
    </div>
  );
};

export default TextView;

const NewGear = () => {
  return (
    <div className="pt-3 mx-4">
      <h1 className="heading-product mb-4">
        Made by you, #PackVack
        <p className="subheading-product">
          We love to see your custom creations. Post a photo on social media and
          add @VistaPrint and #MadeWithVista for a chance to be featured here.
        </p>
      </h1>
      <ScrollingCarousel
        show={4}
        slide={9}
        swiping={true}
        transition={0.5}
        responsive={true}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
          <Item item={item} key={item} />
        ))}
      </ScrollingCarousel>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div
      className="t-all-product-info"
      style={{
        width: "335px",
        maxHeight: "500px",
        paddingBottom: "20px",
        margin: "3px 15px 50px",
      }}
    >
      <div className="t-product-img">
        <a href="#">
          <img
            style={{ height: "350px !important" }}
            src={item % 2 === 0 ? "img/madeByMe1.jpeg" : "img/madeByMe2.jpeg"}
            alt=""
          />
          <img
            style={{ height: "350px !important" }}
            className="second-img"
            src={item % 2 === 0 ? "img/madeByMe1.jpeg" : "img/madeByMe2.jpeg"}
            alt=""
          />
        </a>
      </div>
      <div className="tab-p-info2">
        <a
          style={{ fontSize: "14px", fontWeight: "500" }}
          href="/vistaprint-picks"
          className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-2"
        >
          @username{" "}
        </a>
      </div>
    </div>
  );
};
