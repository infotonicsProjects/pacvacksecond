"use client";
import React from "react";

import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("../desiT/Tshirt"), {
  ssr: false,
});
export default function Design({
  images,
  setImages,
  state,
  setState,
  setSize,
  size,
  backgroundImg,
  text,
  setText,
  handleExport,
  handleUpdateXandY,
}) {
  return (
    <React.Fragment>
      <Canvas
        images={images}
        setImages={setImages}
        state={state}
        setState={setState}
        setSize={setSize}
        size={size}
        backgroundImg={backgroundImg}
        text={text}
        setText={setText}
        handleExport={handleExport}
        handleUpdateXandY={handleUpdateXandY}
      />
    </React.Fragment>
  );
}
