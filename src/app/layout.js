"use client";
import { Inter } from "next/font/google";

import "../css/main.css";
import "../css/font-awesome.min.css";
import "../css/font-awesome.min.css";
import "../css/normalize.css";
import "../css/jquery-ui.css";
import "../css/jquery.simplelens.css";
import "../css/mobile_menu.min.css";
import "../css/normalize.css";
import "../css/owl.carousel.css";
import "../style.css";
import "../css/owl.theme.css";
import "../css/owl.transitions.css";
import "../css/responsive.css";
import Aboutsection from "../Home/Aboutsection";
import Header from "../Home/Header";
import MainMenu from "../Home/MainMenu";

import Notification from "../Home/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "../redux/Provider";
import React, { Fragment, useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname.slice(0, 6) !== "/admin" ? (
        <html lang="en">
          <body className={" " + "home-2 h-13"}>
            <Providers>
              {pathname === "/auth/login" ||
                pathname === "/auth/signup" ||
                pathname === "/design2" ? (
                <Fragment></Fragment>
              ) : (
                <React.Fragment>
                  <Header />
                  <MainMenu />
                  {/* <MobileMenu /> */}
                  <Notification />
                </React.Fragment>
              )}
              {children}
              {pathname === "/auth/login" ||
                pathname === "/auth/signup" ||
                pathname.slice(0, 14) === "/continue-cart" ||
                pathname === "/design2" ? (
                <Fragment></Fragment>
              ) : (
                <Aboutsection />
              )}
              <ToastContainer />
            </Providers>
          </body>
        </html>
      ) : (
        <>
          <Providers>{children}</Providers>
        </>
      )}
    </>
  );
}
