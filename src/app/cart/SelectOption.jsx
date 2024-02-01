import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SelectOption = () => {
  return (
    <Box className="mt-4 border-bottom pb-5 pt-3">
      <Box className="d-flex justify-content-between">
        <Typography as="p" component={"h6"}>
          Selected options
        </Typography>
        <Typography as="div" component={"div"}>
          <Image src="/img/plus.svg" width={20} height={20} alt="plus icon" />
        </Typography>
      </Box>
    </Box>
  );
};

export default SelectOption;
