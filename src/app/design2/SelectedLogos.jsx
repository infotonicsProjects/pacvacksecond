import Image from "next/image";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const SelectedLogos = ({
  images,
  setImages,
  setSelectedEdit,
  logo,
  colors,
  setLogo,
  fonts,
}) => {
  const [actualColor, setColors] = useState({ r: 0, g: 0, b: 0 });
  const [fontDetail, setFontDetail] = useState([]);

  const handleClick = (iamge, id) => {
    const deleteItem = images.filter((x) => x.id !== id);
    setImages([
      ...deleteItem,
      {
        width: 100,
        height: 100,
        id: id,
        green: actualColor.g,
        red: actualColor.r,
        blue: actualColor.b,
        alpha: 1,
        x: 357.9999999999996,
        y: 950.0000000000006,
        rotation: 0,
        zIndex: 1,
        draggable: true,
        url: iamge,
      },
    ]);
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
  useEffect(() => {
    setFontDetail(logo);
  }, [logo]);
  return (
    <div
      className="shadow ml-3 bg-white rounded-4 mt-n5 overflow-auto responsive-height"
      style={{
        height: "700px",
        position: logo?.length > 0 && "fixed",
        top: logo?.length > 0 && "18%",
        width: "18%",
        left: " 81%",
        display: logo?.length > 0 ? "block" : "none"
      }}
    >
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-5">
            Logos
            <button
              className="btn  position-relative"
              style={{ left: "190px" }}
              onClick={() => setLogo([])}
            >
              X
            </button>
          </h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-30"
          style={{ width: "45%" }}
        >
          <p className="fs-6">Choose Logos</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {logo?.map((image, i) => (
            <img
              src={image.design}
              key={i}
              className="image-view border m-2 p-2"
              onClick={() => handleClick(image.design, image?.font_name)}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedLogos;
