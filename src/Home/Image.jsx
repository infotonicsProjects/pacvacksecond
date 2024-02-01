import Image from "next/image";
import React from "react";

const ImageFuntion = ({ src, width, height, alt }) => {
  return <Image src={src} width={width} alt={alt} height={height} />;
};

export default ImageFuntion;
