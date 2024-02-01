import React from "react";
import Des from "./des";
import SliderImg from "./sliderImg";
import Tabsection from "./tabsection";
import Banner from "./banner";
import { getUserData } from "../../utlis/Home";
import SliderImgSecond from "./sliderImgSecond";
export const metadata = {
  title: "Product",
  description: "Description bag printing website",
};
export default async function page({ searchParams }) {
  const data = await getUserData(`products_table/${searchParams?.bag}`);
  const categoryData = await getUserData("category");
  const page = categoryData?.data?.find((a) => a.categ_id == data?.data?.categ_id);

  return (
    <React.Fragment>
      <Des id={page?.id} page={page?.title} pageTitle={data?.data?.names} />
      {data?.data.atributes ? (
        <SliderImgSecond data={data?.data} id={searchParams?.bag} />
      ) : (
        <SliderImg data={data?.data} id={searchParams?.bag} />
      )}
      <Tabsection data={data?.data} />
      <Banner />
    </React.Fragment>
  );
}
