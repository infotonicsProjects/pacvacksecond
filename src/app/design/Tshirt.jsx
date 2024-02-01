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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleExport(stageRef.current.toDataURL());
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [previewOpen, images, text]);
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
  function haveIntersection(r1, index) {
    text.forEach((r2, i) => {
      if (r2.id !== r1.id) {
        if (
          !(
            r2.x > r1.x + r1.width ||
            r2.x + r2.width < r1.x ||
            r2.y > r1.y + r1.height ||
            r2.y + r2.height < r1.y
          )
        ) {
          if (!r2.x > r1.x + r1.width) {
          } else if (!(r2.y + r2.height < r1.y)) {
            text[index].y = r2.y + r2.height;
          } else if (!(r2.y > r1.y + r1.height)) {
          } else if (!(r2.x + r2.width < r1.x)) {
          } else {
          }
        }
      }
    });
  }

  return (
    <div
      className="col-xxl-8 col-xl-8 col-lg-8 col-md-9 col-sm-12 bg-white w-100 resposive-mobile-bag"
      ref={divRef}
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
        right: "150px",
      }}
    >
      {/* <button className='btn btn-primary' onClick={handleExport}>Download</button>
            <input placeholder='change text' onChange={e => setText(e.target.value)} className="form-control" /> */}
      <Stage
        width={1500}
        height={2000}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        ref={stageRef}
      >
        <Layer width={1250} height={2000} id="design-canvas">
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
          />
          {!previewOpen && !loading && (
            <Fragment>
              {/* <Dimension dimension={dimension} /> */}
              <OuterBorder outerBorder={outerBorder} />
              <BorderReact borderState={borderState} />
              <SafeAreaText safeArea={safeArea} />
              <Bleed safeArea={safeArea} />
            </Fragment>
          )}
          {images?.map((item, i) => (
            <BagImage
              shapeProps={item}
              borderState={borderState}
              key={i}
              isSelected={item.id === selectedId}
              setXMiddleLine={setXMiddleLine}
              setYMiddleLine={setYMiddleLine}
              onSelect={() => {
                startTramnsiton(() => {
                  selectShapeText(null);
                  selectShape(item.id);
                });
              }}
              onChange={(newAttrs) => {
                startTramnsiton(() => {
                  const rects = images.slice();
                  rects[i] = newAttrs;
                  startTramnsiton(() => {
                    setImages(rects);
                  });
                });
              }}
            />
          ))}
          {text?.map((stat, i) => (
            <TextJs
              borderState={borderState}
              textprop={stat}
              key={i}
              setXMiddleLine={setXMiddleLine}
              setYMiddleLine={setYMiddleLine}
              onChange={(newAttrs) => {
                startTramnsiton(() => {
                  const rects = text.slice();
                  rects[i] = newAttrs;
                  setText(rects);
                });
                haveIntersection(newAttrs, i);
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
