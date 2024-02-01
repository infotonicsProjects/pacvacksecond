import React, { useState } from "react";
import Selected from "./Selected";
import SelectedBackground from "./Selectedbackground";
import SelectedIcons from "./SelectedIcons";
import SelectedImage from "./SelectedImage";
import SelectedQr from "./SelectedQr";
import Sidebar from "./Sidebar";
import ColorPickerT from "./ColorPicker";
import SlectedLogo from "./SelectedLogos";
const LeftSection = ({
  setSelectedEdit,
  selectedEdit,
  setImages,
  images,
  setBackgroungImg,
  backgroundImg,
  text,
  setText,
  colorPickeropen,
  selectedIdText,
  selectShapeText,
  selectedId,
  backgropundColors,
  setBackgroundsColors,
  colors,
  setLogo,
  logo,
  setFont,
  fonts,
}) => {
  return (
    <div
      className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-1  ml-2 ps-2 z-2"
      style={{ paddingLeft: "25px" }}
    >
      <div
        className="d-flex position-fixed "
        style={{ gap: "15px", height: "0px" }}
      >
        <Sidebar
          setSelectedEdit={setSelectedEdit}
          selectedEdit={selectedEdit}
          selectedIdText={selectedIdText}
          selectedId={selectedId}
        />
        <div
          className="position-relative responnsive-mobile-w"
          style={{
            width: "400px",
            marginLeft: "5rem",
            marginTop: "6rem",
            fontSize: "0.788rem",
          }}
        >
          {selectedEdit === "text" ? (
            <Selected
              text={text}
              setText={setText}
              selectShapeText={selectShapeText}
              setSelectedEdit={setSelectedEdit}
              colors={colors}
              setLogo={setLogo}
              logo={logo}
              setImages={setImages}
              setFont={setFont}
            />
          ) : selectedEdit === "qrcode" ? (
            <SelectedQr setImages={setImages} images={images} colors={colors} />
          ) : selectedEdit === "images" ? (
            <SelectedImage
              setImages={setImages}
              images={images}
              setSelectedEdit={setSelectedEdit}
              colors={colors}
            />
          ) : selectedEdit === "icon" ? (
            <SelectedIcons
              setImages={setImages}
              images={images}
              setSelectedEdit={setSelectedEdit}
              colors={colors}
            />
          ) : selectedEdit === "background" ? (
            <SelectedBackground
              setBackgroungImg={setBackgroungImg}
              backgroundImg={backgroundImg}
              setSelectedEdit={setSelectedEdit}
              backgropundColors={backgropundColors}
              setBackgroundsColors={setBackgroundsColors}
            />
          ) : selectedEdit === "logo" ? (
            <SlectedLogo
              setImages={setImages}
              images={images}
              setSelectedEdit={setSelectedEdit}
              logo={logo}
              colors={colors}
            />
          ) : (
            <React.Fragment>
              {colorPickeropen && (
                <ColorPickerT
                  selectedIdText={selectedIdText}
                  text={text}
                  setText={setText}
                />
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
