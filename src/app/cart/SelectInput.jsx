"use client";
import { FormControl, InputBase, NativeSelect, styled } from "@mui/material";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "50px",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#017EB4",
      border: "3px solid #017EB4",
      boxShadow: "0 0 0 0rem rgba(0,123,255,.25)",
    },
  },
}));
const SelectInput = ({ handleChange, value }) => {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <NativeSelect
        id="demo-customized-select-native"
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={50}>40</option>
        <option value={100}>100</option>
        <option value={150}>150</option>
        <option value={200}>200</option>
        <option value={250}>250</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={2000}>2000</option>
      </NativeSelect>
    </FormControl>
  );
};
export default SelectInput;
