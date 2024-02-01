import React from "react";
import dynamic from "next/dynamic";

const Add = dynamic(() => import("./Add"), { ssr: false });

const page = () => {
  return (
    <div>
      <Add />
    </div>
  );
};

export default page;
