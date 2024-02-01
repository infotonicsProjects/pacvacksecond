import dynamic from "next/dynamic";
import React from "react";

const Edit = dynamic(() => import("./Edit"), { ssr: false });
const page = ({ params }) => {
  return (
    <div>
      <Edit params={params} />
    </div>
  );
};

export default page;
