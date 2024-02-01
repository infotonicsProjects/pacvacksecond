"use client";
import Dasboard from "../../app/admin/adminComponents/Home/Dasboard";
import dynamic from "next/dynamic";
import { useState } from "react";

const Sidebar = dynamic(() => import("./main/Sidebar"));
const Header = dynamic(() => import("./main/Header"));
const Footer = dynamic(() => import("./main/footer"));
export default function Home() {
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
        <Dasboard />
        <Footer />
      </div>
    </>
  );
}
