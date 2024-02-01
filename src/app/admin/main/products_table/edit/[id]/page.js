import React from "react";
import Edit from "./Edit";

const page = ({ params }) => {
  return (
    <div>
      <Edit params={params} />
    </div>
  );
};

export default page;
