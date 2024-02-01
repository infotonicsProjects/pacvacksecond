"use client";
import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Stage, Layer, Image, Rect } from "react-konva";
import BagImage from "./Bagimage";
import TextJs from "./Text";
import BorderReact from "./BorderReact";
import SafeAreaText from "./SafeAreaText";
import OuterBorder from "./OuterBorder";
import Bleed from "./Bleed";
import Dimension from "./Dimension";
import MiddleLine from "./MiddleLine";

const Tshirt = ({
  images,
  setImages,
  size,
  text,
  setText,
  handleExport,
  handleUpdateXandY,
  borderState,
  safeArea,
  outerBorder,
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
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    if (e.target.attrs.image) {
      selectShape(null);
      selectShapeText(null);
      setXMiddleLine(false);
      setYMiddleLine(false);
    }
  };
  useEffect(() => {
    handleExport(stageRef.current.toDataURL());
  }, [previewOpen, image, text, loading]);
  useEffect(() => {
    handleUpdateXandY();
  }, [text.length]);
  useEffect(() => {
    setHistoryStep((prev) => {
      const newState = prev + 1;
      return newState;
    });
    setHistory((prev) => {
      prev.push({
        imageState: images,
        textState: text,
      });
      return prev;
    });
  }, [images, text]);
  const [xMiddleLine, setXMiddleLine] = useState(false);
  const [yMiddleLine, setYMiddleLine] = useState(false);
  const [ispending, startTramnsiton] = useTransition();
  return (
    <div
      className="col-xxl-8 col-xl-8 col-lg-8 col-md-9 col-sm-12  w-100 resposive-mobile-bag"
      ref={divRef}
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
        right: "150px",
        background: "#F8F6F2",
      }}
    >
      {/* <button className='btn btn-primary' onClick={handleExport}>Download</button>
            <input placeholder='change text' onChange={e => setText(e.target.value)} className="form-control" /> */}
      <Stage
        width={1500}
        height={2000}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer width={1250} height={2000} ref={stageRef}>
          {status === "loaded" && (
            <Image
              image={image}
              width={image.width > 1200 ? 1250 : image.width}
              height={image.height > 2000 ? 2000 : image.height}
            />
          )}
          <MiddleLine
            image={image}
            yMiddleLine={yMiddleLine}
            xMiddleLine={xMiddleLine}
            setXMiddleLine={setXMiddleLine}
            setYMiddleLine={setYMiddleLine}
          />
          {!previewOpen && !loading && (
            <Fragment>
              <Dimension dimension={dimension} />
              <OuterBorder
                outerBorder={outerBorder}
                setOuterBorder={setOuterBorder}
                setBorderState={setBorderState}
                borderState={borderState}
                setrSafeArea={setrSafeArea}
                safeArea={safeArea}
              />
              <BorderReact
                borderState={borderState}
                setBorderState={setBorderState}
              />
              <SafeAreaText
                safeArea={safeArea}
                setrSafeArea={setrSafeArea}
                borderState={borderState}
              />
              <Bleed
                safeArea={safeArea}
                setrSafeArea={setrSafeArea}
                outerBorder={outerBorder}
              />
            </Fragment>
          )}
          {images?.map((image, i) => (
            <BagImage
              shapeProps={image}
              borderState={borderState}
              key={i}
              isSelected={image.id === selectedId}
              setXMiddleLine={setXMiddleLine}
              setYMiddleLine={setYMiddleLine}
              onSelect={() => {
                startTramnsiton(() => {
                  selectShapeText(null);
                  selectShape(image.id);
                });
              }}
              onChange={(newAttrs) => {
                startTramnsiton(() => {
                  const rects = images.slice();
                  rects[i] = newAttrs;
                  setImages(rects);
                });
              }}
            />
          ))}
          {text?.map((stat, i) => (
            <TextJs
              setXMiddleLine={setXMiddleLine}
              setYMiddleLine={setYMiddleLine}
              borderState={borderState}
              textprop={stat}
              key={i}
              onChange={(newAttrs) => {
                startTramnsiton(() => {
                  const rects = text.slice();
                  rects[i] = newAttrs;
                  setText(rects);
                });
              }}
              isSelected={stat.id === selectedIdText}
              onSelect={() => {
                startTramnsiton(() => {
                  selectShapeText(stat.id);
                  selectShape(null);
                });
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
export default Tshirt;
