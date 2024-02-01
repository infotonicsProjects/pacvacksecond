import React, { useEffect, useRef } from "react";
import { Group, Image, Text, TextPath, Transformer } from "react-konva";
import useImage from "use-image";

const TextJs = ({
  textprop,
  isSelected,
  onSelect,
  onChange,
  onDoubleClick,
  borderState,
  setXMiddleLine,
  setYMiddleLine,
}) => {
  const transformer1Ref = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (isSelected && transformer1Ref.current !== null) {
      transformer1Ref.current.nodes([textRef.current]);
      transformer1Ref.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  const transformer = isSelected ? (
    <Transformer
      ref={transformer1Ref}
      rotateEnabled={true}
      enabledAnchors={["middle-left", "middle-right"]}
      flipEnabled={true}
      boundBoxFunc={(oldBox, newBox) => {
        // limit resize
        if (newBox.width < 20) {
          return oldBox;
        }
        return newBox;
      }}
    />
  ) : null;
  const [image] = useImage(textprop.icon, "Anonimus");
  return (
    <React.Fragment>
      <Group
        draggable
        id={textprop.id}
        x={textprop.x}
        width={textprop.width + 30}
        y={textprop.y}
        dragBoundFunc={(pos) => ({
          x: Math.max(
            borderState.x.left,
            Math.min(borderState.x.right - textprop.width, pos.x),
          ), // Allow movement along the X-axis
          y: Math.max(
            borderState.y.upper,
            Math.min(borderState.y.down - textprop.height, pos.y),
          ), // Allow movement along the X-axis
        })}
        onDragMove={(e) => {
          if (
            Math.abs(e.target.attrs.y + textprop.height / 2 - 2000 / 1.6) <= 10
          ) {
            setXMiddleLine(true);
          } else {
            setXMiddleLine(false);
          }
          if (
            Math.abs(e.target.attrs.x + textprop.width / 2 - 1250 / 2.1) <= 10
          ) {
            setYMiddleLine(true);
          } else {
            setYMiddleLine(false);
          }
        }}
        onDragEnd={(e) => {
          onChange({
            ...textprop,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
      >
        <img
          image={image}
          height={25}
          width={25}
          ref={textRef}
          x={-25}
          y={-3}
        />
        {textprop.textPath !== undefined ? (
          <TextPath
            data={textprop.data}
            text={textprop.textPath}
            ref={textRef}
            fontSize={textprop.fontSize}
            id={textprop.id}
            width={textprop.width}
            onClick={onSelect}
            onTap={onSelect}
            onDblClick={onDoubleClick}
            onDblTap={onDoubleClick}
            fontFamily={textprop.fontFamily}
            fontStyle={textprop.fontStyle}
            align={textprop.align}
            fill={textprop.fill}
            rotation={textprop.rotation}
            strokeWidth={textprop.strokeWidth}
            textDecoration={textprop.textDecoration}
            onTransformEnd={(e) => {
              // transformer is changing scale of the node
              // and NOT its width or height
              // but in the store we have only width and height
              // to match the data better we will reset scale on transform end
              const node = textRef.current;
              const scaleX = node.scaleX();
              const scaleY = node.scaleY();
              // we will reset it back
              node.scaleX(1);
              node.scaleY(1);
              onChange({
                ...textprop,
                // set minimal value
                width: Math.max(5, node.width() * scaleX),
                height: Math.max(node.height() * scaleY),
              });
            }}
          />
        ) : (
          <Text
            text={textprop.text}
            ref={textRef}
            fontSize={textprop.fontSize}
            id={textprop.id}
            width={textprop.width}
            onClick={onSelect}
            onTap={onSelect}
            onDblClick={onDoubleClick}
            onDblTap={onDoubleClick}
            fontFamily={textprop.fontFamily}
            fontStyle={textprop.fontStyle}
            align={textprop.align}
            fill={textprop.fill}
            rotation={textprop.rotation}
            strokeWidth={textprop.strokeWidth}
            textDecoration={textprop.textDecoration}
            onTransformEnd={(e) => {
              // transformer is changing scale of the node
              // and NOT its width or height
              // but in the store we have only width and height
              // to match the data better we will reset scale on transform end
              const node = textRef.current;
              const scaleX = node.scaleX();
              const scaleY = node.scaleY();
              // we will reset it back
              node.scaleX(1);
              node.scaleY(1);
              onChange({
                ...textprop,
                // set minimal value
                width: Math.max(5, node.width() * scaleX),
                height: Math.max(node.height() * scaleY),
              });
            }}
          />
        )}
        {transformer}
      </Group>
    </React.Fragment>
  );
};

export default TextJs;
