import React from "react";
import { Line, Text } from "react-konva";

const Dimension = ({ dimension }) => {
  return (
    <React.Fragment>
      <Line
        draggable
        points={[0, 0, 0, 0, 0, dimension.points.left[5] / 2, 0]}
        x={dimension.x.left - 20}
        y={dimension.y.upper + 5}
        stroke={"black"}
        strokeWidth={dimension.strokeWidth + 1}
        opacity={dimension.opacity}
      />
      <Text
        text={"4.53in"}
        x={dimension.x.left - 38}
        y={dimension.y.upper * 1.4 - 50}
      />
      <Line
        draggable
        points={[0, 0, 0, 0, 0, dimension.points.left[5] / 2 - 32, 0]}
        x={dimension.x.left - 20}
        y={dimension.y.upper * 1.4 - 35}
        stroke={"black"}
        strokeWidth={dimension.strokeWidth + 1}
        opacity={dimension.opacity}
      />
      <Line
        draggable
        points={[0, 0, dimension.points.upper[2] / 2 - 60, 0, 0, 0]}
        x={dimension.x.down}
        y={dimension.y.down + 15}
        stroke={"black"}
        strokeWidth={dimension.strokeWidth}
        opacity={dimension.opacity}
      />
      <Text
        text={"8.66in"}
        x={dimension.x.left + 10 * dimension.x.down + 5}
        y={dimension.y.down + 10}
      />
      <Line
        draggable
        points={[0, 0, dimension.points.upper[2] / 2 + 10, 0, 0, 0]}
        x={dimension.x.down * 10 + 100}
        y={dimension.y.down + 15}
        stroke={"black"}
        strokeWidth={dimension.strokeWidth}
        opacity={dimension.opacity}
      />
    </React.Fragment>
  );
};

export default Dimension;
