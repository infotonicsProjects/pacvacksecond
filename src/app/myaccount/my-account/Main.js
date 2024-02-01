"use client";
import { Box, Tab, Tabs, styled } from "@mui/material";
import React, { useState } from "react";
import TabContent from "./TabContent";
import { useSelector } from "react-redux";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
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
    "&:hover": {
      color: "#000",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#000",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#000",
    },
  }),
);
const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
  },
  "& .MuiTabs-indicator:hover": {
    borderBottom: "1px solid #000",
  },
});
const Main = () => {
  const user = useSelector((state) => state.userData);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <div className="ml-10 m-5 mb-5 w-100">
        <h1 className="fs-3 mt-4">Account Settings</h1>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="mt-5 border-0"
        >
          <AntTabs
            value={value}
            onChange={handleChange}
            extColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
            className="border-bottom"
          >
            <AntTab label="Personal Info" {...a11yProps(0)} />
            <AntTab label="Security " {...a11yProps(1)} />
            <AntTab label="Prefences " {...a11yProps(2)} />
          </AntTabs>
          <TabContent
            value={value}
            index={0}
            className="m-auto h-400"
            user={user}
          >
            You do not have any products available for reorder yet.
          </TabContent>
          <TabContent
            value={value}
            index={1}
            className="m-auto h-400"
          ></TabContent>
          <TabContent value={value} index={2} className="m-auto "></TabContent>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Main;
