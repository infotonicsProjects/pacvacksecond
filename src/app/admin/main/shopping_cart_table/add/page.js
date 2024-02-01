import dynamic from "next/dynamic";
import React from "react";

const Add = dynamic(() => import("./Add"), { ssr: false });
const page = () => {
  return (
    <div>
      <Add />
    </div>
  );
};

export default page;
