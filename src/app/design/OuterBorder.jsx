import React, { useState } from "react";
import { Line } from "react-konva";

const OuterBorder = ({ outerBorder }) => {
  return (
    <React.Fragment>
      <Line
        points={outerBorder?.points.left}
        x={outerBorder?.x.left}
        y={outerBorder?.y.upper}
        stroke={"red"}
        strokeWidth={outerBorder?.strokeWidth}
        opacity={outerBorder?.opacity}
      />
      <Line
        points={outerBorder?.points.upper}
        x={outerBorder?.x.left}
        y={outerBorder?.y.upper}
        stroke={outerBorder?.stroke}
        strokeWidth={outerBorder?.strokeWidth}
        opacity={outerBorder?.opacity}
      />
      <Line
        points={outerBorder?.points.rigth}
        x={outerBorder?.x.right}
        y={outerBorder?.y.upper}
        stroke={outerBorder?.stroke}
        strokeWidth={outerBorder?.strokeWidth}
        opacity={outerBorder?.opacity}
      />
      <Line
        points={outerBorder?.points.upper}
        x={outerBorder?.x.down}
        y={outerBorder?.y.down}
        stroke={outerBorder?.stroke}
        strokeWidth={outerBorder?.strokeWidth}
        opacity={outerBorder?.opacity}
      />
    </React.Fragment>
  );
};

export default OuterBorder;
