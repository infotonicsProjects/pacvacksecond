import React, { Fragment, useState } from "react";
import { TbMenu } from "react-icons/tb";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./MobileMenu"));
const HeaderMobileMenuModal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      <TbMenu
        onClick={() => setMenuOpen(true)}
        style={{
          width: "25px",
          fontWeight: "bold",
          height: "25px",
          marginRight: "15px",
        }}
      />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Fragment>
  );
};

export default HeaderMobileMenuModal;
