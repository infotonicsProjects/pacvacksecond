import React from "react";
import { Circle, Line, Text } from "react-konva";

const Bleed = ({ safeArea }) => {
  return (
    <React.Fragment>
      <Text
        x={safeArea.x + 230}
        y={safeArea.y - 30}
        text={"Bleed"}
        fontSize={safeArea.fontSize}
        fill={"red"}
      />
      <Circle
        fill={"red"}
        radius={safeArea.raduis}
        x={safeArea.x + 250}
        y={safeArea.y + 70}
      />
      <Line
        x={safeArea.x + 250}
        y={safeArea.y - 10}
        stroke={"red"}
        points={safeArea.points}
        dash={safeArea.dash}
      />
    </React.Fragment>
  );
};

export default Bleed;
