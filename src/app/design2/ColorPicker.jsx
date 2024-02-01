import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ColorPicker from "react-pick-color";
const ColorPickerT = ({ selectedIdText, text, setText }) => {
  var item;
  var foundIndex = text.findIndex((x) => x.id == selectedIdText);
  item = text[foundIndex];
  const [color, setColor] = useState("");
  const handleChangeColor = (color) => {
    item.fill = color.hex;
    setText([...text]);
  };
  useEffect(() => {
    setColor(item?.fill);
  }, []);
  return (
    <React.Fragment>
      {selectedIdText !== null && (
        <Box sx={style}>
          <ColorPicker
            color={color}
            onChange={(color) => handleChangeColor(color)}
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default ColorPickerT;
const style = {
  position: "relative",
  left: "10%",
};
