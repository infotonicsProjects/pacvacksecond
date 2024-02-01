"use client";
import React, { useState } from "react";
import { Line, Rect } from "react-konva";

const BorderReact = ({ borderState, setBorderState }) => {
  return (
    <React.Fragment>
      <Line
        points={borderState.points.left}
        x={borderState.x.left}
        y={borderState.y.upper}
        stroke={borderState.stroke}
        strokeWidth={borderState.strokeWidth + 3}
        opacity={borderState.opacity}
        dash={borderState.dash}
        draggable
        onDragEnd={(e) => {
          borderState.points.left = [
            0,
            0,
            0,
            0,
            0,
            borderState.y.down - borderState.y.upper + 1,
          ];
          borderState.x.left = e.target.x();
          borderState.y.upper = e.target.y();
          setBorderState({ ...borderState });
        }}
      />
      <Line
        points={borderState.points.upper}
        x={borderState.x.left}
        y={borderState.y.upper}
        stroke={borderState.stroke}
        strokeWidth={borderState.strokeWidth + 3}
        opacity={borderState.opacity}
        dash={borderState.dash}
        draggable
      />
      <Line
        points={borderState.points.rigth}
        x={borderState.x.right}
        y={borderState.y.upper}
        stroke={borderState.stroke}
        strokeWidth={borderState.strokeWidth + 3}
        opacity={borderState.opacity}
        dash={borderState.dash}
        draggable
        onDragEnd={(e) => {
          borderState.points.rigth = [
            0,
            borderState.y.down - borderState.y.upper,
            0,
            0,
            0,
            0,
          ];
          borderState.points.upper = [
            0,
            0,
            borderState.x.right - borderState.x.left + 1,
            0,
            0,
            0,
          ];
          borderState.x.right = e.target.x();
          setBorderState({ ...borderState });
        }}
      />
      <Line
        points={borderState.points.upper}
        x={borderState.x.left}
        y={borderState.y.down}
        stroke={borderState.stroke}
        strokeWidth={borderState.strokeWidth + 3}
        opacity={borderState.opacity}
        dash={borderState.dash}
        draggable
        onDragEnd={(e) => {
          borderState.points.left = [
            0,
            0,
            0,
            0,
            0,
            borderState.y.down - borderState.y.upper + 1,
          ];
          borderState.points.rigth = [
            0,
            borderState.y.down - borderState.y.upper,
            0,
            0,
            0,
            0,
          ];
          borderState.points.upper = [
            0,
            0,
            borderState.x.right - borderState.x.left + 1,
            0,
            0,
            0,
          ];
          borderState.y.down = e.target.y();
          setBorderState({ ...borderState });
        }}
      />
    </React.Fragment>
  );
};

export default BorderReact;
