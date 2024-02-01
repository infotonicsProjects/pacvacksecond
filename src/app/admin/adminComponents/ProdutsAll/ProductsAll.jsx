import { getUserData } from "@/utlis/Home";
import React from "react";
import ProductMap from "./ProductMap";

const ProductsAll = async () => {
  const data = await getUserData("products");

  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <ProductMap data={data} />

        {/* .row end */}
      </div>
    </div>
  );
};

export default ProductsAll;
