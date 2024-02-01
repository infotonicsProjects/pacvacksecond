import React, { Fragment } from "react";
import { Line } from "react-konva";

const MiddleLine = ({ image, yMiddleLine, xMiddleLine }) => {
  return (
    <React.Fragment>
      {yMiddleLine && (
        <Line
          points={[0, 0, 0, 0, 0, image.width / 2, 0]}
          x={(image.width >= 1200 ? 1200 : image.width) / 2}
          y={0}
          stroke={"green"}
          strokeWidth={2}
        />
      )}
      {xMiddleLine && (
        <Line
          points={[image.width / 2, 0, 0, 0, 0, 0, 0]}
          x={0}
          y={2000 / 1.6}
          stroke={"green"}
          strokeWidth={2}
        />
      )}
    </React.Fragment>
  );
};

export default MiddleLine;
