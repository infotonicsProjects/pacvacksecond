import React, { Fragment, useEffect, useState } from "react";
import { PostData } from "../utlis/ClientApi";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import HeaderMobileMenuModal from "./HeaderMobileMenuModal";
const HeaderSearch = ({ setSearchOpen, serachOpen }) => {
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState("");
  const [result, setResult] = useState("");
  const controller = new AbortController();
  const signal = controller.signal;
  const handleChangeSearch = (e) => {
    setKeys(e.target.value);
    if (e.target.value.length >= 3) {
      const data = {
        key: e.target.value,
      };
      setTimeout(async () => {
        const response = await PostData(
          "product/search",
          setLoading,
          signal,
          data,
        );
        setResult(response);
      }, 500);
    } else {
      setResult("");
    }
  };
  useEffect(() => {
    return () => controller.abort();
  }, [keys]);
  return (
    <Fragment>
      <div
        className="col-sm-12 col-md-6 col-lg-6 align-items-center dekstop-d-none"
        style={{ width: "65px", padding: "0px" }}
      >
        <HeaderMobileMenuModal />
        <IoSearchSharp
          onClick={() => setSearchOpen(true)}
          style={{ width: "25px", height: "20px", fontWeight: "bolder" }}
        />
      </div>
      <div
        className={
          serachOpen
            ? "col-sm-12 col-md-6 col-lg-6 w-57 responsive-mobile-search d-flex"
            : "col-sm-12 col-md-6 col-lg-6 w-57 responsive-mobile-search"
        }
      >
        <svg
          onClick={() => setSearchOpen(false)}
          width={17}
          height={16}
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line
            x1="14.25"
            y1="7.94995"
            x2="3.75"
            y2="7.94995"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 4L3 8C3 8 5.47619 10.4762 7 12"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="h2-cat-search w-100">
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
                  style={{
                    top: "100%",
                    width: "inherit",
                    height: "400px",
                    left: "-3px",
                    background: 'white'
                  }}
                >
                  {result &&
                    result?.map((item) => (
                      <Link
                        href={{
                          pathname: "/des",
                          query: { bag: item?.id },
                        }}
                        onClick={() => setResult("")}
                      >
                        <div
                          className="d-flex border rounded p-2 m-2 hover-grey-bg-f8f8f8"
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
    </Fragment>
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
      <img src={image} alt="" height={50} width={100} />
      <div className="d-flex align-items-center ">
        <p>Title : {item?.names}</p>

      </div>
    </>
  );
};
