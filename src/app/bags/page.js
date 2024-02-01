import React from "react";
import SideSection from "./SideSection";
import Slide from "./Slide";
import TwoImagesSecond from "./TwoImagesecnd";
import Images from "./Images";
import NewGear from "../../Home/MadeByYou";
import { getUserData } from "../../utlis/Home";
import BreadCrumps from "../../Home/BreadCrumps";
export default async function page({ searchParams }) {
  const data = await getUserData("products_table");
  const categoryData = await getUserData("category");
  const filterData = data?.data?.filter(
    (a) => a.categ_id == searchParams?.catid,
  );
  const page = categoryData?.data?.find(
    (a) => a.categ_id == searchParams?.catid,
  );
  const title = [
    {
      name: `bags?cateid=${searchParams?.catid}`,
      id: 1,
      page: page?.title,
    },
  ];
  return (
    <React.Fragment>
      <BreadCrumps title={title} key={title.id} />
      <Slide title={title} />
      <div className="d-flex" style={{ gap: "75px" }}>
        <SideSection categoryData={categoryData?.data} page={page} />
        <Images data={filterData} />
      </div>
      <TwoImagesSecond />
      <div className="h-50 pb-5 mb-5" style={{ marginLeft: "25rem" }}>
        <NewGear />
      </div>
    </React.Fragment>
  );
}
