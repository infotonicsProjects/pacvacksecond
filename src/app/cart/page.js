import React, { Fragment } from "react";
import Mycart from "./Mycart";
import { getUserData } from "../../utlis/Home";
export const metadata = {
  title: "My Account",
  description: " Bag printing website",
};
export default async function page() {
  const data = await getUserData("shopping_cart_table");

  return (
    <Fragment>
      <Mycart data={data?.data} />
    </Fragment>
  );
}
