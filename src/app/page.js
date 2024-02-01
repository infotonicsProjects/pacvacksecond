import AboutWebsite from "../Home/AboutWebsite";
import Branded from "../Home/Branded";
import Explore from "../Home/Explore";
import FeatureProduct from "../Home/FeatureProduct";
import Imageandform from "../Home/Imageandform";
import MadeBy from "../Home/MadeByYou";
import NewGear from "../Home/NewGear";
import Slide from "../Home/Slide";
import Toprated from "../Home/Toprated";
import TwoImage from "../Home/TwoImage";
import { getUserData } from '../utlis/Home';
import React from "react";
export const metadata = {
  title: "PackVack",
  description: "Description bag printing website",
};
export default async function Home() {
  const ProductImageData = await getUserData("product_images_table");
  return (
    <React.Fragment>
      <Slide />
      <FeatureProduct data={ProductImageData?.data} />
      <Branded data={ProductImageData?.data} />
      <NewGear data={ProductImageData?.data} />
      <TwoImage data={ProductImageData?.data} />
      {/* <Toprated data={ProductImageData.data} /> */}
      <MadeBy data={ProductImageData?.data} />
      <Explore data={ProductImageData?.data?.slice(11)} />
      <Imageandform />
      <AboutWebsite />
    </React.Fragment>
  );
}
