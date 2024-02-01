import { Box, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Tab0 from "./Tab0";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const TabContent = (props) => {
  const { children, value, index, user, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className={"m"}>
          {0 === value ? (
            <Tab0 user={user} />
          ) : (
            <React.Fragment>
              {1 === value ? <Tab1 user={user} /> : <Tab2 />}
            </React.Fragment>
          )}
        </Box>
      )}
    </div>
  );
};

export default TabContent;
