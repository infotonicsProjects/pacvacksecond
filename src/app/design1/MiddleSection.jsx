"use client";
import React, { useEffect, useState } from "react";
import Design from "./Import";

const MiddleSection = ({
  images,
  setImages,
  setSize,
  size,
  backgroundImg,
  setBackgroungImg,
  text,
  setText,
  handleExport,
  handleUpdateXandY,
}) => {
  const [imageside, setImageSide] = useState(backgroundImg);
  useEffect(() => {
    setImageSide(backgroundImg);
  }, [backgroundImg]);

  return (
    <div className="col-lg-6 ml-5">
      <div className="d-flex" style={{ gap: "10px" }}>
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
      </div>
      <div className="pl-5">
        <div>
          <Design
            images={images}
            setImages={setImages}
            setSize={setSize}
            size={size}
            backgroundImg={imageside}
            text={text}
            setText={setText}
            handleExport={handleExport}
            handleUpdateXandY={handleUpdateXandY}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
