import Pagination from "../../adminComponents/Pagination";
import Kanban from "../../adminComponents/kanban-board/Kanban";
import React from "react";

const page = () => {
  return (
    <>
      <Pagination heading={"Kanban"} page="" />
      <Kanban />
    </>
  );
};

export default page;
