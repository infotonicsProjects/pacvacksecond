import React, { useEffect, useRef } from "react";
import { Group, Image, Text, Transformer } from "react-konva";
import useImage from "use-image";

const TextJs = ({
  textprop,
  isSelected,
  onSelect,
  onChange,
  onDoubleClick,
  size,
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
      flipEnabled={true}
      enabledAnchors={["middle-left", "middle-right"]}
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
            size.width / 2.5,
            Math.min(size.width - size.width / 3.3, pos.x),
          ), // Allow movement along the X-axis
          y: Math.max(size.height - 470, Math.min(size.height - 90, pos.y)), // Allow movement along the X-axis
        })}
        onDragEnd={(e) => {
          onChange({
            ...textprop,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
      >
        <Image
          image={image}
          height={25}
          width={25}
          ref={textRef}
          x={-25}
          y={-3}
        />
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
          perfectDrawEnabled={false}
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
              // set minimal value  width: Math.max(text.width() * text.scaleX(), MIN_WIDTH),
              scaleX: 1,
              scaleY: 1,
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }}
        />
        {transformer}
      </Group>
    </React.Fragment>
  );
};

export default TextJs;
