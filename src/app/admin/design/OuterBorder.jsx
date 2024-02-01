import React from "react";
import { Line } from "react-konva";
const OuterBorder = ({
  outerBorder,
  setOuterBorder,
  setBorderState,
  borderState,
  setrSafeArea,
  safeArea,
}) => {
  return (
    <React.Fragment>
      <Line
        points={outerBorder.points.left}
        x={outerBorder.x.left}
        y={outerBorder.y.upper}
        stroke={outerBorder.stroke}
        strokeWidth={outerBorder.strokeWidth + 1}
        opacity={outerBorder.opacity}
        draggable
        onDragEnd={(e) => {
          borderState.points.left = [
            0,
            0,
            0,
            0,
            0,
            outerBorder.y.down - outerBorder.y.upper - 53,
          ];
          borderState.points.upper = [
            0,
            0,
            outerBorder.x.right - outerBorder.x.left - 53,
            0,
            0,
            0,
          ];
          borderState.x.left = e.target.x() + 30;
          borderState.y.upper = e.target.y() + 30;
          safeArea.y = e.target.y() - 40;
          outerBorder.points.left = [
            0,
            0,
            0,
            0,
            0,
            outerBorder.y.down - outerBorder.y.upper + 1,
          ];
          outerBorder.points.upper = [
            0,
            0,
            outerBorder.x.right - outerBorder.x.left + 1,
            0,
            0,
            0,
          ];
          outerBorder.x.left = e.target.x();
          outerBorder.y.upper = e.target.y();
          setOuterBorder({ ...outerBorder });
          setBorderState({ ...borderState });
          setrSafeArea({ ...safeArea });
        }}
      />
      <Line
        points={outerBorder.points.upper}
        x={outerBorder.x.left}
        y={outerBorder.y.upper}
        stroke={outerBorder.stroke}
        strokeWidth={outerBorder.strokeWidth + 1}
        opacity={outerBorder.opacity}
        draggable
      />
      <Line
        points={outerBorder.points.rigth}
        x={outerBorder.x.right}
        y={outerBorder.y.upper}
        stroke={outerBorder.stroke}
        strokeWidth={outerBorder.strokeWidth + 1}
        opacity={outerBorder.opacity}
        draggable
        onDragEnd={(e) => {
          borderState.points.rigth = [
            0,
            outerBorder.y.down - outerBorder.y.upper - 53,
            0,
            0,
            0,
            0,
          ];
          borderState.points.upper = [
            0,
            0,
            outerBorder.x.right - outerBorder.x.left - 53,
            0,
            0,
            0,
          ];
          borderState.x.right = e.target.x() - 30;
          outerBorder.points.rigth = [
            0,
            outerBorder.y.down - outerBorder.y.upper,
            0,
            0,
            0,
            0,
          ];
          outerBorder.points.upper = [
            0,
            0,
            outerBorder.x.right - outerBorder.x.left + 1,
            0,
            0,
            0,
          ];
          outerBorder.x.right = e.target.x();
          setBorderState({ ...borderState });
          setrSafeArea({ ...safeArea });
          setOuterBorder({ ...outerBorder });
        }}
      />
      <Line
        points={outerBorder.points.upper}
        x={outerBorder.x.down}
        y={outerBorder.y.down}
        stroke={outerBorder.stroke}
        strokeWidth={outerBorder.strokeWidth + 1}
        opacity={outerBorder.opacity}
        draggable
        onDragEnd={(e) => {
          borderState.y.down = e.target.y() - 30;
          borderState.points.rigth = [
            0,
            outerBorder.y.down - outerBorder.y.upper - 53,
            0,
            0,
            0,
            0,
          ];
          borderState.points.left = [
            0,
            0,
            0,
            0,
            0,
            outerBorder.y.down - outerBorder.y.upper - 53,
          ];
          borderState.x.down = e.target.x() + 30;
          outerBorder.y.down = e.target.y();
          outerBorder.points.rigth = [
            0,
            outerBorder.y.down - outerBorder.y.upper,
            0,
            0,
            0,
            0,
          ];
          outerBorder.points.left = [
            0,
            0,
            0,
            0,
            0,
            outerBorder.y.down - outerBorder.y.upper + 1,
          ];
          outerBorder.x.down = e.target.x();
          setBorderState({ ...borderState });
          setrSafeArea({ ...safeArea });
          setOuterBorder({ ...outerBorder });
        }}
      />
    </React.Fragment>
  );
};

export default OuterBorder;
