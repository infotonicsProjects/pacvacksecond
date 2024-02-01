import React from "react";
const SelectedBackground = ({
  setBackgroungImg,
  backgroundImg,
  setSelectedEdit,
  backgropundColors,
  setBackgroundsColors,
}) => {
  //

  const handleClick = (id) => {
    setBackgroungImg(backgropundColors[id]);
  };
  return (
    <div className="shadow ml-3 bg-white rounded-4 mt-n5 responsive-height overflow-auto">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-5">
            Background{" "}
            <button
              className="btn hide-dekstop position-relative"
              style={{ left: "140px" }}
              onClick={() => setSelectedEdit(null)}
            >
              X
            </button>
          </h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between "
          style={{ width: "60%" }}
        >
          <p className="fs-6">Choose Background</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {backgropundColors?.map((image, i) => (
            <img
              src={image.url}
              key={i}
              className={
                backgroundImg.url === image.url
                  ? "image-view border m-2 p-2 border-success border-2"
                  : "image-view border m-2 p-2"
              }
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedBackground;
