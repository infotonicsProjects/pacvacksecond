import React from "react";
import SideSection from "./Sidesection";
export default function layout({ children }) {
  return (
    <div className="d-flex mx-4" style={{ gap: "35px", height: "inherit" }}>
      <SideSection />
      {children}
    </div>
  );
}
