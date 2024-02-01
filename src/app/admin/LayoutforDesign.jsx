"use client";
import { addUser } from "../../redux/slice";
import { GetData } from "../../utlis/ClientApi";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const LayoutforDesign = ({ children }) => {
  const pathname = usePathname();
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(false);
  const dispacth = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const resposne = await GetData("user", setLoading, signal);
      if (resposne !== undefined && resposne !== null) {
        dispacth(addUser(resposne));
      } else {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      }
    };
    getData();
    // return () => controller.abort();
  }, []);

  return (
    <Fragment>
      {pathname.slice(0, 14) === "/admin/design2" ? (
        <body>
          {children}
          <ToastContainer />
        </body>
      ) : (
        <body
          className={`layout-1 modal-open h-menu`}
          data-luno="theme-blush"
          style={{ overflow: "hidden", paddingRight: "0px" }}
        >
          {children}
          <ToastContainer />
        </body>
      )}
    </Fragment>
  );
};

export default LayoutforDesign;
