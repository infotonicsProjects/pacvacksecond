import { Box, Modal } from "@mui/material";
import React, { useEffect, useState, useTransition } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import Ocr from "../ocr/Ocr";

import Image from "next/image";
import { PostData } from "../../../utlis/ClientApi";
const Selected = ({
  setText,
  text,
  selectShapeText,
  setSelectedEdit,
  colors,
  setLogo,
  logo,
  setImages,
}) => {
  const [ispending, startTranstion] = useTransition();
  const [actualColor, setColors] = useState({ r: 0, g: 0, b: 0 });
  const [ocrPreview, setOcrPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const UpdateText = (e, i, item) => {
    setTimeout(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      const spliceData = e.target.value.split(" ");
      const firstWord = spliceData[0].slice(0, 1);
      const lastWord = spliceData[spliceData.length - 1].slice(0, 1);
      const viewData = firstWord + "," + lastWord;
      if (e.target.value.length >= 3) {
        const data = {
          key: viewData,
        };
        setTimeout(async () => {
          const response = await PostData(
            "alphabet_search",
            setLoading,
            signal,
            data,
          );
          setLogo(response);
        }, 500);
      } else {
      }
    }, 500);
    const prevState = text;
    if (prevState[i].text !== undefined) {
      prevState[i] = {
        ...item,
        text: e.target.value,
      };
    } else if (prevState[i].textPath !== undefined) {
      prevState[i] = {
        ...item,
        textPath: e.target.value,
      };
    }
    startTranstion(() => {
      setText([...prevState]);
    });
  };
  const handleDelete = (item) => {
    startTranstion(() => {
      selectShapeText(null);
      setText(text.filter((a) => a.id !== item.id));
    });
  };
  const handleFocusSelected = (id) => {
    startTranstion(() => {
      selectShapeText(id);
    });
  };
  const handleOcr = () => {
    setOcrPreview(true);
    setText((prev) => [
      ...prev,
      {
        x: 210,
        y: 600,
        width: 100,
        height: 25,
        text: "Paste here ocr text",
        id: uuidv4(),
        red: 255,
        green: 255,
        blue: 0,
        fontSize: 20,
        blue: 0,
        fontSize: 20,
        green: 255,
        height: 25,
        fontFamily: "Arial",
        fontStyle: "normal",
        align: "center",
        fill: colors,
        strokeWidth: "2",
        rotation: 0,
        textDecoration: "",
      },
    ]);
  };
  const handleClick = (id) => {
    setImages((prev) => [
      ...prev,
      {
        x: 229,
        y: 374,
        width: 100,
        height: 100,
        url: id,
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
  return (
    <div
      className="shadow  rounded-4 mt-n5 bg-white overflow-auto responsive-height mobile-flex-reverse"
      style={{ height: "700px" }}
    >
      <div className="p-4">
        <div className="pb-2 mobile-display-none">
          <h1 className="fs-5">Text</h1>
        </div>
        <div className="mb-2 mobile-display-none">
          <p className="text-black-50">
            Edit your text below&lsquo; or click on the field you&apos;d like to
            edit directly on your design.
          </p>
        </div>
        <div
          className="d-flex flex-wrap fs-6 mobile-display-none"
          style={{ gap: "10px" }}
        >
          <button
            className="btn btn-red rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 650,
                  width: 100,
                  height: 25,
                  text: "Youtube",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/youtube.png",
                  blue: 0,
                  fontSize: 20,
                  green: 255,
                  height: 25,
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            Youtube
          </button>
          <button
            className="btn btn-blue rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 650,
                  y: 650,
                  width: 100,
                  height: 25,
                  text: "Facebook",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/facebook.png",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            FaceBook
          </button>
          <button
            className="btn btn-pink rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 650,
                  y: 650,
                  width: 100,
                  height: 25,
                  text: "Instagram",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/instagram.png",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            Insta
          </button>
          <button
            className="btn btn-grey rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 650,
                  y: 650,
                  width: 100,
                  height: 25,
                  text: "Url",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/url.png",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            Url
          </button>
          <button
            className="btn btn-blue rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 650,
                  y: 650,
                  width: 100,
                  height: 25,
                  text: "Address",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            Address
          </button>
          <button
            className="text-dark btn btn-light rounded-pill  mx-2 h-36px"
            onClick={handleOcr}
          >
            Ocr
          </button>
        </div>
        <div className="w-100 mt-5 mobile-margin-0">
          <button
            className="btn btn-dark rounded-pill w-100 py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 650,
                  y: 800,
                  width: 100,
                  height: 25,
                  text: "Change the Text Field",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  align: "center",
                  fill: colors,
                  strokeWidth: "2",
                  rotation: 0,
                  textDecoration: "",
                },
              ])
            }
          >
            New Text Feild
          </button>
        </div>
      </div>

      <div className="border pt-4 ">
        <h1 className="mx-4 fs-5 px-4">
          <button
            className="btn hide-dekstop position-relative"
            style={{ fontSize: "1.5rem", right: "40px", bottom: "30px" }}
            onClick={() => setSelectedEdit(null)}
          >
            {"<"}
          </button>
          Change the Text Feild
        </h1>
        <div
          className="input-group d-flex flex-wrap flex-column p-4"
          style={{ gap: "20px" }}
        >
          {text?.map((item, i) => (
            <div className=" px-2 mx-3  d-flex align-items-center justify-content-center fs-3">
              <input
                type="text"
                placeholder={item.text ? item.text : item.textPath}
                id="youtube-input"
                className="form-control mr-3"
                value={item.text ? item.text : item.textPath}
                onChange={(e) => UpdateText(e, i, item)}
                onFocus={() => handleFocusSelected(item.id)}
              />
              <span
                onClick={() => handleDelete(item)}
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center justify-content-center"
              >
                <MdDelete />
              </span>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={ocrPreview}
        onClose={() => setOcrPreview(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-auto"
      >
        <Box sx={style}>
          <Ocr />
        </Box>
      </Modal>
    </div>
  );
};

export default Selected;
const style = {
  position: "absolute",
  bottom: "-30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "12px",
};
