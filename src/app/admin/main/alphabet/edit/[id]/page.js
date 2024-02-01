import React from "react";
import dynamic from "next/dynamic";

const Edit = dynamic(() => import("./Edit"), { ssr: false });

const page = ({ params }) => {
  return (
    <div>
      <Edit params={params} />
    </div>
  );
};

export default page;
