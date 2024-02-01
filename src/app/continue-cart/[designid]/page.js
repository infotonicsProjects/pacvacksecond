import Image from "next/image";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const SimilarCart = dynamic(() => import("./SimilarCart"));
import Link from "next/link";
import { getUserData } from "../../../utlis/Home";
import { urlImage } from "../../../Environment";
const page = async ({ params }) => {
  const data = await getUserData(`products_table/${params?.designid}`);
  return (
    <Fragment>
      <SimilarCart />
      <div className="bottom-section-122 border-top position-sticky  px-5 py-3 d-flex bottom-0 ustify-content-around bg-white">
        <div className="" style={{ width: "10%" }}>
          <ImageCompoenent item={data?.data} />
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ flex: "1 0 59%" }}
        >
          <div className="my-auto">
            <h3> {data?.data?.names ?? "Design Name"}</h3>
            <p>
              <Image
                src={"/img/right.svg"}
                alt="right"
                width={20}
                height={20}
              />
              Added to cart
            </p>
          </div>
          <div className="my-auto">
            <Link href="/cart">
              <button className="btn btn-lg btn-dark rounded-pill">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
const ImageCompoenent = ({ item }) => {
  if (item.images && item?.images[0] === "[") {
    const imagesData = JSON.parse(item?.images);
    var image = imagesData[0];
  } else if (item.images) {
    var image =
      item?.images.slice(0, 4) === "http"
        ? item.images
        : urlImage + "/" + item?.images?.slice(7);
  } else if (item.atributes) {
    var image;
    const attribute = JSON.parse(item.atributes);
    Object.entries(attribute).forEach(([key, value]) => {
      image = value.image[0];
    });
  }
  return (
    <img
      src={image}
      alt={item?.alt_text ?? "bag"}
      width={350}
      height={100}
      style={{ width: "100px", height: "100px" }}
    />
  );
};
