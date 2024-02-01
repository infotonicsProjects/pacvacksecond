import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("./Main"), { ssr: false });
export default function page() {
  return (
    <Fragment>
      <Main />
    </Fragment>
  );
}
