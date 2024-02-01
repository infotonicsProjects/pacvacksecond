import React from "react";
import logo from "./packVack-logo.png";
import Link from "next/link";
import FooterLogo from "../../../app/admin/adminComponents/FooterLogo";

import dynamic from "next/dynamic";
import { Button1, Button2 } from "../../../app/admin/adminComponents/Button";
const HeaderNotification = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderNotification"),
);
const HeaderInput = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderInput"),
);
const HeaderNight = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderNight"),
);
const HeaderLanguage = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderLanguage"),
);
const HeaderGridDrop = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderGridDrop"),
);
const HeaderNameAvtar = dynamic(
  () => import("../../../app/admin/adminComponents/HeaderNameAvtar"),
);
export default function Header({
  setSidebar,
  max,
  sideBarOpen,
  setSidebarOpen,
}) {
  return (
    <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          {/* start: toggle btn */}
          <div className="d-flex">
            <Button1 setSidebar={setSidebar} max={max} />
            <Button2
              sideBarOpen={sideBarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <Link
              href="/admin"
              className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
            >
              <FooterLogo src={logo} width={240} height={50} />
            </Link>
          </div>
          {/* start: search area */}
          <HeaderInput />
          {/* start: link */}
          <ul className="header-right justify-content-end d-flex align-items-center mb-0">
            {/* start: notifications dropdown-menu */}
            <HeaderNotification />
            {/* start: quick light dark */}
            <HeaderNight />
            {/* start: Language dropdown-menu */}
            <HeaderLanguage />
            {/* start: Grid app dropdown-menu */}
            <HeaderGridDrop />
            {/* start: My notes toggle modal */}
            <li className="d-none d-sm-inline-block d-xl-none">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#MynotesModal"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="18px"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-secondary"
                    d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                  />
                  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
                </svg>
              </a>
            </li>
            {/* start: Recent Chat toggle modal */}
            <li className="d-none d-sm-inline-block d-xl-none">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#RecentChat"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="18px"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path
                    className="fill-secondary"
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
            </li>

            {/* start: User dropdown-menu */}
            <HeaderNameAvtar />
            {/* start: Settings toggle modal */}
            <li>
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#SettingsModal"
                title="Settings"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="18px"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-secondary"
                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                  />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
