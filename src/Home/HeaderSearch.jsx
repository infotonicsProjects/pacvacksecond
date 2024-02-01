import React, { Fragment, useEffect, useState } from "react";
import { PostData } from "../utlis/ClientApi";
import Image from "next/image";
import Link from "next/link";

const HeaderSearch = () => {
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState("");
  const [result, setResult] = useState("");
  const controller = new AbortController();
  const signal = controller.signal;
  const handleChangeSearch = async (e) => {
    setKeys(e.target.value);
    if (e.target.value.length >= 3) {
      const data = {
        key: e.target.value,
      };
      // setTimeout(async () => {
      const response = await PostData(
        "product/search",
        setLoading,
        signal,
        data,
      );
      setResult(response);
      // }, 200);
    } else {
      setResult("");
    }
  };
  useEffect(() => {
    return () => controller.abort();
  }, [keys]);
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 w-57 responsive-display-none">
      <div className="h2-cat-search">
        <div className="em-category-search">
          <form action="#">
            <div className="form-search cate_search">
              <div className="text-search">
                <button
                  className="button serach-btn"
                  title="Search"
                  type="button"
                >
                  <span>
                    <span>Search</span>
                  </span>
                </button>
                <input
                  type="search"
                  placeholder="Search entire store here..."
                  className="input-text required-entry"
                  defaultValue=""
                  onKeyUp={handleChangeSearch}
                />
              </div>
              <div
                className={
                  result
                    ? "d-block position-absolute rounded p-3 overflow-auto "
                    : "d-none"
                }
                style={{ top: "101%", width: "100%", height: "500px", background: 'white' }}
              >
                {result &&
                  result?.map((item) => (
                    <Link
                      href={{
                        pathname: "/des",
                        query: { bag: item?.id },
                      }}
                      onClick={() => setResult("")}
                      className="hover-grey-bg-f8f8f8"
                    >
                      <div
                        className="d-flex  rounded p-2 m-2 hover-grey-bg-f8f8f8"
                        style={{ borderColor: "#eeeee" }}
                      >
                        <ImageComponent item={item} />
                        <div></div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;

const ImageComponent = ({ item }) => {
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
    })
  }
  if (item.price && item?.price[0] === "[") {
    const imagesData = JSON.parse(item?.price);
    var price = imagesData[0];
  } else if (item.images) {
    var price = item?.price;
  } else if (item.atributes) {
    var price;
    const attribute = JSON.parse(item.atributes);
    Object.entries(attribute).forEach(([key, value]) => {
      price = Object.values(value?.dimensions)[0].price;

    });
  }
  return (
    <>
      <img src={image} alt="" height={25} width={50} />
      <div className="d-flex align-items-center">
        <p className="text-dark"> {item?.names}</p>
        {/* <span> Price : Rs. {price}</span>
        <p> Category: {item?.category}</p> */}
      </div>
    </>
  );
};
