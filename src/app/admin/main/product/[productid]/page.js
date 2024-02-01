import React from "react";
import ProductIndivual from "../../../adminComponents/Product/ProductIndiviual";

const page = ({ params, searchParams }) => {
  return <ProductIndivual params={params} searchParams={searchParams} />;
};

export default page;
