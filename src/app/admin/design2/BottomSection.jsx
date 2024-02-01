import { Box, Slider, styled } from "@mui/material";
import React, { useEffect } from "react";

const BottomSection = ({
  setScale,
  scale,
  handleScale,
  setSelectedEdit,
  setHistoryStep,
  setHistory,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (screen.width <= 600) {
        setTimeout(() => {
          handleScale(25);
        }, [1000]);
        setScale(25);
        setSelectedEdit("");
      }
    };
    if (screen.width <= 600) {
      setTimeout(() => {
        handleScale(25);
      }, [1000]);
      setScale(25);
      setSelectedEdit("");
    }
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="col-lg-12  z-3 mobile-display-none">
      <div
        className="container position-fixed bottom-0 z-2"
        style={{ background: "#f8f8f8e6" }}
      >
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 responsive-mobile-justify-center">
          <div className="mr-3 d-flex align-items-center justify-content-center pr-3 ">
            <PrettoSlider
              value={scale}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(e) => {
                setScale(e.target.value), handleScale(e.target.value);
              }}
              max={400}
              min={25}
              style={{ width: "120px" }}
            />

            <p className="mb-0 mx-3">{scale}%</p>
          </div>
          <button className="nav-link align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none responsive-mobile-hide">
            View
          </button>
          <Box className="d-flex" style={{ gap: "10px" }}>
            <button className="nav-link align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none responsive-mobile-hide border-end pe-2">
              Undo
            </button>
            <button
              className="nav-link align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none responsive-mobile-hide"
              disabled
            >
              Redo
            </button>
          </Box>
          <ul className="nav col-md-4 justify-content-end responsive-mobile-hide invisible">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default BottomSection;

export const PrettoSlider = styled(Slider)({
  color: "#000",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#000",
    padding: "5px",
    border: "2px solid #017EB4",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
