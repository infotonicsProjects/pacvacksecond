import React from "react";

export const Button1 = ({ setSidebar, max }) => {
  const handleClick = () => {
    setSidebar(!max);
  };
  return (
    <button
      type="button"
      className="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary"
      onClick={handleClick}
    >
      <span className="hamburger-icon">
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </span>
    </button>
  );
};
export const Button2 = ({ setSidebarOpen, sideBarOpen }) => {
  const handleSideBaropen = () => {
    setSidebarOpen(!sideBarOpen);
  };
  return (
    <button
      type="button"
      className="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary"
      onClick={handleSideBaropen}
    >
      <span className="hamburger-icon">
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </span>
    </button>
  );
};
