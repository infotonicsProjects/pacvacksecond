"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./header.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import HeaderLogout from "./HeaderLogout";
import HeaderSearch from "./HeaderSearch";
import HeadermobileSearch from "./HeadermobileSearch";
import HeaderMobileMenuModal from "./HeaderMobileMenuModal";
const Header = () => {
  const userData = useSelector((state) => state.userData);
  const [serachOpen, setSearchOpen] = useState(false);
  return (
    <header>
      {/* header top area start  */}
      <div className="header_top_area responsive-display-none">
        <div className="container " id="header-top">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mobile-flex">
              <a className="mr-5-link mt-2" href="#">
                PackVack
              </a>
              <a className="mr-5-link mt-2" href="#">
                Website by Infotonics
              </a>
              <a className="mr-5-link mt-2" href="#">
                Corporate Pricing
              </a>
              <a className="mr-5-link mt-2" href="#">
                Reseller
              </a>
              <a className="mr-5-link mt-2" href="#">
                Packvack Create
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* header main area start */}
      <div className="header_main_area responsive-header-main-area">
        <div className="container me-2  max-width-98 responsive-width">
          <div className="row responsive-justify-between">
            <HeadermobileSearch
              setSearchOpen={setSearchOpen}
              serachOpen={serachOpen}
            />
            <div className="col-sm-12 col-md-3 col-lg-2 responsive-header-logo">
              <div className="h2-logo">
                <Link href="/">
                  <Image
                    src={"/img/logos/packVack-logo.jpeg"}
                    alt=""
                    height={100}
                    width={350}
                  />
                </Link>
              </div>
            </div>
            <HeaderSearch />
            <div className="col-sm-12 col-md-3 col-lg-4 d-flex justify-content-end align-items-start w-26-33 ps-0 ">
              <div className="cart-area ">
                <a className="mr-5-link header-link" href="#">
                  <svg
                    className="me-3"
                    style={{ display: "inline", marginTop: "5px" }}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5472 4C9.31915 4 5.04166 8.27749 5.04166 13.5055C5.04166 15.4066 5.59615 17.2285 6.62592 18.7336L5.04166 22.4566C4.88324 22.7734 5.20009 23.0903 5.59615 23.0111L9.31915 21.4268C10.8242 22.4566 12.6461 23.0111 14.5472 23.0111C19.7752 23.0111 24.0527 18.7336 24.0527 13.5055C24.0527 8.27749 19.7752 4 14.5472 4Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <ellipse
                      cx="14.548"
                      cy="17.4679"
                      rx="0.792128"
                      ry="0.792127"
                      fill="black"
                    ></ellipse>
                    <path
                      d="M14.5474 15.4073L14.4682 13.8231C15.7356 13.8231 16.8446 12.7933 16.8446 11.4467C16.8446 10.1001 15.8148 9.07031 14.4682 9.07031C13.1216 9.07031 12.0918 10.1001 12.0918 11.4467H12.171C12.171 10.1001 13.28 9.07031 14.5474 9.07031C15.8148 9.07031 16.9238 10.1793 16.9238 11.4467C16.9238 12.7933 15.894 13.8231 14.5474 13.8231V15.4073Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="hide-mobile ">
                    Helpline
                    <p
                      style={{
                        fontSize: "0.6rem",
                        marginTop: "-8px",
                        marginLeft: "32px",
                      }}
                      className="mb-0"
                    >
                      +910000124568
                    </p>
                  </span>
                </a>
                <Link
                  className="mr-5-link header-link responsive-display-none"
                  href="/myaccount/project"
                >
                  <svg
                    style={{ display: "inline" }}
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5 13.875C21.5 14.8694 21.0689 15.5634 20.4851 15.9837C19.9396 16.3764 19.3075 16.5 18.875 16.5H2.625C1.63056 16.5 0.936647 16.0689 0.516349 15.4851C0.123586 14.9396 0 14.3075 0 13.875V1.75C0 0.783502 0.783502 0 1.75 0H7.74469C8.30074 0 8.82369 0.264253 9.15354 0.711902L9.55003 1.25H19.75C20.7165 1.25 21.5 2.0335 21.5 3V13.875ZM1.5 1.75C1.5 1.61193 1.61193 1.5 1.75 1.5H7.74469C7.82413 1.5 7.89884 1.53775 7.94596 1.6017L10.8465 5.5381C11.1763 5.98575 11.6993 6.25 12.2553 6.25H19.75C19.8885 6.25 20 6.36192 20 6.49952V13.875C20 14.3806 19.8061 14.6241 19.6086 14.7663C19.3729 14.9361 19.0675 15 18.875 15H2.625C2.11944 15 1.87585 14.8061 1.73365 14.6086C1.56391 14.3729 1.5 14.0675 1.5 13.875V1.75ZM20 4.76772V3C20 2.86193 19.8881 2.75 19.75 2.75H10.6553L12.054 4.6483C12.1012 4.71225 12.1759 4.75 12.2553 4.75H19.75C19.8349 4.75 19.9183 4.75604 20 4.76772Z"
                      fill="black"
                    ></path>
                  </svg>
                  <span className="hide-mobile">My Project</span>
                </Link>

                <HeaderLogout userData={userData} />

                <Link
                  href="/cart"
                  className="mr-5-link header-link max-[786px]:mt-3"
                >
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: 0 }}
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M22 8.09863H6V24.7986H22V8.09863Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.5 10.6002V5.5002C11.5 4.8002 12.1 4.2002 12.8 4.2002H15.4C16.1 4.2002 16.7 4.8002 16.7 5.5002V10.7002"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(2 2.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="hide-mobile"> Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header main area end */}
    </header>
  );
};

export default Header;
