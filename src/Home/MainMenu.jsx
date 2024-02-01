import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import "./mainmenu.css";
import { GetData } from "../utlis/ClientApi";
import { Box, Skeleton } from "@mui/material";
const Skleton = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box
      display="flex"
      gap="10px"
      padding={"15px"}
      className="d-sm-none mobile-display-none"
    >
      {arr?.map((item) => (
        <Skeleton
          variant="rounded"
          width={120}
          height={30}
          animation="wave"
          key={item}
        />
      ))}
    </Box>
  );
};
const MainMenu = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(true);
  const [categoryDataB, setData] = useState([]);
  useEffect(() => {
    const GetDataB = async () => {
      const categoryData = await GetData("category", setLoading, signal);
      setData(categoryData);
    };
    GetDataB();
    return () => controller.abort();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Skleton />
      ) : (
        <div id="sticker" className="h2_main-menu_area ">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 border-bottom">
                <div className="small-logo">
                  <Link href="#">
                    <img src="/img/logos/logo_small.png" alt="" />
                  </Link>
                </div>
                <div className="menu-area">
                  <nav className="main-menu">
                    <ul className="d-flex justify-content-between text-wrap ">
                      <li>
                        <Link href="/">home</Link>
                        <ul className="img-mega-menu">
                          <li>
                            <Link href="/bags?catid=7">
                              <img src="/img/bag-7.jpeg" alt="" />
                            </Link>
                            <Link href="/bags?catid=7" className="mega-title">
                              Jewelery bag
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=8">
                              {" "}
                              <img src="/img/bag-2.jpg" alt="" />{" "}
                            </Link>
                            <Link href="/bags?catid=8" className="mega-title">
                              {" "}
                              Accessory bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=6">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.19.11 PM.jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link href="/bags?catid=6" className="mega-title">
                              {" "}
                              Shoe Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/
                        bags?catid=5"
                            >
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.19.12 PM (1).jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link
                              href="/
                        bags?catid=5"
                              className="mega-title"
                            >
                              {" "}
                              Jacket Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=9">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.19.13 PM (1).jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link href="/bags?catid=9" className="mega-title">
                              {" "}
                              Lengha Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=1">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.19.14 PM.jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link href="/bags?catid=1" className="mega-title">
                              {" "}
                              Mobile Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="bags?catid=8">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.19.15 PM.jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link href="bags?catid=8" className="mega-title">
                              {" "}
                              Accessory Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=7">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.20.24 PM.jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link href="/bags?catid=7" className="mega-title">
                              {" "}
                              Jewellery Bag{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/bags?catid=8">
                              {" "}
                              <img
                                src="/img/bags/WhatsApp Image 2023-09-11 at 7.21.43 PM.jpeg"
                                alt=""
                              />{" "}
                            </Link>
                            <Link
                              href="/bags?catid=8"
                              className="mega-title"
                              scroll={false}
                            >
                              {" "}
                              Accessory Store{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/bags">Category</Link>
                        <div className="mega-menu bg-white">
                          <span>
                            <Link
                              className="mega_title"
                              href="bags"
                              scroll={false}
                            >
                              Printed
                            </Link>
                            {categoryDataB?.map((item) => (
                              <Link
                                href={`/bags?catid=${item.id}`}
                                scroll={false}
                              >
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                          <span>
                            <Link
                              className="mega_title"
                              href="/bags"
                              scroll={false}
                            >
                              {" "}
                              Plain{" "}
                            </Link>
                            {categoryDataB?.map((item) => (
                              <Link
                                href={`/picks/${item.id}`}
                                scroll={false}
                              >
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      {categoryDataB?.map((item) => (
                        <li>
                          <Link href={`/picks/${item.id}`} scroll={false}>
                            {item?.title}
                          </Link>
                        </li>
                      ))}
                      {/* <li>
                        <Link href="/bags?catid=1">Mobile Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=2">Sweet Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=3">Single Suit Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=4">Multi Pc Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=5">Jacket Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                              {item?.title}
                            </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=6">Shoe Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=7">Jewellery Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/picks/${item.id}`}>
                              {item?.title}
                            </Link>
                            ))}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/bags?catid=8">Accessory Bags</Link>
                        <div className="mega-menu only-dropdown">
                          <span>
                            {categoryDataB?.map((item) => (
                              <Link href={`/bags?catid=${item.id}`}>
                                {item?.title}
                              </Link>
                            ))}
                          </span>
                        </div>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MainMenu;
