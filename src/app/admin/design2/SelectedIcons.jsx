import Image from "next/image";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const SelectedIcons = ({ images, setImages, setSelectedEdit, colors }) => {
  const [actualColor, setColors] = useState({ r: 0, g: 0, b: 0 });
  const icons = [
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "/img/logo/h.png",
      id: 1,
      green: actualColor.g,
      red: actualColor.r,
      blue: actualColor.b,
      id: uuidv4(),

      width: 100,
      x: 357.9999999999996,
      y: 950.0000000000006,
      rotation: 0,
      draggable: true,
      zIndex: 1,
      alpha: 1,
    },
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "/img/logo/a.png",
      id: 2,
      green: actualColor.g,
      red: actualColor.r,
      blue: actualColor.b,
      id: uuidv4(),

      width: 100,
      x: 357.9999999999996,
      y: 950.0000000000006,
      rotation: 0,
      draggable: true,
      alpha: 1,
      zIndex: 1,
    },
    {
      x: 229,
      y: 374,
      width: 100,
      height: 100,
      url: "https://raw.githubusercontent.com/konvajs/site/master/react-demos/filters/public/lion.png",
      id: 3,
      green: actualColor.g,
      red: actualColor.r,
      blue: actualColor.b,
      width: 100,
      x: 357.9999999999996,
      y: 950.0000000000006,
      rotation: 0,
      draggable: true,
      zIndex: 1,
      alpha: 1,
      id: uuidv4(),
    },
  ];
  const handleClick = (id) => {
    setImages((prev) => [...prev, icons[id]]);
  };
  useEffect(() => {
    const hex2rgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      // return {r, g, b}
      return { r, g, b };
    };
    setColors(hex2rgb(colors));
  }, [colors]);
  return (
    <div
      className="shadow ml-3 bg-white rounded-4 mt-n5 overflow-auto responsive-height"
      style={{ height: "700px" }}
    >
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-5">
            Icons{" "}
            <button
              className="btn hide-dekstop position-relative"
              style={{ left: "190px" }}
              onClick={() => setSelectedEdit(null)}
            >
              X
            </button>
          </h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-30"
          style={{ width: "45%" }}
        >
          <p className="fs-6">Choose Icons</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {icons?.map((image, i) => (
            <img
              src={image.url}
              key={i}
              className="image-view border m-2 p-2"
              onClick={() => handleClick(i)}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedIcons;
