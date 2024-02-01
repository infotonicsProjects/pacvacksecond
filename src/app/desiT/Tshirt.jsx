"use client";
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer } from "react-konva";
import BagImage from "./Bagimage";
import TextJs from "./Text";

const Tshirt = ({
  images,
  setImages,
  setSize,
  size,
  backgroundImg,
  text,
  setText,
  handleExport,
  handleUpdateXandY,
}) => {
  const [selectedId, selectShape] = useState(null);
  const [selectedIdText, selectShapeText] = useState(null);
  const divRef = useRef(null);
  useEffect(() => {
    const checkSize = () => {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    };
    window.addEventListener("resize", checkSize);
    return () => clearTimeout;
  }, [window.innerHeight, window.innerWidth]);
  const stageRef = React.useRef(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      selectShapeText(null);
    }
  };
  useEffect(() => {
    handleExport(stageRef.current.toDataURL());
  }, [images, text]);
  useEffect(() => {
    handleUpdateXandY();
  }, [text.length, images.length]);
  return (
    <div className="col-lg-8 border" ref={divRef}>
      {/* <button className='btn btn-primary' onClick={handleExport}>Download</button>
            <input placeholder='change text' onChange={e => setText(e.target.value)} className="form-control" /> */}
      <div className="d-flex justify-content-center">
        <img
          className="max-height max-width h-100"
          src={backgroundImg.url}
          alt="bag"
          style={{ position: "absolute" }}
        />
      </div>
      <Stage
        width={size.width}
        height={size.height}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer width={size.width} height={size.height}>
          {images?.map((image, i) => (
            <BagImage
              shapeProps={image}
              key={i}
              size={size}
              isSelected={image.id === selectedId}
              onSelect={() => {
                selectShape(image.id);
              }}
              onChange={(newAttrs) => {
                const rects = images.slice();
                rects[i] = newAttrs;
                setImages(rects);
              }}
            />
          ))}
          {text?.map((stat, i) => (
            <TextJs
              size={size}
              textprop={stat}
              key={i}
              onChange={(newAttrs) => {
                const rects = text.slice();
                rects[i] = newAttrs;
                setText(rects);
              }}
              isSelected={stat.id === selectedIdText}
              onSelect={() => {
                selectShapeText(stat.id);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
export default Tshirt;
