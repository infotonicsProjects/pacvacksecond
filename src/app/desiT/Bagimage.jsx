"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import Konva from "konva";

const BagImage = ({ shapeProps, isSelected, onSelect, onChange, size }) => {
  const [sizeImg, setSizeImg] = useState({
    width: 100,
    height: 100,
  });
  const imageRef = useRef();
  const [image] = useImage(shapeProps.url, "Anonimus");
  useEffect(() => {
    setSizeImg({
      width: 100,
      height: 100,
    });
  }, []);
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
  }, [image]);
  return (
    <React.Fragment>
      <Image
        image={image}
        draggable
        x={shapeProps.x}
        ref={imageRef}
        y={shapeProps.y}
        id={shapeProps.id}
        width={shapeProps.width ? shapeProps.width : sizeImg.width}
        height={shapeProps.height ? shapeProps.height : sizeImg.height}
        red={shapeProps.red}
        green={shapeProps.green}
        blue={shapeProps.blue}
        filters={[Konva.Filters.RGB]}
        onClick={onSelect}
        onTap={onSelect}
        dragBoundFunc={(pos) => ({
          x: Math.max(size.width / 3.8, Math.min(size.width - 200, pos.x)), // Allow movement along the X-axis
          y: Math.max(size.height - 490, Math.min(size.height - 200, pos.y)), // Allow movement along the X-axis
        })}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // onTransformEnd={(e) => {
        //     // transformer is changing scale of the node
        //     // and NOT its width or height
        //     // but in the store we have only width and height
        //     // to match the data better we will reset scale on transform end
        //     const node = imageRef.current;
        //     const scaleX = node.scaleX();
        //     const scaleY = node.scaleY();
        //     // we will reset it back
        //     node.scaleX(1);
        //     node.scaleY(1);
        //     onChange({
        //         ...shapeProps,
        //         x: node.x(),
        //         y: node.y(),
        //         // set minimal value
        //         width: Math.max(5, node.width() * scaleX),
        //         height: Math.max(node.height() * scaleY),
        //     });
        // }}
      />
      {transformer}
    </React.Fragment>
  );
};

export default BagImage;
