import React from "react";
import { getUserData } from "../../../utlis/Home";
import Card from "./Card";
const SimilarCart = async () => {
  const data = await getUserData("products_table");
  return (
    <div className="p-5">
      <div>
        <h4> More to explore: match your design on...</h4>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "80px" }}
      >
        {data?.data?.slice(-8)?.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCart;
