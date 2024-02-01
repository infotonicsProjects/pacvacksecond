"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Overview = dynamic(() => import("./overview"), { ssr: false });
import Faq from "./faq";
import Space from "./space";
import Option from "./option";
import dynamic from "next/dynamic";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="px-4" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="Options" {...a11yProps(2)} />
          <Tab label="Specs & Templates" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Overview data={data} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Faq data={data} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Option />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Space />
      </CustomTabPanel>
    </Box>
  );
}
