"use client";
import React, { useState } from "react";
import { Line, Rect } from "react-konva";

const BorderReact = ({ borderState }) => {
  return (
    <React.Fragment>
      <Line
        points={borderState?.points.left}
        x={borderState?.x.left}
        y={borderState?.y.upper}
        stroke={borderState?.stroke}
        strokeWidth={borderState?.strokeWidth}
        opacity={borderState?.opacity}
        dash={borderState?.dash}
      />
      <Line
        points={borderState?.points.upper}
        x={borderState?.x.left}
        y={borderState?.y.upper}
        stroke={borderState?.stroke}
        strokeWidth={borderState?.strokeWidth}
        opacity={borderState?.opacity}
        dash={borderState?.dash}
      />
      <Line
        points={borderState?.points.rigth}
        x={borderState?.x.right}
        y={borderState?.y.upper}
        stroke={borderState?.stroke}
        strokeWidth={borderState?.strokeWidth}
        opacity={borderState?.opacity}
        dash={borderState?.dash}
      />
      <Line
        points={borderState?.points.upper}
        x={borderState?.x.left}
        y={borderState?.y.down}
        stroke={borderState?.stroke}
        strokeWidth={borderState?.strokeWidth}
        opacity={borderState?.opacity}
        dash={borderState?.dash}
      />
    </React.Fragment>
  );
};

export default BorderReact;
