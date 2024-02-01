import Pagination from "../../adminComponents/Pagination";
import dynamic from "next/dynamic";
import React from "react";

const NewProjects = dynamic(
  () =>
    import("./../../../../app/admin/adminComponents/New-project/NewProjects"),
  { ssr: false },
);

const page = () => {
  return (
    <>
      <Pagination heading={"New Projects"} page="" />
      <NewProjects />
    </>
  );
};

export default page;
