"use client";
import React from "react";
import Design from "./Import";

const MiddleSection = ({
  images,
  setImages,
  setSize,
  size,
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
  setBorderState,
  setOuterBorder,
  setrSafeArea,
  loading,
}) => {
  return (
    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8 col-sm-10 ml-5">
      {/* <div className="d-flex" style={{ gap: "10px" }}>
        <button
          className="btn"
          onClick={() => setImageSide({ url: backgroundImg.url })}
        >
          Front
        </button>
        <button
          className="btn"
          onClick={() => setImageSide({ url: backgroundImg.urlback })}
        >
          Back
        </button>
        <button
          className="btn"
          onClick={() => setImageSide({ url: backgroundImg.urlsideleft })}
        >
          Left Side
        </button>
        <button
          className="btn"
          onClick={() => setImageSide({ url: backgroundImg.urlsideright })}
        >
          Right Side
        </button>
      </div> */}
      <div className="pl-5">
        <div className="">
          <Design
            images={images}
            setImages={setImages}
            setSize={setSize}
            size={size}
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
            setBorderState={setBorderState}
            setOuterBorder={setOuterBorder}
            setrSafeArea={setrSafeArea}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
