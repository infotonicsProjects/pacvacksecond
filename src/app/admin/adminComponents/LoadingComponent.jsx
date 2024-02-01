import React from "react";
import ReactLoading from "react-loading";
const LoadingComponet = () => {
  return (
    <div
      className="d-flex justify-content-center h-100
    align-items-center"
    >
      <ReactLoading type={"spinningBubbles"} color="voilet" width={100} />
    </div>
  );
};

export default LoadingComponet;
