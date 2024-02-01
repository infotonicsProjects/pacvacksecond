import React from "react";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("./Main"));
export default function page() {
  return <Main />;
}
