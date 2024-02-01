import React, { useEffect, useState, useTransition } from "react";
import { Grid } from "@mui/material";
import TextHeader from "./TextHeader";
import ImageHeader from "./ImageHeader";
import dynamic from "next/dynamic";
const MoveModal = dynamic(() => import("./MoveMobile"));
const BottomHeader = ({
  selectedIdText,
  setText,
  text,
  colorPickeropen,
  setColorPickerOpen,
  selectShapeText,
  selectedId,
  selectShape,
  setImages,
  images,
}) => {
  // default select text
  // useEffect(() => {
  //   if (text.length !== 0) {
  //     selectShapeText(text[0].id);
  //   }
  // }, []);
  const [ispending, startTramnsiton] = useTransition();

  const [open, setOpen] = useState(false);
  var item;
  var foundIndex = text.findIndex((x) => x.id == selectedIdText);
  item = text[foundIndex];
  var itemimage;
  var foundIndex = images.findIndex((x) => x.id === selectedId);
  itemimage = images[foundIndex];

  const handleMove = (e) => {
    if (selectedIdText !== null) {
      if (e.target.name === "right") {
        item.x += 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "left") {
        item.x -= 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "up") {
        item.y -= 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "down") {
        item.y += 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      }
    } else if (selectedId !== null) {
      if (e.target.name === "right") {
        itemimage.x += 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "left") {
        itemimage.x -= 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "up") {
        itemimage.y -= 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      } else if (e.target.name === "down") {
        itemimage.y += 5;
        startTramnsiton(() => {
          setText([...text]);
        });
      }
    }
  };
  return (
    <React.Fragment>
      <MoveModal open={open} setOpen={setOpen} handleMove={handleMove} />
      {selectedIdText !== null && (
        <React.Fragment>
          <Grid
            container
            className="py-2 px-3 position-fixed z-3 bg-white  border-bottom border-dark selected-image-top"
            style={{ top: "64.6px" }}
          >
            <Grid item xs={12} className="my-auto">
              <TextHeader
                selectedIdText={selectedIdText}
                text={text}
                setText={setText}
                setColorPickerOpen={setColorPickerOpen}
                colorPickeropen={colorPickeropen}
                selectShapeText={selectShapeText}
                setOpen={setOpen}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
      {selectedId !== null && (
        <React.Fragment>
          <Grid
            container
            className="py-2 px-3 position-fixed z-3 bg-white  border-bottom border-dark selected-image-top selected-image-top-image"
            style={{ top: "64.6px" }}
          >
            <Grid item xs={12} className="my-auto">
              <ImageHeader
                selectedId={selectedId}
                selectShape={selectShape}
                setImages={setImages}
                images={images}
                setOpen={setOpen}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default BottomHeader;
