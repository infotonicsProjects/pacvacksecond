import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const SelectedIcons = ({ images, setImages }) => {
  const icons = [
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "img/logo/h.png",
      id: 1,
      red: 255,
      green: 255,
      id: uuidv4(),
      blue: 0,
    },
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "img/logo/a.png",
      id: 2,
      red: 255,
      green: 255,
      id: uuidv4(),
      blue: 0,
    },
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "https://raw.githubusercontent.com/konvajs/site/master/react-demos/filters/public/lion.png",
      id: 3,
      red: 255,
      green: 255,
      blue: 0,
      id: uuidv4(),
    },
  ];
  const handleClick = (id) => {
    setImages((prev) => [...prev, icons[id]]);
  };
  return (
    <div className="shadow ml-3 h-50 rounded-4 mt-n5">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-4">Icons</h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-30"
          style={{ width: "45%" }}
        >
          <p className="fs-5">Choose Icons</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {icons?.map((image, i) => (
            <img
              src={image.url}
              key={i}
              className="image-view border m-2 p-2"
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedIcons;
