"use client";
import { Box, Tab, Tabs, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import AddressForm from "./AddressForm";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TabsAddress = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <div>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <AntTab label="Enter My Address" {...a11yProps(0)} />
            {/* <AntTab label="Pickup point" {...a11yProps(1)} /> */}
          </AntTabs>
          <TabPanel value={value} index={0}>
            <AddressForm />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TabsAddress;
const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #000",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
  },
});
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
    fontFamily: ['"Graphik"'].join(","),
    "&:hover": {
      color: "#000",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#000",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#0000",
    },
  }),
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography as={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
