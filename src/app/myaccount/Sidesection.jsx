"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { ToastColor } from "../../utlis/Toast";
const SideSection = () => {
  // console.log(shippingId)
  const currentRoute = usePathname();
  const user = useSelector((state) => state.userData);
  useEffect(() => {
    if (user.id === 0) {
      ToastColor("You are not login");
      redirect("/auth/login");
    }
  }, []);
  return (
    <div className="bg-white d-block">
      <div className="container">
        <div className="main-heading ps-4">
          <div className="text-dark  pb-3 pt-3">
            <h1 className="fs-5 pt-5 mt-4 mb-4 px-2">Account</h1>
          </div>
          <div
            className="content-sidesection border-bottom pb-3"
            style={{ width: "250px" }}
          >
            <ul
              className="list-decoration-none font-li-size p-0 d-flex flex-column ul-li-text-dark "
              style={{ gap: "25px" }}
            >
              <li
                className={
                  currentRoute === "/myaccount/mydasboard"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mydasboard">Dashboard</Link>
              </li>
              <li
                className={
                  currentRoute === "/myaccount/project"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/project">My Project</Link>
              </li>
              <li
                className={
                  currentRoute === "/myaccount/order-history"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/order-history">
                  Order History & Reorder
                </Link>
              </li>

              <li
                className={
                  currentRoute === "/myaccount/myupload"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/myupload">My Uploads</Link>
              </li>
              {/* <li
                className={
                  currentRoute === "/myaccount/mydesign"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mydesign">My Design Service</Link>
              </li> */}
              {/* <li
                className={
                  currentRoute === "/myaccount/mydigital-market"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mydigital-market">
                  My Digitial Marketing
                </Link>
              </li> */}
              <li
                className={
                  currentRoute === "/myaccount/pay-shiping"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/pay-shiping">Payment & Shiping</Link>
              </li>
              <li
                className={
                  currentRoute === "/myaccount/my-account"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/my-account">Account Setting </Link>
              </li>
              {/* <li
                className={
                  currentRoute === "/myaccount/"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="">My Subcription </Link>
              </li>
              <li
                className={
                  currentRoute === "/myaccount/my-fav"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/my-fav">Favroite Templates</Link>
              </li>

              <li
                className={
                  currentRoute === "/myaccount/mailing-list"
                    ? "px-2 rounded-pill py-1 color-gr active-link"
                    : "px-2 rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mailing-list">Mailing Lists</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
