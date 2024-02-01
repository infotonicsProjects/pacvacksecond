"use client";
import Link from "next/link";
import React from "react";

const Tabs = ({ data, searchParams, params }) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <ul className="nav nav-tabs tab-card" role="tablist">
            <li className="nav-item" role="presentation">
              <Link
                href={`/admin/main/product/${params?.productid}`}
                className={
                  searchParams?.tab === undefined
                    ? " nav-link active"
                    : " nav-link"
                }
                id="Description-tab"
                type="Link"
                name="tab1"
                scroll={false}
              >
                Description
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href={`/admin/main/product/${params?.productid}?tab=` + 2}
                className={
                  searchParams?.tab === "2" ? " nav-link active" : " nav-link"
                }
                id="Review-tab"
                name="tab2"
                scroll={false}
              >
                OverReview List
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href={`/admin/main/product/${params?.productid}?tab=` + 3}
                className={
                  searchParams?.tab === "3" ? " nav-link active" : " nav-link"
                }
                id="About-tab"
                name="tab3"
                scroll={false}
              >
                Faq
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-4" id="myTabContent">
            <div
              className={
                searchParams?.tab === undefined
                  ? "tab-pane fade show active"
                  : " tab-pane fade "
              }
              id="Description"
              role="tabpanel"
              aria-labelledby="Description-tab"
            >
              <p className="fw-bold">{data?.data?.overview_title}</p>
              <p>{data?.data?.desc}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data ? data?.data?.overview_description : "",
                }}
              ></div>
            </div>
            <div
              className={
                searchParams?.tab === "2"
                  ? "tab-pane fade show active"
                  : " tab-pane fade "
              }
              id="Review"
              role="tabpanel"
              aria-labelledby="Review-tab"
            >
              <ul
                className=""
                style={{ listStyle: "disc" }}
                dangerouslySetInnerHTML={{
                  __html: data?.data ? data?.data?.overview_list : "",
                }}
              ></ul>
            </div>
            <div
              className={
                searchParams?.tab === "3"
                  ? "tab-pane fade show active"
                  : " tab-pane fade "
              }
              id="About"
              role="tabpanel"
              aria-labelledby="About-tab"
            >
              <h5>{data?.data?.overview_title}</h5>
              <p>{data?.data?.faq}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
