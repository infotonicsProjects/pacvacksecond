"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./Sidebar"));
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./footer"));
export default function Layout({ children }) {
  const [sidebarMax, setSidebar] = useState(true);
  const [sideBarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        max={sidebarMax}
        setSidebar={setSidebar}
        sideBarOpen={sideBarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="wrapper">
        <Header
          max={sidebarMax}
          setSidebar={setSidebar}
          sideBarOpen={sideBarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {children}
        <Footer />
      </div>
    </>
  );
}
