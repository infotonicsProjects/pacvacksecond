"use client";
import React from "react";

const Price = ({ price }) => {
  sessionStorage.setItem("price", price);
  return <p className="mb-1"> Rs {price}</p>;
};

export default Price;
