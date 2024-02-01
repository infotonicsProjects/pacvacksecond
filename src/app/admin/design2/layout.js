import React from "react";

export const metadata = {
  title: "PackVack Premade Design",
  description: "PreMade Design for paperbags",
};
export default function layout({ children }) {
  return (
    <React.Fragment>
      <div style={{ background: "white", height: "90vh", }}>{children}</div>
    </React.Fragment>
  );
}
