import dynamic from "next/dynamic";
import React from "react";

const Table = dynamic(() => import("./table"), { ssr: false });
const page = () => {
  return <Table />;
};

export default page;
