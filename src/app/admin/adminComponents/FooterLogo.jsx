import React from "react";

import Image from "next/image";

const FooterLogo = ({ src, width, height, className }) => {
  return (
    <Image
      src={src}
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default FooterLogo;
