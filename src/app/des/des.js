import React from "react";
import BreadCrumps from "../../Home/BreadCrumps";
export default function des({ id, page, pageTitle }) {
  const title = [
    {
      name: `picks/${id}`,
      id: 1,
      page: page,
    },
    {
      name: `des?bag=${id}`,
      id: 1,
      page: pageTitle,
    },
  ];
  return (
    <div>
      <BreadCrumps title={title} />
    </div>
  );
}
