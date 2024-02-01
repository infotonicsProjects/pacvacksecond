"use client";
import React, { useState } from "react";
import BottomSection from "./BottomSection";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RigthSection from "./RigthSection";

const Main = () => {
  const [selectedEdit, setSelectedEdit] = useState("");
  const initialImages = [];
  const initialText = [];
  const [text, setText] = useState(initialText);
  const backgroundImginitial = {
    url: "img/bag-paper.webp",
    urlback: "img/bag-paper.webp",
    urlsideleft: "img/bag-white-side.jpeg",
    urlsideright: "img/bag-side-3.jpg",
  };
  const [size, setSize] = useState({
    width: 500,
    height: 700,
  });
  const [images, setImages] = useState(initialImages);
  const [backgroundImg, setBackgroungImg] = useState(backgroundImginitial);
  const handleExport = (uri) => {
    const nameOfDownload = "Image.png";
    const anchorElement = document.createElement("a");
    anchorElement.href = uri;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    // anchorElement.click();
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(uri);
  };
  const imaageSet = (prevStateImg) => {
    if (prevStateImg[0]) {
      prevStateImg[0].x = size.width / 2;
      prevStateImg[0].y = 224;
      setImages([...prevStateImg]);
    }
  };
  const handleUpdateXandY = () => {
    const prevStateImg = images;
    const prevStateText = text;
    // if text is null then logo goes to center
    if (text.length === 0 && prevStateImg[0]) {
      prevStateImg[0].x = size.width / 2;
      prevStateImg[0].y = 380;
      setImages([...prevStateImg]);
      // if text add then logo goes to upper center
    } else if (text.length === 1) {
      imaageSet(prevStateImg);
    }
    if (text.length === 1) {
      imaageSet(prevStateImg);
      prevStateText[0].x = size.width / 1.9;
      prevStateText[0].y = Math.max(
        size.height - 470,
        Math.min(size.height - 90),
      );
    } else if (text.length === 2) {
      imaageSet(prevStateImg);
      prevStateText[0].x = size.width / 2.5;
      prevStateText[0].y = Math.max(
        size.height - 470,
        Math.min(size.height - 90),
      );
      prevStateText[1].y = Math.max(
        size.height - 470,
        Math.min(size.height - 90),
      );
      prevStateText[1].x = size.width - size.width / 3.3;
    } else if (text.length === 3) {
      imaageSet(prevStateImg);
      if (prevStateImg[0]) {
        prevStateText[2].x = prevStateImg[0].x + 25;
        prevStateText[2].y = prevStateImg[0].y + 130;
      } else {
        prevStateText[2].x = size.width / 2 + 20;
        prevStateText[2].y = 224 + 100;
      }
    }
  };
  return (
    <React.Fragment>
      <div className="container mt-5 pt-5 ml-pl-0">
        <div className="row">
          <LeftSection
            setSelectedEdit={setSelectedEdit}
            selectedEdit={selectedEdit}
            setImages={setImages}
            images={images}
            setBackgroungImg={setBackgroungImg}
            backgroundImg={backgroundImg}
            setText={setText}
            text={text}
          />
          <MiddleSection
            images={images}
            setImages={setImages}
            setSize={setSize}
            size={size}
            backgroundImg={backgroundImg}
            setBackgroungImg={setBackgroungImg}
            setText={setText}
            text={text}
            handleExport={handleExport}
            handleUpdateXandY={handleUpdateXandY}
          />
          <RigthSection />
        </div>
        <BottomSection />
      </div>
    </React.Fragment>
  );
};

export default Main;
