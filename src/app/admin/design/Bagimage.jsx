"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import Konva from "konva";

const BagImage = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  borderState,
  setXMiddleLine,
  setYMiddleLine,
}) => {
  const [sizeImg, setSizeImg] = useState({
    width: 100,
    height: 100,
  });
  const imageRef = useRef();
  const [image] = useImage(shapeProps.url, "Anonymous");

  const transformerRef = useRef(null);
  useEffect(() => {
    if (isSelected && transformerRef.current !== null) {
      transformerRef.current.nodes([imageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={true}
      flipEnabled={true}
      boundBoxFunc={(oldBox, newBox) => {
        // limit resize
        if (newBox.width < 5 || newBox.height < 5) {
          return oldBox;
        }
        return newBox;
      }}
    />
  ) : null;
  useEffect(() => {
    if (image) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
    }
  }, [image, shapeProps]);
  return (
    <React.Fragment>
      <Image
        image={image}
        draggable={shapeProps.draggable}
        x={shapeProps.x}
        ref={imageRef}
        y={shapeProps.y}
        id={shapeProps.id}
        width={shapeProps.width ? shapeProps.width : sizeImg.width}
        height={shapeProps.height ? shapeProps.height : sizeImg.height}
        red={shapeProps.red}
        green={shapeProps.green}
        blue={shapeProps.blue}
        zIndex={shapeProps.zIndex}
        rotation={shapeProps.rotation}
        filters={[
          Konva.Filters.RGBA,
          Konva.Filters.Brighten,
          Konva.Filters.HSL,
        ]}
        onClick={onSelect}
        onTap={onSelect}
        alpha={shapeProps.alpha}
        saturation={0}
        brightness={0}
        dragBoundFunc={(pos) => ({
          x: Math.max(
            borderState.x.left,
            Math.min(borderState.x.right - shapeProps.width, pos.x),
          ), // Allow movement along the X-axis
          y: Math.max(
            borderState.y.upper,
            Math.min(borderState.y.down - shapeProps.height, pos.y),
          ), // Allow movement along the X-axis
        })}
        onDragMove={(e) => {
          if (
            Math.abs(e.target.attrs.y + shapeProps.height / 2 - 2000 / 1.6) <=
            10
          ) {
            setXMiddleLine(true);
          } else {
            setXMiddleLine(false);
          }
          if (
            Math.abs(e.target.attrs.x + shapeProps.width / 2 - 1250 / 2.1) <= 10
          ) {
            setYMiddleLine(true);
          } else {
            setYMiddleLine(false);
          }
        }}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          setTimeout(() => {
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              scaleX: 1,
              scaleY: 1,
              // set minimal value
              width: node.width() * scaleX,
              height: node.height() * scaleY,
            });
          }, 200);
        }}

        // onTransformEnd={(e) => {
        //   // transformer is changing scale of the node
        //   // and NOT its width or height
        //   // but in the store we have only width and height
        //   // to match the data better we will reset scale on transform end
        //   const node = imageRef.current;
        //   const scaleX = node.scaleX();
        //   const scaleY = node.scaleY();
        //   // we will reset it back
        //   node.scaleX(1);
        //   node.scaleY(1);
        //   setTimeout(() => {

        //     onChange({
        //       ...shapeProps,
        //       x: node.x(),
        //       y: node.y(),
        //       // set minimal value
        //       width: node.width() * scaleX,
        //       height: node.height() * scaleY,
        //     });
        //   }, 200)
        // }}
      />
      {transformer}
    </React.Fragment>
  );
};

export default BagImage;
