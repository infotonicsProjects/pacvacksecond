import React, { useState } from "react";
import { Circle, Line, Text } from "react-konva";

const SafeAreaText = ({ safeArea, borderState }) => {
  return (
    <React.Fragment>
      <Text
        x={safeArea.x - 30}
        y={safeArea.y - 15}
        text={safeArea.text}
        fontSize={safeArea.fontSize}
        draggable
      />
      <Circle
        fill={safeArea.stroke}
        radius={safeArea.raduis}
        draggable
        x={safeArea.x}
        y={safeArea.y + 70}
      />
      <Line
        x={safeArea.x}
        y={safeArea.y}
        stroke={safeArea.stroke}
        points={safeArea.points}
        dash={safeArea.dash}
        draggable
      />
    </React.Fragment>
  );
};

export default SafeAreaText;
