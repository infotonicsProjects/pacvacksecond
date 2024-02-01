import BreadCrumps from "../../Home/BreadCrumps";
import React from "react";

export default function layout({ children }) {
  const title = [
    {
      name: "bag",
      id: 1,
      page: "Bags",
    },
    {
      name: "backpack",
      id: 1,
      page: "Bag Pack",
    },
  ];
  return (
    <React.Fragment>
      <BreadCrumps title={title} />
      {children}
    </React.Fragment>
  );
}
