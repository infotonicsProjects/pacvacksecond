import { Box, Grid, InputBase, MenuItem, Select, styled } from "@mui/material";
import React, { useState, useTransition } from "react";
import Rotation from "./Rotation";
import AlignText from "./AlignText";
import { v4 as uuidv4 } from "uuid";
import ArrangeForwardbackWard from "./ArrangeForwardbackWard";
import { ToastSuccess } from "../../utlis/Toast";
import { oswald } from "../../utlis/fonts";
const TextHeader = ({
  selectedIdText,
  setText,
  text,
  setColorPickerOpen,
  colorPickeropen,
  selectShapeText,
  setOpen,
  setSelectedEdit,
}) => {
  const [openArrange, setOpenArrange] = useState(false);
  const [enableRotation, setEnableRotaion] = useState(false);
  const [enableAlign, setEnableAlign] = useState(false);
  var item;
  var foundIndex = text.findIndex((x) => x.id == selectedIdText);
  item = text[foundIndex];
  const [ispending, startTranstion] = useTransition();
  const handleChangeFontSize = (e) => {
    if (e.target.name === "minus") {
      item.fontSize = parseInt(item.fontSize) - 1;
      startTranstion(() => {
        setText([...text]);
      });
    } else if (e.target.name === "plus") {
      item.fontSize = parseInt(item.fontSize) + 1;
      startTranstion(() => {
        setText([...text]);
      });
    } else {
      item.fontSize = e.target.value;
      startTranstion(() => {
        setText([...text]);
      });
    }
  };
  const handleChangeFontFamily = (e) => {
    item.fontFamily = e.target.value;
    startTranstion(() => {
      setText([...text]);
    });
  };
  const handleBold = () => {
    if (item.fontStyle === "bold") {
      item.fontStyle = "normal";
      startTranstion(() => {
        setText([...text]);
      });
    } else {
      item.fontStyle = "bold";
      startTranstion(() => {
        setText([...text]);
      });
    }
  };
  const handleItalic = () => {
    if (item.fontStyle === "bold") {
      item.fontStyle = "italic bold";
      startTranstion(() => {
        setText([...text]);
      });
    } else if (item.fontStyle === "normal") {
      item.fontStyle = "italic";
      startTranstion(() => {
        setText([...text]);
      });
    } else {
      item.fontStyle = "normal";
      startTranstion(() => {
        setText([...text]);
      });
    }
  };
  const handleUnderLine = () => {
    if (item.textDecoration === "underline") {
      item.textDecoration = "";
      startTranstion(() => {
        setText([...text]);
      });
    } else {
      item.textDecoration = "underline";
      startTranstion(() => {
        setText([...text]);
      });
    }
  };
  const handleRotation = (e) => {
    item.rotation = e.target.value;
    startTranstion(() => {
      setText([...text]);
    });
  };
  const handleDelete = () => {
    const deleteItem = text.filter((x) => x.id !== selectedIdText);
    startTranstion(() => {
      setText(deleteItem);
      selectShapeText(null);
    });
  };
  const handleAlign = (value) => {
    item.align = value;
    startTranstion(() => {
      setText([...text]);
    });
  };
  const handleDuplicate = () => {
    setText([...text, { ...item, id: uuidv4() }]);
    ToastSuccess("Duplicate Successfully");
  };
  const handleIndexChangebY1 = (e, id) => {
    if (e.target.name === "plus") {
      item.zIndex = item.zIndex + 1;
      startTranstion(() => {
        setText([...text]);
      });
    } else if (e.target.name === "minus") {
      item.zIndex = item.zIndex - 1;
      startTranstion(() => {
        setText([...text]);
      });
    } else if (id === 1) {
      item.zIndex = text.length * 3;
      startTranstion(() => {
        setText([...text]);
      });
    } else if (id === 0) {
      item.zIndex = 1;
      startTranstion(() => {
        setText([...text]);
      });
    }
  };
  return (
    <React.Fragment>
      <Grid
        container
        className="justify-content-around responsive-mobile-justify-center "
      >
        <Grid
          item
          className="d-flex text-header-top responsive-width mobile-scroll mobile-display-column"
        >
          <Box className="border-end margin-left-6rem border-mobile-bottom">
            <Select
              className="rounded-pill py-3 "
              style={{ width: "200px", height: "5px" }}
              input={<BootstrapInput />}
              label="kraf"
              defaultValue={item.fontFamily}
              onChange={handleChangeFontFamily}
            >
              <MenuItem value={"Arial"} selected>
                Arail
              </MenuItem>
              <MenuItem value={"Archivo Narrow"}>Archivo Narrow</MenuItem>
              <MenuItem value={"Abel"}>Abel</MenuItem>{" "}
              <MenuItem value={"Alex Brush"}>Alex Brush</MenuItem>
              <MenuItem value={"oswald"} className={oswald.className}>
                {" "}
                Oswald
              </MenuItem>
              <MenuItem
                value={"Havana"}
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                {" "}
                Havana
              </MenuItem>
            </Select>
          </Box>
          <Box className="mx-2 input-btn-hide font-size-input-div">
            <button
              className="btn btn-sm btn-light mx-2"
              name="minus"
              onClick={handleChangeFontSize}
            >
              -
            </button>
            <input
              type="number"
              className="border-none p-1"
              value={item.fontSize}
              onChange={handleChangeFontSize}
            />
            <button
              className="btn btn-sm btn-light mx-2"
              name="plus"
              onClick={handleChangeFontSize}
            >
              +
            </button>
          </Box>
          <Box className="my-auto selected-image ">
            <button
              className="btn rounded-circle btn-sm mx-1 "
              style={{ width: "35px", height: "35px" }}
              onClick={() => {
                setEnableRotaion(false),
                  setEnableAlign(false),
                  setColorPickerOpen(!colorPickeropen),
                  setOpenArrange(false),
                  setSelectedEdit(null);
              }}
            >
              {SVG[0]}
            </button>
            <button
              className={
                item.fontStyle === "bold" || item.fontStyle === "italic bold"
                  ? "btn rounded-circle btn-sm text-white fw-bold fs-6 mx-1 bg-dark"
                  : "btn rounded-circle btn-sm text-dark fw-bold fs-6 mx-1 "
              }
              style={{ width: "30px", height: "30px" }}
              onClick={handleBold}
            >
              B
            </button>
            <button
              className={
                item.fontStyle === "italic" || item.fontStyle === "italic bold"
                  ? "btn rounded-circle btn-sm text-white bg-success fw-light fs-6 mx-1 fst-italic"
                  : "btn rounded-circle btn-sm text-dark fw-light fs-6 mx-1 fst-italic"
              }
              style={{ width: "30px", height: "30px" }}
              onClick={handleItalic}
            >
              I
            </button>
            <button
              className={
                item.textDecoration === "underline"
                  ? "btn rounded-circle btn-sm text-white bg-danger  fs-6 mx-1 text-decoration-underline"
                  : "btn rounded-circle btn-sm text-dark  fs-6 mx-1 text-decoration-underline"
              }
              style={{ width: "30px", height: "30px" }}
              onClick={handleUnderLine}
            >
              U
            </button>
            <button
              className="btn  btn-sm text-dark mx-2 fw-medium "
              onClick={() => {
                setEnableRotaion(!enableRotation),
                  setEnableAlign(false),
                  setColorPickerOpen(false),
                  setOpenArrange(false);
              }}
            >
              {SVG[1]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Rotate
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark mx-2 fw-medium "
              onClick={handleDelete}
            >
              {SVG[2]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Delete
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium "
              onClick={() => {
                setEnableAlign(!enableAlign), setEnableRotaion(false);
                setColorPickerOpen(false), setOpenArrange(false);
              }}
            >
              {SVG[3]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Align
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium "
              onClick={() => {
                setOpenArrange(!openArrange),
                  setEnableRotaion(false),
                  setColorPickerOpen(false),
                  setEnableAlign(false);
              }}
            >
              {SVG[4]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Arrange
              </span>
            </button>
            <button
              className="btn  btn-sm text-dark   mx-2 fw-medium "
              onClick={handleDuplicate}
            >
              {SVG[5]}{" "}
              <span style={{ verticalAlign: "middle", marginTop: "5px" }}>
                Duplicate
              </span>
            </button>
            <button
              className={"btn btn-sm text-dark   fs-6 mx-1 "}
              onClick={() => setOpen(true)}
            >
              Move
            </button>
          </Box>
        </Grid>
      </Grid>
      {enableRotation && <Rotation handleRotation={handleRotation} />}
      {enableAlign && <AlignText handleAlign={handleAlign} item={item} />}
      {openArrange && (
        <ArrangeForwardbackWard
          handleIndexChangebY1={handleIndexChangebY1}
          length={text.length}
          item={item}
        />
      )}
    </React.Fragment>
  );
};

export default TextHeader;

const SVG = [
  <svg viewBox="0 0 32 32" width={24} height={24} key={1}>
    <svg id="Camada_1" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve">
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.textcoloricon0{clip-path:url(#SVGID_2_);}\n\t.textcoloricon1{clip-path:url(#SVGID_4_);}\n\t.textcoloricon2{fill:none;}\n\t.textcoloricon3{fill:none;stroke:currentColor;stroke-width:1.5;}\n\t.textcoloricon4{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;}\n",
        }}
      />
      <g>
        <g>
          <g>
            <defs>
              <path
                id="SVGID_5_"
                d="M16,0C7.2,0,0,7.2,0,16l0,0c0,8.8,7.2,16,16,16s16-7.2,16-16l0,0C32,7.2,24.8,0,16,0z M16,30 C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14S23.7,30,16,30z"
              />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_5_" style={{ overflow: "visible" }} />
            </clipPath>
            <g className="textcoloricon0">
              <g>
                <g>
                  <defs>
                    <rect id="SVGID_7_" x={-5} y={-5} width={42} height={42} />
                  </defs>
                  <clipPath id="SVGID_4_">
                    <use
                      xlinkHref="#SVGID_7_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="textcoloricon1">
                    <image
                      width={90}
                      height={90}
                      xlinkHref="data:image/jpeg;base64,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"
                      transform="matrix(0.4693 0 0 0.4693 -5.18 -5.1)"
                      style={{ overflow: "visible" }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <rect x={8} y={8} className="textcoloricon2" width={16} height={16} />
      <g>
        <path className="textcoloricon3" d="M16,11v10.2" />
        <path className="textcoloricon4" d="M11,11h10" />
        <path className="textcoloricon4" d="M11,13v-2" />
        <path className="textcoloricon4" d="M21,13v-2" />
        <line
          className="textcoloricon4"
          x1="13.8"
          y1="21.2"
          x2="18.2"
          y2="21.2"
        />
      </g>
    </svg>
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 5px 0px" }}
    viewBox="0 0 14 15"
    fill="none"
    aria-hidden="true"
    key={2}
  >
    <rect
      x="2.5"
      y="7.51514"
      width={8}
      height="7.09091"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 3.57576C10 3.57576 14 3.57576 14 7.51515M8.5 2L6.5 3.57576L8.5 5.15152"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    key={3}
  >
    <path
      d="M4.4 14L3.65372 14.0746C3.69206 14.458 4.01469 14.75 4.4 14.75L4.4 14ZM11.6 14L11.6 14.75C11.9853 14.75 12.3079 14.458 12.3463 14.0746L11.6 14ZM2.75372 5.07463L3.65372 14.0746L5.14628 13.9254L4.24628 4.92537L2.75372 5.07463ZM4.4 14.75L11.6 14.75L11.6 13.25L4.4 13.25L4.4 14.75ZM12.3463 14.0746L13.2463 5.07463L11.7537 4.92537L10.8537 13.9254L12.3463 14.0746Z"
      fill="currentColor"
    />
    <path
      d="M2 5H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 4V2.94297C5 2.42218 5.42218 2 5.94297 2H10.057C10.5778 2 11 2.42218 11 2.94297V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    key={5}
  >
    <rect width={16} height={16} />
    <path
      d="M5 12H11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 8H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 4H11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    key={8}
  >
    <g clipPath="url(#clipArrange)">
      <rect width={16} height={16} />
      <path
        d="M2.12426 5.22361C1.94 5.13148 1.94 4.86852 2.12426 4.77639L7.8882 1.89443C7.95858 1.85924 8.04142 1.85924 8.1118 1.89443L13.8757 4.77639C14.06 4.86852 14.06 5.13148 13.8757 5.22361L8.1118 8.10557C8.04142 8.14076 7.95858 8.14076 7.8882 8.10557L2.12426 5.22361Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 8.5L7.55279 11.2764C7.83431 11.4172 8.16569 11.4172 8.44721 11.2764L14 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 11.5L7.55279 14.2764C7.83431 14.4172 8.16569 14.4172 8.44721 14.2764L14 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clipArrange">
        <rect width={16} height={16} />
      </clipPath>
    </defs>
  </svg>,
  <svg
    style={{ width: "16px", margin: "0px 3px 4px 0px" }}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    key={20}
  >
    <rect width={16} height={16} fill="white" />
    <rect
      width={9}
      height={9}
      rx={1}
      transform="matrix(-1 0 0 1 11 5)"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      width={9}
      height={9}
      rx={1}
      transform="matrix(-1 0 0 1 14 2)"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.5 5L9.5 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 6.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #ced4da",
    fontSize: 15,
    padding: "0.5rem",
    margin: "5px",
    borderRadius: "50rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      background: "#eee",
    },
    "&:hover": {
      background: "#f8f8f8",
    },
  },
}));
