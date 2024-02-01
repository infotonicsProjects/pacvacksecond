"use client";
import Link from "next/link";
import React from "react";

const SideSection = ({ categoryData, page }) => {
  return (
    <div className="bg-white side-bar-section mobile-display-none ">
      <div className="container">
        <div className="main-heading">
          <div className="text-dark border-bottom pb-3 pt-3">
            <h1 className="fs-3">{page ? page?.title : "Bags"}</h1>
          </div>
          <div className="content-sidesection border-bottom pb-3">
            <h4 className="mb-3 pt-3">Main Categories</h4>
            <ul
              className="list-decoration-none p-0 d-flex flex-column ul-li-text-dark"
              style={{ gap: "10px" }}
            >
              {categoryData?.map((item) => (
                <li>
                  <Link href={`/picks/${item.id}`} scroll={false}>
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="main-heading">
          <div className="content-sidesection border-bottom pb-3">
            <h4 className="mb-3 pt-3">Main Categories</h4>
            <ul
              className="list-decoration-none p-0 d-flex flex-column ul-li-text-dark"
              style={{ gap: "10px" }}
            >
            {categoryData?.map((item) => (
              <li>
                <Link href={`/picks/${item.id}`}>{item?.title}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div> */}
        {/* <div className="main-heading">
          <div className="content-sidesection border-bottom pb-3">
            <h4 className="mb-3 pt-3">Main Categories</h4>
            <ul
              className="list-decoration-none p-0 d-flex flex-column ul-li-text-dark"
              style={{ gap: "10px" }}
            >
            {categoryData?.map((item) => (
              <li>
                <Link href={`/bags?catid=${item.id}`} scroll={false}>{item?.title}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideSection;
