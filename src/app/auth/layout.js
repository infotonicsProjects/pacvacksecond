import React from "react";
import Header from "./Header";
import Content from "./Content";
export const metadata = {
  title: "PackVack Auth",
  description: " Bag printing website",
};
export default function layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Content children={children} />
    </React.Fragment>
  );
}
