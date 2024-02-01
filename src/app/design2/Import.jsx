"use client";
import React from "react";

import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("../design/Tshirt"), {
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
  borderState,
  safeArea,
  outerBorder,
  scale,
  divRef,
  selectedIdText,
  selectShapeText,
  image,
  status,
  dimension,
  selectedId,
  selectShape,
  previewOpen,
  stageRef,
  setHistoryStep,
  setHistory,
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
        borderState={borderState}
        safeArea={safeArea}
        outerBorder={outerBorder}
        scale={scale}
        divRef={divRef}
        selectedIdText={selectedIdText}
        selectShapeText={selectShapeText}
        image={image}
        status={status}
        dimension={dimension}
        selectedId={selectedId}
        selectShape={selectShape}
        previewOpen={previewOpen}
        stageRef={stageRef}
        setHistoryStep={setHistoryStep}
        setHistory={setHistory}
      />
    </React.Fragment>
  );
}
