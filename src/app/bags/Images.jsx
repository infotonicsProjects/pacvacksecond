import React, { Fragment } from "react";
import "../../Home/explore.css";
import { urlImage } from "../../Environment";
import Image from "next/image";
import Link from "next/link";
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
      width={400}
      height={520}
      style={{ width: "350px", height: "350px" }}
    />
  );
};
const PersonaliseImage = ({ data }) => {
  return (
    <Fragment>
      {data?.length === 0 ? (
        <div className="text-center fs-1 bg-body-secondary rounded h-50 p-5 m-5 w-100 h-100 my-auto">
          <p> No Data Found</p>
        </div>
      ) : (
        <div className="main-conatiner-explore mx-2 pb-4 mt-5">
          <div className="explore-heading">
            <h1>Can&apos;t-miss collections</h1>
            <p className="fs-5">
              Check out some of the products we can&apos;t stop talking about.
            </p>
          </div>
          <div className="content-explore">
            <ul className="img-list d-flex-gap-10 m-0 p-0 justify-content-start flex-unset">
              {data?.map((item) => (
                <li className="flex-1-0-30p">
                  <Link
                    className="img-collection"
                    href={`des/?bag=${item?.id}`}
                  >
                    <ImageCompoenent item={item} />
                  </Link>
                  <p>{item?.alt_text ? item?.alt_text : item?.names}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PersonaliseImage;
