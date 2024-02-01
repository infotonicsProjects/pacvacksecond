import React from "react";
import Selected from "./Selected";
import SelectedBackground from "./Selectedbackground";
import SelectedIcons from "./SelectedIcons";
import SelectedImage from "./SelectedImage";
import SelectedQr from "./SelectedQr";
import Sidebar from "./Sidebar";

const LeftSection = ({
  setSelectedEdit,
  selectedEdit,
  setImages,
  images,
  setBackgroungImg,
  backgroundImg,
  text,
  setText,
}) => {
  return (
    <div className="col-lg-4 ml-2" style={{ paddingLeft: "25px" }}>
      <div className="d-flex" style={{ gap: "15px" }}>
        <Sidebar
          setSelectedEdit={setSelectedEdit}
          selectedEdit={selectedEdit}
        />
        {selectedEdit === "text" ? (
          <Selected text={text} setText={setText} />
        ) : selectedEdit === "qrcode" ? (
          <SelectedQr />
        ) : selectedEdit === "images" ? (
          <SelectedImage setImages={setImages} images={images} />
        ) : selectedEdit === "icon" ? (
          <SelectedIcons setImages={setImages} images={images} />
        ) : selectedEdit === "background" ? (
          <SelectedBackground
            setBackgroungImg={setBackgroungImg}
            backgroundImg={backgroundImg}
          />
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    </div>
  );
};

export default LeftSection;
